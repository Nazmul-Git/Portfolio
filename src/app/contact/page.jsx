'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Here you can handle form submission (e.g., send the data to an API)
        // For now, we'll just show a success message.
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' }); 
    };

    return (
        <div className="max-w-4xl mx-auto px-6 py-20">
            {/* Header Section */}
            <header className="text-center mb-12">
                <motion.h1
                    className="text-4xl sm:text-5xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Contact Me
                </motion.h1>
            </header>

            {/* Form Section */}
            <section className="contact-form mb-12">
                <motion.div
                    className="max-w-lg mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    {!isSubmitted ? (
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label htmlFor="name" className="block text-lg text-gray-700 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="email" className="block text-lg text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-lg text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    rows="5"
                                    required
                                />
                            </div>

                            <motion.button
                                type="submit"
                                className="w-full px-6 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:bg-indigo-700"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 2 }}
                            >
                                Send Message
                            </motion.button>
                        </form>
                    ) : (
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 2 }}
                        >
                            <h2 className="text-xl text-gray-700 mb-4">Thank you for reaching out!</h2>
                            <p className="text-lg text-gray-700">
                                I'll get back to you as soon as possible.
                            </p>
                        </motion.div>
                    )}
                </motion.div>
            </section>

            {/* Additional Contact Methods Section */}
            <section className="additional-contact-methods mb-12">
                <motion.h2
                    className="text-3xl font-semibold text-gray-800 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 3 }}
                >
                    Other Ways to Reach Me
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <motion.div
                        className="flex items-center text-lg text-gray-700"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 3.5 }}
                    >
                        <span className="mr-4 text-indigo-600">📧</span>
                        <a href="mailto:your.email@example.com" className="hover:underline">
                            Email: your.email@example.com
                        </a>
                    </motion.div>

                    <motion.div
                        className="flex items-center text-lg text-gray-700"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 4 }}
                    >
                        <span className="mr-4 text-indigo-600">📞</span>
                        <a href="tel:+1234567890" className="hover:underline">
                            Phone: +1 (234) 567-890
                        </a>
                    </motion.div>

                    <motion.div
                        className="flex items-center text-lg text-gray-700"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 4.5 }}
                    >
                        <span className="mr-4 text-indigo-600">🔗</span>
                        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" className="hover:underline">
                            LinkedIn: @yourprofile
                        </a>
                    </motion.div>

                    <motion.div
                        className="flex items-center text-lg text-gray-700"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 5 }}
                    >
                        <span className="mr-4 text-indigo-600">🌐</span>
                        <a href="https://yourwebsite.com" target="_blank" className="hover:underline">
                            Website: www.yourwebsite.com
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="text-center mt-12">
                <motion.p
                    className="text-lg text-gray-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 5 }}
                >
                    You can also connect with me on{' '}
                    <a href="https://www.linkedin.com/in/yourprofile" target="_blank" className="text-indigo-600 hover:underline">
                        LinkedIn
                    </a>.
                </motion.p>
            </footer>
        </div>
    );
}
