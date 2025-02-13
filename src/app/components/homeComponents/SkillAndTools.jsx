import React from 'react'
import SkillCard from './componentCard/SkillCard';

export default function SkillAndTools() {
    const skills = [
        // Front-End Development Skills
        {
            name: 'HTML5',
            logo: 'https://wallpaperaccess.com/full/4868336.jpg',
            link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
            color: 'text-orange-600'
        },
        {
            name: 'CSS3',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg',
            link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
            color: 'text-blue-600'
        },
        {
            name: 'Bootstrap5',
            logo: 'https://www.eniun.com/wp-content/uploads/imagenes-en-bootstrap-5.png',
            link: 'https://getbootstrap.com/',
            color: 'text-info'
        },
        {
            name: 'Tailwind CSS',
            logo: 'https://d3mxt5v3yxgcsr.cloudfront.net/courses/15177/course_15177_image.jpg',
            link: 'https://tailwindcss.com/docs',
            color: 'text-cyan-400'
        },
        {
            name: 'Sass',
            logo: 'https://silvawebdesigns.com/wp-content/uploads/2020/10/useful-sass-scss-mixins-for-every-website.jpg',
            link: 'https://sass-lang.com/documentation',
            color: 'text-pink-600'
        },
        {
            name: 'JavaScript',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            color: 'text-yellow-500'
        },
        {
            name: 'ES6',
            logo: 'https://i.ytimg.com/vi/iy-fyfePVsQ/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGHIgaCggMA8=&amp;rs=AOn4CLDV1HE47vDvqOwn7Xt8NaWzpEWSeQ',
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            color: 'text-yellow-600'
        },
        {
            name: 'DOM',
            logo: 'https://miro.medium.com/v2/resize:fit:800/1*PEzOBf4AkvDoE4VME4kq4Q.jpeg',
            link: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model',
            color: 'text-blue-400'
        },
        {
            name: 'React.js',
            logo: 'https://reactjs.org/favicon.ico',
            link: 'https://reactjs.org/docs/',
            color: 'text-blue-400'
        },
        {
            name: 'React Nested Router',
            logo: 'https://i.ytimg.com/vi/7p13DSgyMXM/maxresdefault.jpg',
            link: 'https://reactrouter.com/',
            color: 'text-indigo-500'
        },
        {
            name: 'Next.js',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg',
            link: 'https://nextjs.org/docs',
            color: 'text-green-600'
        },
        {
            name: 'Next-Auth',
            logo: 'https://i.morioh.com/2024/05/12/8fb6a75b.webp',
            link: 'https://next-auth.js.org/',
            color: 'text-pink-500'
        },
        {
            name: 'Redux',
            logo: 'https://raw.githubusercontent.com/reactjs/redux/24bab8f05987542ffd186c19400a80f12f717492/logo/logo.png',
            link: 'https://redux.js.org/',
            color: 'text-purple-700'
        },
        {
            name: 'Material-UI',
            logo: 'https://mui.com/static/logo.svg',
            link: 'https://mui.com/',
            color: 'text-blue-500'
        },
        {
            name: 'Daisy-UI',
            logo: 'https://daisyui.com/favicon.ico',
            link: 'https://daisyui.com/',
            color: 'text-indigo-400'
        },

        // Back-End Development Skills
        {
            name: 'Node.js',
            logo: 'https://mobidev.biz/wp-content/uploads/2020/02/node-js-development-company.png',
            link: 'https://nodejs.org/en/docs/',
            color: 'text-green-600'
        },
        {
            name: 'Express.js',
            logo: 'https://www.dongee.com/tutoriales/content/images/2023/11/image-60.png',
            link: 'https://expressjs.com/',
            color: 'text-green-600'
        },
        {
            name: 'Firebase',
            logo: 'https://res.cloudinary.com/hevo/image/upload/f_auto,q_auto/v1618982001/hevo-learn/image00.png',
            link: 'https://firebase.google.com/docs',
            color: 'text-yellow-400'
        },
        {
            name: 'REST APIs',
            logo: 'https://miro.medium.com/v2/resize:fit:975/1*2_qoU7WhELw4sOT9PuNnLA.png',
            link: 'https://restfulapi.net/',
            color: 'text-blue-500'
        },
        {
            name: 'JWT Authentication',
            logo: 'https://jwt.io/img/pic_logo.svg',
            link: 'https://jwt.io/',
            color: 'text-red-700'
        },

        // Database Skills
        {
            name: 'MongoDB',
            logo: 'https://miro.medium.com/v2/resize:fit:1400/1*_yrJns5F3UTHqGQ1J5LFCw.png',
            link: 'https://www.mongodb.com/docs/',
            color: 'text-green-700'
        },
        {
            name: 'MySQL',
            logo: 'https://codigoiot.com/wp-content/uploads/2020/06/mysql-logo_2800x2800_pixels1-1024x1024-1.png',
            link: 'https://dev.mysql.com/doc/',
            color: 'text-orange-500'
        },

        // Data Structures & Algorithms Skills
        {
            name: 'OOP',
            logo: 'https://www.educative.io/api/page/4792707659595776/image/download/4893195767906304',
            link: 'https://en.wikipedia.org/wiki/Object-oriented_programming',
            color: 'text-purple-600'
        },
        {
            name: 'DSA',
            logo: 'https://miro.medium.com/v2/da:true/resize:fit:875/0*y8E3QmYSHVSutqaC',
            link: 'https://en.wikipedia.org/wiki/Data_structure',
            color: 'text-blue-500'
        },
        {
            name: 'Dynamic Programming',
            logo: 'https://i.ytimg.com/vi/RUkrflruSks/maxresdefault.jpg',
            link: 'https://en.wikipedia.org/wiki/Dynamic_programming',
            color: 'text-orange-600'
        },

        // Version Control & Collaboration
        {
            name: 'Git',
            logo: 'https://miro.medium.com/v2/resize:fit:3840/1*fDwzjCH3qzhosC6DVel4ng.jpeg',
            link: 'https://git-scm.com/doc',
            color: 'text-red-600'
        },
        {
            name: 'GitHub',
            logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
            link: 'https://github.com/',
            color: 'text-green-800'
        },

        // Cloud & Deployment
        {
            name: 'Netlify',
            logo: 'https://cdn.thenewstack.io/media/2018/03/a6345c70-988825c6-netlifylogo.jpg',
            link: 'https://www.netlify.com/',
            color: 'text-cyan-500'
        },
        {
            name: 'Vercel',
            logo: 'https://vercel.com/favicon.ico',
            link: 'https://vercel.com/docs',
            color: 'text-indigo-600'
        },

        // Tools & IDEs
        {
            name: 'VS Code',
            logo: 'https://code.visualstudio.com/favicon.ico',
            link: 'https://code.visualstudio.com/',
            color: 'text-blue-500'
        },
        {
            name: 'Postman',
            logo: 'https://mms.businesswire.com/media/20220915005213/en/761650/23/postman-logo-vert-2018.jpg',
            link: 'https://www.postman.com/',
            color: 'text-blue-600'
        },
        {
            name: 'Figma',
            logo: 'https://d1lss44hh2trtw.cloudfront.net/assets/article/2022/09/15/figma-acquired-by-adobe-adbe_feature.jpg',
            link: 'https://www.figma.com/resources/learn/',
            color: 'text-orange-600'
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
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                {
                    skills.map((skill, index) => (
                        <SkillCard key={index} skill={skill} />
                    ))
                }
            </div>
        </div>
    )
}
