'use client'
import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import Experience from './Experience';
import Nav from '../common/Nav';
import Innovation from './Innovation';
import SkillAndTools from './SkillAndTools';
import ProfessionalExperience from './ProfessionalExperience';

export default function HomeMain() {
    const [scrollProgress, setScrollProgress] = useState(0);

    // Update scroll progress as the user scrolls
    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        setScrollProgress(scrollPercent);
    };

    // Attach scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Disable horizontal overflow
        document.body.style.overflowX = 'hidden';

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.style.overflowX = 'unset'; 
        };
    }, []);

    return (
        <div className="overflow-x-hidden bg-black"> 
            {/* Scroll Progress Bar */}
            <div
                className="fixed top-0 left-0 z-50 w-full sm:h-1 md:h-2 lg:h-2 bg-gradient-to-r from-indigo-500 via-teal-400 to-red-500"
                style={{ width: `${scrollProgress}%` }}
            ></div>

            {/* Background Video */}
            <div className="relative min-h-screen">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-0"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/videos/technologyBG.mp4" type="video/mp4" />
                </video>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>

                {/* Navigation */}
                <Nav />

                {/* Banner Section */}
                <div className="relative z-20 flex items-center justify-center min-h-screen px-6 sm:px-4 md:px-8 lg:px-16">
                    <Banner />
                </div>
            </div>

            {/* Experience Section */}
            <div className="relative w-full min-h-screen px-0 sm:px-0 md:px-0 lg:px-0">
                <Experience />
            </div>
            {/* Professional Experience Section */}
            <div className="relative sm:px-4 md:px-8 lg:px-16">
                <ProfessionalExperience />
            </div>

            {/* Innovation Section */}
            <div className="relative py-10 px-2 sm:px-4 md:px-8 lg:px-16">
                <Innovation />
            </div>

            {/* Skill and Tools Section */}
            <div className="relative py-10 px-6 sm:px-4 md:px-8 lg:px-16">
                <SkillAndTools />
            </div>
        </div>
    );
}
