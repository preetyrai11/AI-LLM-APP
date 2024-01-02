"use client";

import { useAuth } from '@clerk/nextjs'
import Link from 'next/link';
import React from 'react'
import TypewriterComponent from "typewriter-effect";
import { Button } from './ui/button';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { trackWhatsappButtonClick } from "@/utils/GtmEventsManager";



const LandingHero = () => {
    const { isSignedIn } = useAuth();
  return (
    <div className='text-white font-bold py-36 text-center space-y-5 '>
        <div className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold '>
            <h1 className=''>
            Evidence-Based Medical Insights

            </h1>
            <div className='text-transparent bg-clip-text bg-gradient-to-r from-sky-900 to-sky-200 '>
                <TypewriterComponent
                options={{
                    strings: [
                        "Clinical Solutions.",
                        "Reliable.",
                        "Unmatched Performance.",
                        "GRADE-Quantified.",
                        "Superior Outcomes.",

                    ],
                    autoStart: true,
                    loop:true,
                }}
                />
            </div>

        </div>
        <div className='text-sm md:text-xl font-light text-zinc-400 '>
        The search for evidence-based answers is 15 times faster now.

        </div>
        <div>
            <Link href={isSignedIn  ?  "/dashboard": "/sign-up"}>
                <Button variant="outline" className="md:text-lg p-4 md:p-6 rounded-full font-semibold text-black">
                Access BooksClinical For Free
                </Button>
            </Link>
        </div>
        {/* <div className='text-zinc-400 text-xs md:text-sm font-normal '>
                No credit card required.
        </div> */}
        

         <div className='text-sm md:text-3xl font-light text-zinc-400 pt-20'>
       BooksClinical is now available on WhatsApp.
        </div>
        <div>
            <Link href={"https://wa.me/12523600001"}>
                <Button variant="outline" className="md:text-2xl p-4 md:p-6 border-green-400 bg-green-500 rounded-full font-semibold text-black" onClick={() => trackWhatsappButtonClick}>
                <WhatsAppIcon />
                &nbsp; BooksClinical 
                </Button>
            </Link>
        </div>
    </div>
  )
}

export default LandingHero