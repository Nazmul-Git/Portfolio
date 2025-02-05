import React from 'react'
import SkillCard from './componentCard/SkillCard';

export default function SkillAndTools() {
    const skills = [
        {
            name: 'MongoDB',
            logo: 'https://miro.medium.com/v2/resize:fit:1400/1*_yrJns5F3UTHqGQ1J5LFCw.png',
            link: 'https://www.mongodb.com/docs/',
            color: 'text-green-700'
        },
        {
            name: 'Express',
            logo: 'https://www.dongee.com/tutoriales/content/images/2023/11/image-60.png',
            link: 'https://expressjs.com/',
            color: 'text-black'
        },
        {
            name: 'React',
            logo: 'https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png',
            link: 'https://reactjs.org/docs/',
            color: 'text-blue-400'
        },
        {
            name: 'Node.js',
            logo: 'https://mobidev.biz/wp-content/uploads/2020/02/node-js-development-company.png',
            link: 'https://nodejs.org/en/docs/',
            color: 'text-green-600'
        },
        {
            name: 'Next.js',
            logo: 'https://codewithmosh.com/_next/image?url=https:%2F%2Fcdn.filestackcontent.com%2F8MbtJ4hTAaOk3KPcptqZ&w=3840&q=75',
            link: 'https://nextjs.org/docs',
            color: 'text-black'
        },
        {
            name: 'MySQL',
            logo: 'https://codigoiot.com/wp-content/uploads/2020/06/mysql-logo_2800x2800_pixels1-1024x1024-1.png',
            link: 'https://dev.mysql.com/doc/',
            color: 'text-orange-500'
        },
        {
            name: 'Tailwind CSS',
            logo: 'https://d3mxt5v3yxgcsr.cloudfront.net/courses/15177/course_15177_image.jpg',
            link: 'https://tailwindcss.com/docs',
            color: 'text-cyan-400'
        },
        {
            name: 'Firebase',
            logo: 'https://res.cloudinary.com/hevo/image/upload/f_auto,q_auto/v1618982001/hevo-learn/image00.png',
            link: 'https://firebase.google.com/docs',
            color: 'text-yellow-400'
        },
        {
            name: 'Sass',
            logo: 'https://silvawebdesigns.com/wp-content/uploads/2020/10/useful-sass-scss-mixins-for-every-website.jpg',
            link: 'https://sass-lang.com/documentation',
            color: 'text-pink-600'
        },
        {
            name: 'Figma',
            logo: 'https://d1lss44hh2trtw.cloudfront.net/assets/article/2022/09/15/figma-acquired-by-adobe-adbe_feature.jpg',
            link: 'https://www.figma.com/resources/learn/',
            color: 'text-orange-600'
        },
        {
            name: 'Git',
            logo: 'https://miro.medium.com/v2/resize:fit:3840/1*fDwzjCH3qzhosC6DVel4ng.jpeg',
            link: 'https://git-scm.com/doc',
            color: 'text-red-600'
        },
        {
            name: 'OAuth',
            logo: 'https://www.thearmchaircritic.org/wp-content/uploads/2019/10/featured.png',
            link: 'https://oauth.net/',
            color: 'text-purple-500'
        },
        {
            name: 'Redux',
            logo: 'https://raw.githubusercontent.com/reactjs/redux/24bab8f05987542ffd186c19400a80f12f717492/logo/logo.png',
            link: 'https://redux.js.org/',
            color: 'text-purple-700'
        },
    ];

    return (
        <div className="mt-10 py-8 px-20">
            {/* Title and Description Section */}
            <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-400">
                    My Skills
                </h2>
                <p className="text-lg sm:text-xl mt-4 text-gray-300">
                    Here are some of the technologies and tools that I am proficient in. I continuously strive to learn and improve my skills in the modern tech stack.
                </p>
            </div>

            {/* Skill Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                {
                    skills.map((skill, index) => (
                        <SkillCard key={index} skill={skill} />
                    ))
                }
            </div>
        </div>
    )
}
