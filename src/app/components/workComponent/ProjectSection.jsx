import React from 'react'
import ProjectCard from './workComponentCard/ProjectCard';

export default function ProjectSection() {
    const projects = [
        {
            title: "Food Delivery Services",
            description: "A comprehensive web application designed for efficient food delivery management. Built with Next.js for the frontend, Node.js and Express for backend server functionality, and MongoDB as the database. OAuth integration provides secure user authentication, while Tailwind CSS ensures a responsive and modern UI design.",
            techStack: ["Next.js", "Node.js", "MongoDB", "Express", "OAuth","Tailwind CSS"],
            repoLink: "https://github.com/Nazmul-Git/Food_Delivery_App",
            liveDemo: "https://food-delivery-app-one-black.vercel.app/"
        },
        {
            title: "Konstruk Construction Building",
            description: "A professional construction business platform that offers responsive designs and a seamless user experience. Built using React.js, Sass, and Bootstrap, the application provides an efficient and attractive UI to manage construction projects.",
            techStack: ["React.js", "Sass", "Bootstrap", "CSS"],
            repoLink: "https://github.com/Nazmul-Git/konstruck-react",
            liveDemo: "https://konstruck-react-theme-letest.vercel.app/"
        },
        {
            title: "Techzen IT Solution",
            description: "An IT solution platform offering a modern, responsive design for showcasing services and solutions. Built with React.js, Sass, and Bootstrap for a sleek, mobile-first interface, Techzen enables users to easily access IT services and solutions.",
            techStack: ["React.js", "Bootstrap", "Sass", "CSS"],
            repoLink: "https://github.com/Nazmul-Git/techzen",
            liveDemo: "https://techzen-react-application.vercel.app/"
        },
        {
            title: "Bcom Business Consultant",
            description: "A personal blog platform for business consultants to share and publish articles. Developed with React.js, Bootstrap, and Sass for styling, this platform ensures a responsive and smooth reading experience for users.",
            techStack: ["React.js", "Bootstrap", "Sass", "CSS"],
            repoLink: "https://github.com/Nazmul-Git/Bcom-react",
            liveDemo: "https://bcom-react.vercel.app/"
        }
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-16">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    )
}
