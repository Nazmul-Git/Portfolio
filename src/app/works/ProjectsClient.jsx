'use client';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SkillsSection from "../components/workComponent/SkillsSection";
import ProjectSection from "../components/workComponent/ProjectSection";
import { PlusCircle, X } from "lucide-react";
import { toast } from "react-hot-toast";

export default function ProjectsClient({ initialProjects = [] }) {
    const [showForm, setShowForm] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [projects, setProjects] = useState(initialProjects);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        techStack: "",
        repoLink: "",
        liveDemo: "",
        imageUrl: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Validate required fields
        if (!formData.title || !formData.description || !formData.techStack || !formData.repoLink) {
            toast.error('Please fill all required fields');
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch('/api/works', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    techStack: formData.techStack.split(',').map(tech => tech.trim()),
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to submit project');
            }

            const result = await response.json();
            toast.success('Project added successfully!');
            setProjects(prev => [result, ...prev]);
            
            setFormData({
                title: "",
                description: "",
                techStack: "",
                repoLink: "",
                liveDemo: "",
                imageUrl: ""
            });
            setShowForm(false);

        } catch (error) {
            console.error('Error submitting project:', error);
            toast.error(error.message || 'Error submitting project. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div 
            className="w-full bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen py-20 relative overflow-hidden "
        >
            {/* Background elements */}
            <motion.div
                className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-teal-400/10 blur-3xl -z-10"
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 20, 0]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-1/3 right-20 w-40 h-40 rounded-full bg-indigo-500/10 blur-3xl -z-10"
                animate={{
                    scale: [1, 1.3, 1],
                    y: [0, 30, 0]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />

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
                    Explore the projects I've worked on, ranging from personal apps to full-scale platforms.
                </motion.p>

                {/* Add Project Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="mt-12"
                >
                    <motion.button
                        onClick={() => setShowForm(true)}
                        className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white transition-all duration-300 rounded-xl group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            background: 'linear-gradient(to right, #6366f1, #06b6d4)',
                            boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)'
                        }}
                    >
                        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-pink-500 rounded group-hover:-mt-4 group-hover:-mr-4">
                            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 bg-gradient-to-r from-indigo-600 to-teal-600 rounded-xl group-hover:mb-12 group-hover:ml-12"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white flex items-center gap-2 justify-center">
                            Add Project <PlusCircle className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Modal Overlay and Form */}
            <AnimatePresence>
                {showForm && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
                            onClick={() => !isSubmitting && setShowForm(false)}
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="fixed inset-0 flex items-center justify-center p-4 z-50"
                        >
                            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                                <motion.div
                                    className="bg-gray-800 rounded-xl border border-gray-700 shadow-2xl overflow-hidden"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <div className="p-6">
                                        <div className="flex justify-between items-center mb-6">
                                            <h3 className="text-2xl font-bold text-white">Add New Project</h3>
                                            <button
                                                onClick={() => !isSubmitting && setShowForm(false)}
                                                disabled={isSubmitting}
                                                className="text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-gray-700 disabled:opacity-50"
                                            >
                                                <X className="w-6 h-6" />
                                            </button>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-5">
                                            <div>
                                                <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
                                                    Project Title *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="title"
                                                    name="title"
                                                    value={formData.title}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                                    placeholder="My Awesome Project"
                                                    required
                                                    disabled={isSubmitting}
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
                                                    Description *
                                                </label>
                                                <textarea
                                                    id="description"
                                                    name="description"
                                                    value={formData.description}
                                                    onChange={handleChange}
                                                    rows={4}
                                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                                    placeholder="Describe your project in detail..."
                                                    required
                                                    disabled={isSubmitting}
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="techStack" className="block text-sm font-medium text-gray-300 mb-2">
                                                    Technologies Used (comma separated) *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="techStack"
                                                    name="techStack"
                                                    value={formData.techStack}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                                    placeholder="React, Next.js, MongoDB, Tailwind CSS"
                                                    required
                                                    disabled={isSubmitting}
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="repoLink" className="block text-sm font-medium text-gray-300 mb-2">
                                                    Repository Link *
                                                </label>
                                                <input
                                                    type="url"
                                                    id="repoLink"
                                                    name="repoLink"
                                                    value={formData.repoLink}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                                    placeholder="https://github.com/username/project"
                                                    required
                                                    disabled={isSubmitting}
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="liveDemo" className="block text-sm font-medium text-gray-300 mb-2">
                                                    Live Demo Link (optional)
                                                </label>
                                                <input
                                                    type="url"
                                                    id="liveDemo"
                                                    name="liveDemo"
                                                    value={formData.liveDemo}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                                    placeholder="https://project-demo.vercel.app"
                                                    disabled={isSubmitting}
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-300 mb-2">
                                                    Project Image URL (optional)
                                                </label>
                                                <input
                                                    type="url"
                                                    id="imageUrl"
                                                    name="imageUrl"
                                                    value={formData.imageUrl}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                                    placeholder="https://example.com/project-image.jpg"
                                                    disabled={isSubmitting}
                                                />
                                                {formData.imageUrl && (
                                                    <div className="mt-2">
                                                        <p className="text-xs text-gray-400">Image Preview:</p>
                                                        <img 
                                                            src={formData.imageUrl} 
                                                            alt="Preview" 
                                                            className="mt-1 rounded-lg max-h-40 object-cover border border-gray-600"
                                                            onError={(e) => {
                                                                e.target.src = 'https://via.placeholder.com/400x225?text=Image+Not+Found';
                                                            }}
                                                        />
                                                    </div>
                                                )}
                                            </div>

                                            <div className="pt-3">
                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className={`w-full py-3 px-6 bg-gradient-to-r from-indigo-600 to-teal-600 hover:from-indigo-700 hover:to-teal-700 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-indigo-500/20 ${
                                                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                                                    }`}
                                                >
                                                    {isSubmitting ? (
                                                        'Adding Project...'
                                                    ) : (
                                                        <>
                                                            Add Project <PlusCircle className="w-5 h-5" />
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Projects Section */}
            <ProjectSection projects={projects} />
            
            {/* Skills Section */}
            <SkillsSection />
        </div>
    );
}