"use client"
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LandingNavbar } from '@/components/landing-navbar';
import LandingHero from '@/components/landing-hero';
import LandingContent from '@/components/landing-content';
// import RegistrationForm from '@/components/registration-form';
import { LandingFooter } from '@/components/landing-footer';
import React, { useEffect } from 'react';
import { addGtmScript } from '@/utils/GtmManager';

const LandingPage = () => {

    useEffect(() => {
        const gtm = async () => addGtmScript();
        gtm().then(() => {
            console.log("gtm script fired");
        });
    },[]);

    return (
        <div className='h-full'> 
        <LandingNavbar />
        <LandingHero />
        <LandingContent />
        <LandingFooter />
        </div>
    )
}


export default LandingPage; 


