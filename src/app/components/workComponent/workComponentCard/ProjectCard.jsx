// components/ProjectCard.js
import Link from 'next/link';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            className="bg-slate-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out transform"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-2xl font-semibold text-gray-200">
                {project.title}
            </h2>
            <p className="mt-2 text-gray-300">{project.description}</p>
            <div className="mt-4">
                <span className="font-semibold text-indigo-500">Tech Stack:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                    {project.techStack.map((tech, idx) => (
                        <span
                            key={idx}
                            className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gray-600 transition duration-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            <div className="mt-6 flex justify-between items-center">
                {/* Repo Link */}
                <Link
                    href={project.repoLink}
                    target="_blank"
                    className="flex items-center text-indigo-400 hover:text-indigo-500 transition duration-300"
                >
                    <span className="underline">View Repo</span>
                    <span className="ml-2">📂</span> 
                </Link>

                {/* Live Demo Link */}
                <Link
                    href={project.liveDemo}
                    target="_blank"
                    className="flex items-center text-teal-400 hover:text-teal-500 transition duration-300"
                >
                    <span className="underline">Live Demo</span>
                    <span className="ml-2">🚀</span> 
                </Link>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
