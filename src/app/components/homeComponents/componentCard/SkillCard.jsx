import Image from 'next/image';
import { motion } from 'framer-motion';

const SkillCard = ({ skill }) => {
    return (
        <motion.div
            className="p-2 transform hover:scale-105 transition-all duration-300 ease-in-out"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <a
                href={skill.link}
                target="_blank"
                className="flex flex-col items-center justify-between h-full"
            >
                <div
                    className="mb-4 p-2 bg-white shadow-md flex justify-center items-center hover:scale-105 transition-all duration-300 ease-in-out"
                >
                    <Image
                        src={skill.logo}
                        alt={skill.name}
                        width={500}
                        height={500}
                        style={{ objectFit: 'cover' }} 
                        className="transition-transform h-16 w-28 duration-300 ease-in-out hover:scale-110"
                    />
                </div>
                <span className={`text-lg font-semibold ${skill.color} mt-2`}>{skill.name}</span>
            </a>
        </motion.div>
    );
};

export default SkillCard;
