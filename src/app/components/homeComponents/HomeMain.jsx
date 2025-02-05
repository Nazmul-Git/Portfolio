import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import Experience from './Experience';
import Nav from '../common/Nav';
import Innovation from './Innovation';
import SkillAndTools from './SkillAndTools';

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
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Scroll Progress Bar */}
            <div
                className="fixed top-0 left-0 z-50 w-full h-1 bg-gradient-to-r from-indigo-500 via-teal-400 to-blue-500"
                style={{ width: `${scrollProgress}%` }}
            ></div>

            <div className="relative min-h-screen">
                {/* Background Video */}
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
                <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

                <Nav />

                {/* Banner Section */}
                <div className="relative z-20 flex items-center justify-center min-h-screen px-6 py-10">
                    <Banner />
                </div>
            </div>
            <div className="relative min-h-screen">
                {/* Experience Section */}
                <Experience />
            </div>
            <Innovation />
            <SkillAndTools/>
        </>
    );
}
