'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMail, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setIsLoading(false);
    };

    return (
        <div className='bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen py-20'> 
            <div className="max-w-6xl mx-auto px-6">
                {/* Header Section */}
                <motion.header 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        className="text-4xl sm:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-300"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Let's Connect
                    </motion.h1>
                    <motion.p
                        className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Have a project in mind or want to discuss opportunities? Drop me a message and I'll get back to you soon.
                    </motion.p>
                </motion.header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Form Section */}
                    <motion.section 
                        className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 shadow-xl"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit}>
                                <div className="mb-6">
                                    <label htmlFor="name" className="block text-lg text-white mb-3 font-medium">
                                        Your Name
                                    </label>
                                    <motion.input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full p-4 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400"
                                        placeholder="John Doe"
                                        required
                                        whileFocus={{ scale: 1.02 }}
                                    />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="email" className="block text-lg text-white mb-3 font-medium">
                                        Email Address
                                    </label>
                                    <motion.input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full p-4 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400"
                                        placeholder="john@example.com"
                                        required
                                        whileFocus={{ scale: 1.02 }}
                                    />
                                </div>

                                <div className="mb-8">
                                    <label htmlFor="message" className="block text-lg text-white mb-3 font-medium">
                                        Your Message
                                    </label>
                                    <motion.textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full p-4 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400"
                                        rows="6"
                                        placeholder="Hello, I'd like to talk about..."
                                        required
                                        whileFocus={{ scale: 1.02 }}
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 flex items-center justify-center gap-2"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <span className="flex items-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        <>
                                            <FiSend className="text-xl" />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        ) : (
                            <motion.div
                                className="text-center p-8"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="inline-block p-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-6">
                                    <FiSend className="text-4xl text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h2>
                                <p className="text-lg text-gray-300 mb-6">
                                    Thank you for reaching out. I'll get back to you within 24 hours.
                                </p>
                                <motion.button
                                    onClick={() => setIsSubmitted(false)}
                                    className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Send Another Message
                                </motion.button>
                            </motion.div>
                        )}
                    </motion.section>

                    {/* Contact Info Section */}
                    <motion.section
                        className="flex flex-col justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.div 
                            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 shadow-xl h-full"
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-8 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-teal-300">
                                Contact Information
                            </h2>
                            
                            <div className="space-y-6">
                                <motion.div 
                                    className="flex items-start gap-4 p-4 bg-gray-700/50 rounded-xl hover:bg-gray-700 transition-colors duration-300"
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="p-3 bg-indigo-500/20 rounded-lg text-indigo-400">
                                        <FiMail className="text-2xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-300 mb-1">Email</h3>
                                        <a href="mailto:nazmul.hasan16021998@gmail.com" className="text-white hover:text-indigo-400 transition-colors">
                                            nazmul.hasan16021998@gmail.com
                                        </a>
                                    </div>
                                </motion.div>

                                <motion.div 
                                    className="flex items-start gap-4 p-4 bg-gray-700/50 rounded-xl hover:bg-gray-700 transition-colors duration-300"
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="p-3 bg-teal-500/20 rounded-lg text-teal-400">
                                        <FiPhone className="text-2xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-300 mb-1">Phone</h3>
                                        <a href="tel:+8801706256105" className="text-white hover:text-teal-400 transition-colors">
                                            +880 1706-256105
                                        </a>
                                    </div>
                                </motion.div>

                                <motion.div 
                                    className="flex items-start gap-4 p-4 bg-gray-700/50 rounded-xl hover:bg-gray-700 transition-colors duration-300"
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                                        <FiLinkedin className="text-2xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-300 mb-1">LinkedIn</h3>
                                        <a 
                                            href="https://www.linkedin.com/in/nazmul-hasan-sunny" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-blue-400 transition-colors"
                                        >
                                            linkedin.com/in/nazmul-hasan-sunny
                                        </a>
                                    </div>
                                </motion.div>

                                <motion.div 
                                    className="flex items-start gap-4 p-4 bg-gray-700/50 rounded-xl hover:bg-gray-700 transition-colors duration-300"
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                                        <FaWhatsapp className="text-2xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-300 mb-1">What's App</h3>
                                        <a 
                                            href="https://web.whatsapp.com/" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-purple-400 transition-colors"
                                        >
                                            01706256105
                                        </a>
                                    </div>
                                </motion.div>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-lg font-medium text-gray-300 mb-4">Let's Connect</h3>
                                <div className="flex gap-4">
                                    {[
                                        { icon: <FiGithub />, url: "https://github.com/yourusername", color: "text-gray-300 hover:text-white" },
                                        { icon: <FiLinkedin />, url: "https://linkedin.com/in/nazmul-hasan-sunny", color: "text-blue-400 hover:text-blue-300" },
                                        { icon: <FaWhatsapp />, url: "https://web.whatsapp.com/", color: "text-green-600 hover:text-green-300" },
                                    ].map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`text-2xl p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors ${social.color}`}
                                            whileHover={{ y: -5, scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            {social.icon}
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.section>
                </div>
            </div>
        </div>
    );
}