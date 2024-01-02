import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

const LandingContent = () => {
  const testimonials = [
    {
      name: "Advanced Clinical Problem-Solving Tools",
      
      title: "",
      description: "BooksClinical redefines clinical problem-solving with its large-language model-based framework tailored specifically to the needs of healthcare professionals."
    },
    {
      name: "Human-Like Cognitive Emulation",
     
      title: "",
      description: "By mimicking expert reasoning, BooksClinical offers GRADE-backed responses, setting new standards for evidence-based health care."
    },{
      name: "Superior Performance",
     
      title: "",
      description: "In diverse medical settings, BooksClinical is more accurate than conventional models such as Med-PaLM 2 and ChatGPT."
    },
    {
      name: "Strength of Evidence",
     
      title: "",
      description: "Evaluate the strength of evidence with our GRADE framework based insights."
    },
    
  ]
  return (
    <div className='px-10 pb-20'>
       <h2 className='text-center text-4xl text-white font-extrabold mb-10'>
        Key Features
       </h2>
       <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {testimonials.map((item)=>(
          <Card key={item.description} className='bg-[#192339] border-none text-white'>
            <CardHeader>
              <CardTitle className='flex items-center gap-x-2'>
                <div>
                  <p className='text-lg'>{item.name}</p>
                  <p className='text-zinc-400 text-sm '>{item.title}</p>
                 

                </div>

              </CardTitle>
              <CardContent className='pt-4 px-0 '>
                {item.description}

              </CardContent>
            </CardHeader>

          </Card>
        ))}

       </div>
    </div>
  )
}

export default LandingContent