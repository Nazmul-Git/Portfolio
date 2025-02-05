"use client";
import React from "react";
import { motion } from "framer-motion"; // Importing motion

const Banner = () => {
    return (
        <div className="relative z-20 flex flex-col lg:flex-row items-start justify-start px-6 lg:py-8">
            <section className="container mx-auto sm:px-6 md:px-4 flex flex-col items-center lg:items-start">
                {/* Profile Image */}
                <motion.div
                    className="flex-shrink-0 mb-8 animate-fadeIn"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
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
                            transition: { duration: 0.2, ease: "easeOut" },
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

                    <motion.a
                        href="#projects"
                        className="inline-block px-6 py-3 sm:px-8 sm:py-4 text-lg text-white rounded-full shadow-lg transition-transform transform hover:scale-105"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        whileHover={{
                            scale: 1.1,
                            backgroundPosition: "100% 0",
                            transition: { duration: 0.6, ease: "easeOut" },
                        }}
                        style={{
                            background: "linear-gradient(to right, #FF0000 50%, #2b6cb0 50%)",
                            backgroundSize: "200% 100%",
                            backgroundPosition: "0 0",
                            transition: "background-position 0.6s ease-out",
                        }}
                    >
                        Explore My Work
                    </motion.a>
                </div>
            </section>

            {/* Full-stack Developer Description */}
            <div className="flex flex-col justify-center items-center space-y-2">
                <motion.h1
                    className="text-10xl sm:text-9xl md:text-9xl font-bold text-white leading-tight font-serif"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    whileHover={{
                        scale: 1.1,
                        color: "#FFFFFF",
                        transition: { duration: 0.2, ease: "easeOut" },
                    }}
                >
                    <span className="text-white text-xl font-mono"></span> Full-Stack Developer
                </motion.h1>
            </div>
        </div>
    );
};

export default Banner;
