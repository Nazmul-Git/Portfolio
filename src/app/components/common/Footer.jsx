import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white text-center py-6 sm:py-8 md:py-10">
            <div className="container mx-auto">
                <p className="text-sm sm:text-base md:text-lg font-medium mb-4">
                    &copy; {new Date().getFullYear()} <span className="font-bold text-yellow-300">Software Engineer Info</span>. All rights reserved.
                </p>

                <div className="flex justify-center gap-6 mb-6">
                    {/* GitHub */}
                    <a
                        href="https://github.com/Nazmul-Git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl hover:text-gray-200 transition-colors"
                        style={{ color: '#333' }}
                    >
                        <FaGithub />
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/nazmul-hasan-sunny"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl hover:text-gray-200 transition-colors"
                        style={{ color: '#0077b5' }} 
                    >
                        <FaLinkedin />
                    </a>

                    {/* Facebook */}
                    <a
                        href="https://www.facebook.com/tahsinahmed.sunny"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl hover:text-gray-200 transition-colors"
                        style={{ color: '#1877F2' }} 
                    >
                        <FaFacebook />
                    </a>
                </div>

                <p className="text-xs sm:text-sm md:text-base font-light text-gray-300">
                    Crafted with ❤️ by Nazmul Hasan Sunny
                </p>
            </div>
        </footer>
    );
}
