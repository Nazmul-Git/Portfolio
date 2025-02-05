import { motion } from "framer-motion";
import Pagination from "../../common/Pagination";

const MernCard = ({ mernSkill, totalPages, currentPage, onPageChange }) => {
    return (
        <motion.div
            className="hover:scale-105 transform transition-all duration-300 ease-in-out"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex flex-col gap-8 items-center justify-center">
                {/* Image Outside the Link with Hover Effect */}
                <div className="w-60 h-60 rounded-full overflow-hidden mb-4 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <img
                        src={mernSkill?.logo}
                        alt={mernSkill?.name}
                        className="object-cover w-full h-full transform transition-transform duration-300 hover:scale-110"
                    />
                </div>

                {/* Name with Link */}
                <a
                    href={mernSkill?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-2xl font-semibold text-center ${mernSkill?.color} hover:bg-gray-300 px-2 py-1 rounded-md transition-all duration-300`}
                >
                    {mernSkill?.name}
                </a>

                {/* Pagination Below Name */}
                <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={onPageChange}
                />
            </div>
        </motion.div>
    );
};



export default MernCard;
