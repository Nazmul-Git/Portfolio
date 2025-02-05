'use client';
import { motion } from "framer-motion";
import SkillsSection from "../components/workComponent/SkillsSection";
import ProjectSection from "../components/workComponent/ProjectSection";

export default function Projects() {
    return (
        <div className="w-full min-h-screen py-20">
            {/* Section Title */}
            <motion.div
                className="text-center mb-16 px-6 sm:px-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.h1
                    className="text-4xl sm:text-5xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-400"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    My Projects
                </motion.h1>
                <motion.p
                    className="text-lg sm:text-xl mt-4 text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    Explore the projects I’ve worked on, ranging from personal apps to full-scale platforms.
                </motion.p>
            </motion.div>

            {/* Projects */}
            <ProjectSection/>
            
            {/* Skills Section */}
            <SkillsSection/>
        </div>
    );
}
