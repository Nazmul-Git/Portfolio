import { motion } from "framer-motion";
import ProjectCard from './workComponentCard/ProjectCard';

export default function ProjectSection({ projects=[], isLoading }) {
    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    // Loading skeleton
    if (isLoading) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-16">
                {[...Array(3)].map((_, index) => (
                    <div key={index} className="h-80 bg-gray-800/50 rounded-xl animate-pulse"></div>
                ))}
            </div>
        );
    }

    // Empty state
    if (!projects || projects?.length === 0) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-12 px-6 sm:px-16"
            >
                <div className="text-gray-400 text-lg">
                    No projects found. Add your first project to get started!
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 sm:px-16"
        >
            {projects?.map((project, index) => (
                <motion.div key={project._id || index} variants={item}>
                    <ProjectCard project={project} />
                </motion.div>
            ))}
        </motion.div>
    );
}