"use client";
import * as z from "zod";
import axios from "axios";
import React, { useState } from 'react';
import { toast } from "react-hot-toast";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import ReactMarkdown from 'react-markdown';

import { Loader } from '@/components/loader';
import Empty from '@/components/empty';
import { ArrowRight } from 'lucide-react';
import { useProModal } from "@/hooks/use-pro-modal";
import { useRouter } from "next/navigation";

// Define your form schema using zod
const formSchema = z.object({
  question: z.string().nonempty({ message: 'Question is required.' }),

});

// Infer the form data type from the zod schema
type FormData = z.infer<typeof formSchema>;

const ResearchPage = () => {
  const router = useRouter();
  const proModal = useProModal();
  const [streamedResponse, setStreamedResponse] = useState('');
  const [isResearching, setIsResearching] = useState(false);

  // Updated useForm hook with the correct type
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // Destructure question from data
    const { question } = data;

    setIsResearching(true);
    setStreamedResponse('');

  //   
  try {
    const response = await axios.post('/api/conversation', {
      question: data.question,
      chat_history: [] // Assuming the API expects chat_history even if it's empty
    });

    // Assuming response.data contains the streamed response you need
    setStreamedResponse(response.data);
  
  } catch (error) {
    console.error('Error during streaming:', error);
  } finally {
    setIsResearching(false);
    router.refresh();
    reset();
  }
};

  return (
    <div className='flex flex-col h-screen justify-between'>
      {/* Heading */}
      {/* <div className='bg-gradient-to-r from-gray-900 to-gray-700 text-white p-4 shadow-md'>
        <h1 className='text-3xl font-bold'>Research Assistant</h1>
        <p className='text-lg'>
          It is best to provide as many details as possible when asking your question.
        </p>
      </div> */}


      <div className='text-blue-600 bg-blue-100 p-2 text-sm '>
        Disclaimer: Medical advice should always be sought from qualified healthcare providers.
      </div>


      <div className='px-4 lg:px-8 flex-1 overflow-auto'>

        {isResearching && <Loader />}
        {!streamedResponse && !isResearching && <Empty label='A query that is specific and detailed will produce the best results. Occasionally, a response may take a while to arrive. If this happens, please try again.
' />}


        {/* Streamed Response */}
        {streamedResponse && (
          <ReactMarkdown className="break-words overflow-auto bg-grey-100 p-4 rounded space-y-4 mt-4">
            {streamedResponse}
          </ReactMarkdown>
        )}
      </div>

      <div className='px-4 py-10 mb-12 '>
        <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-12 gap-2'>
          <textarea
            {...register("question", { required: true })}
            placeholder="Enter your question"
            disabled={isResearching}
            className={`col-span-12 lg:col-span-10 p-2 border-blue-900 border-2  ${errors.question ? "border-red-500" : ""}`}
          />
          <button
            type="submit"
            disabled={isResearching || isSubmitting}
            className="col-span-12 lg:col-span-2 bg-blue-900 text-white rounded p-2 "
          >
            {isResearching ? "Searching..." : "Search"}
          </button>
        </form>
      </div>
    </div>

  );
};

export default ResearchPage;

