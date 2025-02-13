"use client";
import { motion } from "framer-motion";

export default function Innovation() {
    const contentData = [
        {
            title: "Development",
            subtitle: "Collaborative Learning",
            description: "As a software engineer, I bring a fresh perspective and a strong desire to learn and grow alongside your team. \nEnd-to-End Development: With guidance, I am eager to assist in building MERN stack applications, contributing to both the front-end (React) and back-end (Node.js/Express) components. \nPassionate Problem Solver: I'm excited to dive into coding challenges, finding creative solutions, and refining my skills through real-world experience. \nLet's work together to build applications that are both functional and user-friendly, ensuring a great experience for end-users."
        },
        {
            title: "Mentorship",
            subtitle: "Learning from Experts",
            description: "I actively seek mentorship from senior developers to expand my technical skills, particularly in the MERN stack, and gain insights into best practices. \nKnowledge Sharing: While I am still growing in my career, I also share what I’ve learned through community interactions, documentation, and collaborating with peers, especially on MERN-related projects. \nGrowing as a Developer: With personalized guidance, I am eager to fast-track my learning, gain hands-on experience with MongoDB, Express.js, React, and Node.js, and build the practical skills needed to succeed in the software development field."
        },
        {
            title: "Consultations",
            subtitle: "Collaborative Problem Solving",
            description: "As a software engineer, I’m ready to collaborate and consult with teams to help identify problems and suggest potential solutions, especially in MERN stack applications. \nFresh Insights: I bring a beginner's mindset with the ability to approach challenges from a new angle, particularly in working with the full MERN stack. While I'm still learning, I'm dedicated to contributing positively to the project. \nLet's work together to improve your project, whether it's refining existing code or implementing new features in a MERN-based application!"
        },
        {
            title: "Next-Level Success",
            subtitle: "Growing Your Projects",
            description: "As a developer, I am focused on developing my skills and contributing to your MERN stack projects’ growth. \nPassionate about Progress: I’m committed to continuous improvement and expanding my technical expertise, particularly in MongoDB, Express, React, and Node.js, to help take your projects to the next level. \nTogether, let's create something meaningful while I continue to learn, grow, and develop alongside your team, especially in the MERN ecosystem."
        }
    ];

    return (
        <div className="w-full min-h-screen">
            {/* Heading Section */}
            <div
                className="relative text-center text-white py-28"
                style={{
                    backgroundImage: `url('https://academichelp.net/wp-content/uploads/2023/06/Coding-with-AI.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Dark overlay layer */}
                <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

                {/* Animated Text */}
                <motion.h1
                    className="text-[4rem] sm:text-[8rem] lg:text-[10rem] font-extrabold mb-2 z-10"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <span className="text-green-300 text-2xl font-serif">where</span> EXPERTISE
                </motion.h1>

                <motion.h1
                    className="text-[4rem] sm:text-[6rem] lg:text-[8rem] font-extrabold text-teal-300 opacity-100 mb-2 z-10"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    MEETS
                </motion.h1>

                <motion.h1
                    className="text-6xl sm:text-[8rem] lg:text-[10rem] font-extrabold mb-4 z-10"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    INNOVATION
                </motion.h1>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 bg-black">
                <div></div>
                <div className="py-14 pr-4">
                    {contentData.map((section, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col justify-start p-6"
                            initial={{ opacity: 0, x: "50%" }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                        >
                            <p className="text-xl sm:text-2xl font-semibold text-blue-400">{section.title}</p>
                            <p className="text-lg sm:text-xl font-medium text-gray-300 mt-2">{section.subtitle}</p>
                            <p className="text-white mt-4 text-sm sm:text-base">{section.description}</p>
                            {index !== contentData.length - 1 && (
                                <div className="border-b-2 border-gray-300 mt-6 mb-6" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
