'use client';
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi"; // Using react-icons for the download icon

const Banner = () => {
    // State to control the visibility of the Download Resume button
    const [isVisible, setIsVisible] = useState(false);

    // Create a reference for the download button
    const downloadButtonRef = useRef(null);

    // Function to handle the scroll detection
    const handleScroll = () => {
        if (downloadButtonRef.current) {
            const scrollPosition = window.scrollY + window.innerHeight;
            const buttonPosition = downloadButtonRef.current.offsetTop;

            // Show button when it's scrolled into view
            if (scrollPosition > buttonPosition) {
                setIsVisible(true);
            }
        }
    };

    // Set up event listener on scroll
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const buttonStyle = {
        padding: "px-6 py-3", 
        fontSize: "text-lg", 
        background: "linear-gradient(to right, #1E90FF 50%, #0000FF 50%)", 
        backgroundSize: "200% 100%",
        backgroundPosition: "0 0",
        transition: "background-position 0.6s ease-out",
    };

    const buttonHoverEffect = {
        scale: 1.1,
        backgroundPosition: "100% 0",
        transition: { duration: 0.6, ease: "easeInOut" }, 
    };

    const commonTransition = {
        duration: 0.8,
        delay: 0.8,
    };

    return (
        <div className="relative z-20 flex flex-col lg:flex-row items-start justify-start px-6 lg:py-2">
            <section className="container mx-auto sm:px-6 md:px-4 flex flex-col items-center lg:items-start">
                {/* Profile Image */}
                <motion.div
                    className="flex-shrink-0 mb-8 animate-fadeIn"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <img
                        src="/images/Nazmul.png"
                        alt="nazmul"
                        className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white"
                    />
                </motion.div>

                {/* Profile Text */}
                <div className="text-center lg:text-left space-y-4">
                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        whileHover={{
                            scale: 1.1,
                            color: "#1E90FF",
                            transition: { duration: 0.2, ease: "easeIn" },
                        }}
                    >
                        Hi, I’m <span className="text-blue-300">Nazmul Hasan</span>
                    </motion.h1>

                    <motion.p
                        className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        whileHover={{
                            scale: 1.05,
                            color: "#FFD700",
                            transition: { duration: 0.2, ease: "easeOut" },
                        }}
                    >
                        A passionate software engineer specializing in building modern, full-stack applications
                        with clean, efficient, and scalable solutions.
                    </motion.p>

                    <div className="flex flex-col sm:flex-row gap-4"> {/* Stack buttons on small screens */}
                        {/* Explore My Work Button */}
                        <motion.a
                            href="/works"
                            className="inline-block px-6 py-3 text-lg text-white rounded-full shadow-lg transition-transform transform hover:scale-105"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={commonTransition}
                            whileHover={buttonHoverEffect}
                            style={buttonStyle}
                        >
                            Explore My Work
                        </motion.a>

                        {/* Download Resume Button */}
                        <motion.a
                            id="downloadButton"
                            href="/resume.pdf"
                            download
                            className="inline-flex justify-center items-center space-x-2 px-6 py-3 text-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-full shadow-2xl transform hover:scale-110 hover:shadow-2xl transition-all duration-500"
                            initial={{ x: "100vw", opacity: 0 }}
                            animate={{ x: isVisible ? 0 : "100vw", opacity: isVisible ? 1 : 0 }}
                            transition={{ duration: 0.8, ease: "easeIn" }}
                            style={buttonStyle}
                            whileHover={buttonHoverEffect}
                            ref={downloadButtonRef} 
                        >
                            {/* Animated Download Icon */}
                            <motion.div
                                animate={{
                                    rotate: [0, 25, 0], 
                                }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 1,
                                    ease: "easeInOut",
                                }}
                            >
                                <FiDownload className="w-5 h-5" />
                            </motion.div>
                            <span className="text-base font-medium">Download Resume</span>
                        </motion.a>
                    </div>
                </div>
            </section>

            {/* Full-stack Developer Description */}
            <div className="flex flex-col justify-center items-center space-y-2 text-center">
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-9xl font-bold text-white leading-tight font-serif"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    whileHover={{
                        scale: 1.1,
                        color: "#FFFFFF",
                        transition: { duration: 0.2, ease: "easeOut" },
                    }}
                >
                    Full-Stack Developer
                </motion.h1>
            </div>
        </div>
    );
};

export default Banner;
