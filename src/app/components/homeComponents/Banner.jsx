'use client';
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

const Banner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const downloadButtonRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (downloadButtonRef.current) {
                const scrollPosition = window.scrollY + window.innerHeight;
                const buttonPosition = downloadButtonRef.current.offsetTop;

                if (scrollPosition > buttonPosition) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const buttonStyle = {
        padding: "px-6 py-3",
        fontSize: "text-lg",
        background: "linear-gradient(to right, #0000FF 50%, #951400 50%)",
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
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <motion.img
                        src="/images/Nazmul-hasan.png"
                        alt="nazmul"
                        className="w-64 h-96 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-96 xl:h-96 shadow-2xl transform transition-all duration-500"
                        whileHover={{ scale: 1.09 }} 
                    />
                </motion.div>

                {/* Profile Text */}
                <div className="text-center lg:text-left space-y-4">
                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        whileHover={buttonHoverEffect}
                    >
                        Hi, I’m <span className="text-blue-300">Nazmul Hasan</span>
                    </motion.h1>

                    <motion.p
                        className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        whileHover={{ scale: 1.05, color: "#FFD700", transition: { duration: 0.2, ease: "easeOut" } }}
                    >
                        A passionate software engineer specializing in building modern, full-stack applications
                        with clean, efficient, and scalable solutions.
                    </motion.p>

                    <div className="flex flex-col sm:flex-row gap-4">
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

            <div className="flex flex-col justify-center items-center text-center mt-6 lg:mt-0">
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-9xl font-bold text-white leading-tight font-serif flex"
                    initial="hidden"
                    animate="visible"
                >
                    {"Full-Stack".split("").map((letter, index) => (
                        <motion.span
                            key={index}
                            custom={index}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                rotate: [0, 5, -5, 0],
                                transition: {
                                    duration: 1.5,
                                    delay: index * 0.1,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    ease: "easeInOut"
                                }
                            }}
                            whileHover={{ rotateY: 180 }}
                            className="inline-block"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </motion.h1>

                <motion.h1
                    className="text-4xl sm:text-5xl md:text-9xl font-bold text-white leading-tight font-serif flex mt-2"
                    initial="hidden"
                    animate="visible"
                >
                    {"Developer".split("").map((letter, index) => (
                        <motion.span
                            key={index}
                            custom={index}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                rotate: [0, -5, 5, 0],
                                transition: {
                                    duration: 1.5,
                                    delay: index * 0.1,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    ease: "easeInOut"
                                }
                            }}
                            whileHover={{ rotateY: -180 }}
                            className="inline-block"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </motion.h1>
            </div>
        </div>
    );
};

export default Banner;
