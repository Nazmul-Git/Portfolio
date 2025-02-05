'use client';
import { motion } from "framer-motion";

const services = [
    {
        title: "Frontend Development",
        description: "Build modern, responsive, and interactive user interfaces using the latest frontend technologies like React.js, Next.js, and HTML/CSS.",
        icon: "💻",
    },
    {
        title: "Backend Development",
        description: "Develop scalable, efficient server-side applications using Node.js, Express, and databases like MongoDB, PostgreSQL, or MySQL.",
        icon: "⚙️",
    },
    {
        title: "Full Stack Development",
        description: "Seamlessly integrate both frontend and backend to create full-stack applications using technologies like MERN (MongoDB, Express, React, Node.js) or similar stacks.",
        icon: "🌐",
    },
    {
        title: "API Development & Integration",
        description: "Design and build RESTful APIs or GraphQL APIs to power modern web applications, with smooth integration for third-party services.",
        icon: "🔌",
    },
    {
        title: "Database Design & Management",
        description: "Create and manage databases to ensure data integrity, scalability, and performance with SQL or NoSQL databases.",
        icon: "📊",
    },
    {
        title: "DevOps & Cloud Services",
        description: "Implement CI/CD pipelines, manage cloud services (AWS, Heroku, DigitalOcean) to deploy, monitor, and maintain applications efficiently.",
        icon: "☁️",
    },
    {
        title: "Testing & Debugging",
        description: "Ensure robust and bug-free code with unit testing, integration testing, and automated testing using tools like Jest, Mocha, and Cypress.",
        icon: "🧪",
    },
    {
        title: "Consulting & Strategy",
        description: "Provide expert guidance on architecture, frameworks, and best practices to build scalable, secure, and maintainable web applications.",
        icon: "💼",
    },
];


export default function Services() {
    return (
        <div className="w-full min-h-screen py-20 text-white">
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
                    My Services
                </motion.h1>
                <motion.p
                    className="text-lg sm:text-xl mt-4 text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    Explore the services I offer to help you bring your digital ideas to life.
                </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-16">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="text-4xl mb-4 text-indigo-500">{service.icon}</div>
                        <h2 className="text-2xl font-semibold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-400">
                            {service.title}
                        </h2>
                        <p className="mt-2 text-gray-300">{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
