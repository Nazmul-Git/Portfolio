'use client';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Navigation, Pagination } from 'swiper';
import MernCard from './workComponentCard/MernCard';
import { useState, useEffect } from 'react';

const mernSkills = [
    {
        name: 'MongoDB',
        logo: 'https://www.knowi.com/wp-content/uploads/2020/01/Blog-1-_-Title-Image.jpg',
        link: 'https://www.mongodb.com/docs/',
        color: 'text-green-700'
    },
    {
        name: 'Express',
        logo: 'https://1.bp.blogspot.com/-ELwssuPLFbk/WJFW2YWVJnI/AAAAAAAACOU/x3kcoA4XdKknFkrqDoMX1-3EGH_Nz6SUwCLcB/s1600/Express.JPG',
        link: 'https://expressjs.com/',
        color: 'text-black'
    },
    {
        name: 'React',
        logo: 'https://justwebworld.com/wp-content/uploads/2018/10/reactjs-framework.jpg',
        link: 'https://reactjs.org/docs/',
        color: 'text-blue-400'
    },
    {
        name: 'Node.js',
        logo: 'https://wallpapercave.com/wp/wp6606918.jpg',
        link: 'https://nodejs.org/en/docs/',
        color: 'text-green-600'
    },
];

const SkillsSection = () => {
    // State to check if the component has mounted
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); 
    }, []);

    if (!isClient) {
        return null;  
    }

    return (
        <div className="w-full min-h-screen py-20 text-white">
            <motion.div
                className="text-center mt-20 px-6 sm:px-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.h2
                    className="text-3xl sm:text-4xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-400"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    My MERN Stack Skills
                </motion.h2>
                <motion.p
                    className="text-lg sm:text-xl mt-4 text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    Here are the technologies I am proficient in, working with the MERN stack.
                </motion.p>
            </motion.div>

            <div className="mt-20 px-6 sm:px-16">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1} 
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Navigation, Pagination]}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    navigation={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,  
                        },
                        768: {
                            slidesPerView: 2,  
                        },
                        1024: {
                            slidesPerView: 3,  
                        },
                    }}
                    className="mt-8"
                >
                    {mernSkills.map((mernSkill, index) => (
                        <SwiperSlide key={index}>
                            <MernCard mernSkill={mernSkill} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default SkillsSection;
