import { motion } from "framer-motion";

const ProfessionalExperience = () => {
    const experiences = [
        {
            role: "React Developer",
            company: "RSTheme",
            period: "2023 - 2024",
            responsibilities: [
                "Developed and maintained React/Next.js applications",
                "Built responsive UIs with modern CSS and component libraries",
                "Integrated RESTful APIs with frontend applications",
                "Implemented state management solutions using Context API",
                "Participated in Agile development cycles and code reviews"
            ],
            tech: ["React", "Next.js", "JavaScript", "CSS3", "HTML5", "Git"]
        },
        {
            role: "Associate",
            company: "Quantanite",
            period: "2022 - 2023",
            responsibilities: [
                "Content moderation and quality assurance",
                "Assisted with basic frontend development tasks",
                "Collaborated with cross-functional teams",
                "Documented technical processes and workflows"
            ],
            tech: ["Team Collaboration"]
        }
    ];

    return (
        <div className="pb-12">
            <div className="mb-16 px-2">
                <motion.h4
                    className="text-4xl sm:text-5xl font-extrabold mb-6 text-white text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                >
                    Professional Work Experience
                </motion.h4>

                <motion.p
                    className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8
                    }}
                >
                    With {new Date().getFullYear() - 2022}+ years in the tech industry.
                </motion.p>
            </div>

            <div className="space-y-12 sm:space-y-16 px-1 m:px-6">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="relative pl-6 sm:pl-8 border-l-2 border-blue-500"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Timeline dot */}
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>

                        {/* Experience header */}
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-8 sm:items-baseline mb-4">
                            <h3 className="text-xl sm:text-2xl font-bold text-white">{exp.role}</h3>
                            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                                <p className="text-blue-400 font-medium">{exp.company}</p>
                                <p className="text-gray-400 text-sm sm:text-base">{exp.period}</p>
                            </div>
                        </div>

                        {/* Responsibilities list */}
                        <ul className="mt-3 space-y-3 pl-1 mb-6"> 
                            {exp.responsibilities.map((item, i) => (
                                <motion.li
                                    key={i}
                                    className="flex items-start text-gray-300"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}
                                >
                                    <span className="mr-2 text-blue-400">•</span>
                                    <span>{item}</span>
                                </motion.li>
                            ))}
                        </ul>

                        {/* Tech tags */}
                        <div className="mt-4 flex flex-wrap gap-2">
                            {exp.tech.map((tech, i) => (
                                <motion.span
                                    key={i}
                                    className="px-2.5 py-1 text-xs sm:text-sm rounded-full bg-gray-800 text-blue-300"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: 0.6 + (i * 0.05) }}
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ProfessionalExperience;