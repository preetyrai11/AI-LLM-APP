import { NextRequest, NextResponse } from 'next/server';
import { auth } from "@clerk/nextjs";
import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const API_AUTH_KEY = process.env.API_AUTH_KEY;
const API_ENDPOINT = "http://3.144.126.59:8020/compiling_chain_stream";

// Since Next.js Edge functions use Streams API, we need to ensure our streaming logic is compatible.
function streamFromAPIResponse(apiResponse: Response) {
  const { readable, writable } = new TransformStream();
  const writer = writable.getWriter();
  const reader = apiResponse.body?.getReader();
  const decoder = new TextDecoder();

  function push() {
    reader?.read().then(({ done, value }) => {
      if (done) {
        writer.close();
        return;
      }
      // Convert the Uint8Array to a string and write it to the stream
      writer.write(decoder.decode(value, { stream: true }));
      push();
    });
  }

  push();
  return readable;
}

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return new NextResponse(JSON.stringify({ error: 'Method Not Allowed' }), { status: 405 });
  }

  try {
    // Authenticate the user
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    // Check if the API limit has been reached
    const freeTrial = await checkApiLimit(); // Pass any necessary arguments
    const isPro = await checkSubscription();
    if (!freeTrial && !isPro) {
      return new NextResponse("Free trial has expired. Please upgrade to pro.", { status: 403 });
    }

    // We assume req.body is already in the format we expect, i.e., JSON
    const { question, chat_history } = await req.json();

    // Ensure we have the required fields
    if (!question || !Array.isArray(chat_history)) {
      throw new Error('Question and chat history are required.');
    }

    const headers = {
      Authorization: `Bearer ${API_AUTH_KEY}`,
      'Content-Type': 'application/json',
    };

    // Send the payload to the external API endpoint
    const apiResponse = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ question, chat_history }),
    });

    if (!apiResponse.ok) {
      const errorDetails = await apiResponse.text();
      throw new Error(`API response was not ok: ${errorDetails}`);
    }

    // Update the API limit after the successful operation
    if (!isPro) {
      await increaseApiLimit(); // Pass any necessary arguments

    }

    // Stream the response back
    const stream = streamFromAPIResponse(apiResponse);

    // Return the streaming response
    return new NextResponse(stream, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}



// import { NextApiRequest, NextApiResponse } from "next";
// import { auth } from "@clerk/nextjs";
// import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit"; //

// const API_AUTH_KEY = process.env.API_AUTH_KEY;
// const API_ENDPOINT = "http://3.144.126.59:8020/compiling_chain_stream";

// // export const config = {
// //   runtime: "edge",
// // };
// // Helper function to convert the SSE stream to a ReadableStream that can be returned from the API route
// function sseToStream(sse: Response) {
//   const { readable, writable } = new TransformStream();
//   const writer = writable.getWriter();

//   const decoder = new TextDecoder();
//   const reader = sse.body?.getReader();

//   function push() {
//     reader?.read().then(({ done, value }) => {
//       if (done) {
//         writer.close();
//         return;
//       }
//       const str = decoder.decode(value, { stream: true });
//       const data = str.replace(/^data: /gm, "");
//       writer.write(data);
//       push();
//     });
//   }

//   push();
//   return readable;
// }

// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
//   }

//   try {
//     // Authenticate the user
//     const { userId } = auth();
//     if (!userId) {
//       return res.status(401).json({ error: "Unauthorized" });
//     }

//     // Check if the API limit has been reached
//     const freeTrial = await checkApiLimit(); // Make sure to pass any necessary arguments
//     if (!freeTrial) {
//       return res.status(403).json({ error: "Free trial has expired." });
//     }

//     const body = await new Response(req.body).json();
//     console.log(body);

//     const { question, chat_history } = body;

//     // Ensure we have the required fields
//     if (!question || !Array.isArray(chat_history)) {
//       throw new Error("Question and chat history are required.");
//     }

//     const headers = {
//       Authorization: `Bearer ${API_AUTH_KEY}`,
//       "Content-Type": "application/json",
//     };

//     const payload = { question, chat_history };
//     console.log("Sending payload:", payload);

//     const apiResponse = await fetch(API_ENDPOINT, {
//       method: "POST",
//       headers: headers,
//       body: JSON.stringify({ question, chat_history }),
//     });

//     if (!apiResponse.ok) {
//       // Get the error details from the FastAPI response
//       const errorDetails = await apiResponse.text();
//       console.error("API response was not ok:", errorDetails);
//       throw new Error(`API response was not ok: ${errorDetails}`);
//     }

//     // Update the API limit after the successful operation
//     await increaseApiLimit(); // Make sure to pass any necessary arguments

//     // Convert the SSE response to a ReadableStream
//     const stream = sseToStream(apiResponse);

//     // The response from the Edge API route must be a Response object
//     return new Response(stream, {
//       headers: { "Content-Type": "text/plain; charset=utf-8" },
//     });
//   } catch (error) {
//     console.error("Error during streaming:", error);
//     // Return a Response object with a 500 status code and error message
//     return new Response(JSON.stringify({ error: "Internal Server Error" }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }


