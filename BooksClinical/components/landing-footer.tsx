"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import React, { useState } from 'react';
import PrivacyPolicyModal from "./policy";

// Define Montserrat font configuration
const font = Montserrat({
    weight: "600",
    subsets: ["latin"]
});

export const LandingFooter = () => {
    const currentYear = new Date().getFullYear();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <footer className="bg-transparent text-white p-4">
            <div className="flex flex-col sm:flex-row justify-between items-center">
                {/* <Link href="/" className="flex items-center mb-4 sm:mb-0">
                    <h1 className={cn("text-xl sm:text-2xl font-bold text-white ", font.className)}>
                        BooksClinical
                    </h1>
                </Link> */}
                    <a href="mailto:support@BooksClinical.com" className="hover:underline">support@booksclinical.com</a>

                <div className="text-sm mb-4 sm:mb-0 justify-between items-center">
                    <p>© {currentYear} BooksClinical is a product of NeuroReef Labs.</p>
                    <p>All rights reserved.</p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                    <a href="#!" onClick={openModal} className="hover:underline">Privacy Policy</a>
                    <PrivacyPolicyModal isOpen={isModalOpen} closeModal={closeModal} />
                </div>
            </div>
        </footer>
    );
};