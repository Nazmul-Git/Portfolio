"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
    // Generate unique keys for localStorage
    const favoriteKey = `project-${project._id}-favorite`;
    const ratingKey = `project-${project._id}-rating`;
    
    // Initialize state
    const [isFavorite, setIsFavorite] = useState(false);
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    // Load saved states from localStorage when component mounts
    useEffect(() => {
        const savedFavorite = localStorage.getItem(favoriteKey);
        const savedRating = localStorage.getItem(ratingKey);

        if (savedFavorite !== null) {
            setIsFavorite(JSON.parse(savedFavorite));
        } else {
            setIsFavorite(project?.isFavorite || false);
        }

        if (savedRating !== null) {
            setRating(JSON.parse(savedRating));
        } else {
            setRating(project?.rating || 0);
        }
    }, [project?._id]);

    // Save favorite status to localStorage when it changes
    useEffect(() => {
        localStorage.setItem(favoriteKey, JSON.stringify(isFavorite));
    }, [isFavorite, favoriteKey]);

    // Save rating to localStorage when it changes
    useEffect(() => {
        localStorage.setItem(ratingKey, JSON.stringify(rating));
    }, [rating, ratingKey]);

    const handleRating = (newRating) => {
        setRating(newRating);
        // Here you would typically call an API to save the rating
        console.log(`Rating set to ${newRating} for project ${project._id}`);
    };

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
        // Here you would typically call an API to save the favorite status
        console.log(`Favorite status set to ${!isFavorite} for project ${project._id}`);
    };

    return (
        <motion.div
            className="bg-slate-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out flex flex-col relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ height: '450px' }}
        >
            {/* Favorite Star */}
            <button
                onClick={toggleFavorite}
                className="absolute top-4 right-4 z-10 text-2xl focus:outline-none"
                aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {isFavorite ? (
                        <FaStar className="text-yellow-400" />
                    ) : (
                        <FaRegStar className="text-gray-400 hover:text-yellow-400" />
                    )}
                </motion.div>
            </button>

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
                    {isFavorite && (
                        <div className="absolute inset-0 bg-yellow-500/10 backdrop-blur-[1px]"></div>
                    )}
                </div>
            )}

            {/* Project Content */}
            <div className="flex-grow flex flex-col">
                <div className="flex justify-between items-start">
                    <h2 className="text-2xl font-semibold text-gray-200 line-clamp-2">
                        {project?.title || 'Untitled Project'}
                    </h2>
                </div>
                
                {/* Scrollable Description */}
                <div className="mt-2 flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800 hover:scrollbar-thumb-slate-500">
                    <p className="text-gray-300 pr-2"> 
                        {project?.description || 'No description available'}
                    </p>
                </div>
                
                {/* Enhanced Rating System */}
                <div className="mt-3">
                    <span className="font-semibold text-indigo-500">My Rating:</span>
                    <div className="flex gap-1 mt-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                onClick={() => handleRating(star)}
                                onMouseEnter={() => setHoverRating(star)}
                                onMouseLeave={() => setHoverRating(0)}
                                className="focus:outline-none"
                                aria-label={`Rate ${star} star`}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {star <= (hoverRating || rating) ? (
                                        <FaStar className="text-yellow-400" />
                                    ) : (
                                        <FaRegStar className="text-gray-400 hover:text-yellow-400" />
                                    )}
                                </motion.div>
                            </button>
                        ))}
                    </div>
                    {rating > 0 && (
                        <motion.p 
                            className="text-xs text-gray-400 mt-1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            {rating === 5 ? "⭐ Excellent!" : 
                             rating === 4 ? "👍 Good" : 
                             rating === 3 ? "😐 Average" : 
                             rating === 2 ? "👎 Below average" : 
                             "❌ Poor"}
                        </motion.p>
                    )}
                </div>

                {/* Tech Stack */}
                <div className="mt-3">
                    <span className="font-semibold text-indigo-500">Tech Stack:</span>
                    <div className="flex flex-wrap gap-2 mt-2 max-h-20 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800 hover:scrollbar-thumb-slate-500">
                        {project?.techStack?.length > 0 ? (
                            project.techStack.map((tech, idx) => (
                                <motion.span
                                    key={idx}
                                    className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gray-600 transition duration-300"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {tech}
                                </motion.span>
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

            {/* Favorite Badge */}
            {isFavorite && (
                <motion.div 
                    className="absolute top-0 left-0 bg-yellow-500 text-black px-3 py-1 rounded-br-2xl rounded-tl-2xl text-xs font-bold flex items-center"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <FaStar className="mr-1" />
                    Best Project
                </motion.div>
            )}
        </motion.div>
    );
};

export default ProjectCard;