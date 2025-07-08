import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            className="bg-slate-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out flex flex-col"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ height: '400px' }}
        >
            {/* Project Image */}
            {project?.imageUrl && (
                <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                    <Image
                        src={project.imageUrl}
                        alt={project.title || "Project Image"}
                        fill
                        className="object-cover"
                        onError={(e) => {
                            e.target.src = '/placeholder-image.jpg';
                            e.target.onerror = null;
                        }}
                    />
                </div>
            )}

            {/* Project Content */}
            <div className="flex-grow flex flex-col">
                <h2 className="text-2xl font-semibold text-gray-200 line-clamp-2">
                    {project?.title || 'Untitled Project'}
                </h2>
                
                {/* Scrollable Description */}
                <div className="mt-2 flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800 hover:scrollbar-thumb-slate-500">
                    <p className="text-gray-300 pr-2"> 
                        {project?.description || 'No description available'}
                    </p>
                </div>
                
                {/* Tech Stack */}
                <div className="mt-3">
                    <span className="font-semibold text-indigo-500">Tech Stack:</span>
                    <div className="flex flex-wrap gap-2 mt-2 max-h-20 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800 hover:scrollbar-thumb-slate-500">
                        {project?.techStack?.length > 0 ? (
                            project.techStack.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gray-600 transition duration-300"
                                >
                                    {tech}
                                </span>
                            ))
                        ) : (
                            <span className="text-gray-400 text-sm">No technologies listed</span>
                        )}
                    </div>
                </div>
            </div>

            {/* Links */}
            <div className="mt-4 pt-4 border-t border-gray-700 flex justify-between items-center">
                {/* Repo Link */}
                {project?.repoLink ? (
                    <Link
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-indigo-400 hover:text-indigo-500 transition duration-300 text-sm"
                    >
                        <span className="underline">View Repo</span>
                        <span className="ml-2">📂</span>
                    </Link>
                ) : (
                    <span className="text-gray-500 text-sm">No repository</span>
                )}

                {/* Live Demo Link */}
                {project?.liveDemo ? (
                    <Link
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-teal-400 hover:text-teal-500 transition duration-300 text-sm"
                    >
                        <span className="underline">Live Demo</span>
                        <span className="ml-2">🚀</span>
                    </Link>
                ) : (
                    <span className="text-gray-500 text-sm">No demo</span>
                )}
            </div>
        </motion.div>
    );
};

export default ProjectCard;