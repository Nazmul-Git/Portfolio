import Image from 'next/image';
import { motion } from 'framer-motion';

const MernCard = ({ mernSkill }) => {
    return (
        <motion.div
            className=" hover:scale-105 transform transition-all duration-300 ease-in-out"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <a href={mernSkill.link} target="_blank" className="flex flex-col gap-16 items-center justify-center">
                <Image
                    src={mernSkill.logo}
                    alt={mernSkill.name}
                    width={500}
                    height={500}
                    objectFit="contain"
                    className='h-60 w-60 rounded-full'
                />
                <span className={`text-lg font-semibold mb-10 ${mernSkill.color}`}>{mernSkill.name}</span>
            </a>
        </motion.div>
    );
};

export default MernCard;
