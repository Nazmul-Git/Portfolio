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
        title: "Testing & Debugging",
        description: "Ensure robust and bug-free code with unit testing, integration testing, and automated testing using tools like Jest and Cypress.",
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
        <section className="w-full min-h-screen py-20 px-4 sm:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
            {/* Header Section */}
            <motion.div
                className="text-center mb-16 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.h1
                    className="text-4xl sm:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    My Services
                </motion.h1>
                <motion.p
                    className="text-lg sm:text-xl text-gray-300 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Comprehensive solutions tailored to bring your digital vision to reality with cutting-edge technologies.
                </motion.p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-indigo-400 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ 
                            duration: 0.6, 
                            ease: "easeOut",
                            delay: index * 0.1
                        }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="text-5xl mb-6 text-indigo-400">{service.icon}</div>
                        <h3 className="text-2xl font-semibold mb-3 text-white">
                            {service.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            {service.description}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Optional CTA */}
            <motion.div
                className="text-center mt-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <button className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300">
                    Get Started
                </button>
            </motion.div>
        </section>
    );
}