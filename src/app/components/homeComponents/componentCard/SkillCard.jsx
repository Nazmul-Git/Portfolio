import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const SkillCard = ({ skill }) => {
    const normalizeImagePath = (path) => {
        if (!path) return '/fallback-image.png';
        const normalizedPath = path.replace(/\\/g, '/');
        if (normalizedPath.startsWith('http') || normalizedPath.startsWith('/')) {
            return normalizedPath;
        }
        return `${process.env.NEXT_PUBLIC_BASE_URL || ''}/${normalizedPath}`;
    };

    const imageUrl = normalizeImagePath(skill.logo);

    return (
        <motion.div
            className="group relative p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            style={{ height: '100%' }} 
        >
            <a
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-between h-full gap-4"
                aria-label={`Learn more about ${skill.name}`}
            >
                {/* Logo Container with fixed dimensions */}
                <div className="relative w-20 h-20 p-3 bg-white rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 relative"> {/* Fixed image container */}
                        <Image
                            src={imageUrl}
                            alt={skill.name}
                            fill
                            style={{ objectFit: 'contain' }}
                            onError={(e) => {
                                e.target.src = '/fallback-image.png';
                            }}
                        />
                    </div>
                </div>

                {/* Text content with fixed height */}
                <div className="text-center min-h-[72px] w-full flex flex-col justify-between">
                    <h3 className={`text-lg font-semibold ${skill.color || 'text-white'} mb-1 line-clamp-2`}>
                        {skill.name}
                    </h3>
                    {skill.category && (
                        <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded-full inline-block mt-auto">
                            {skill.category}
                        </span>
                    )}
                </div>

                <FiExternalLink className="absolute top-3 right-3 text-gray-400 group-hover:text-white transition-colors" size={16} />
            </a>
        </motion.div>
    );
};

export default SkillCard;