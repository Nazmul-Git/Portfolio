'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import { motion } from "framer-motion";
import { handleLinkClick } from "@/app/utils/navigationUtils";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname(); 

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isActive = (path) => {
    if (!isClient) return "";
    const normalizePath = (path) => path?.split('?')[0].split('#')[0];
    return normalizePath(pathname) === normalizePath(path)
      ? "text-blue-700 border-b-2 border-green-500"
      : "text-gray-400";
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 w-full z-50 py-8 transition-all duration-300 ${isScrolled ? "bg-black bg-opacity-95" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center">
        <ul className="hidden md:flex space-x-12">
          {["/", "/works", "/services", "/about", "/contact"].map((path, index) => (
            <motion.li
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Link
                href={path}
                onClick={() => handleLinkClick(path, isClient)}
                className={`text-sm md:text-lg font-bold ${isActive(path)} hover:text-blue-700 px-2 py-1 transition-all duration-300 ease-in-out`}
              >
                <motion.span
                  className="relative"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {path === "/" ? "Home" : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
                </motion.span>
              </Link>
            </motion.li>
          ))}
        </ul>

        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-400 hover:text-gray-200 transition-all duration-900"
          aria-label="Toggle navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 transition-all duration-300 ${isMenuOpen ? "rotate-45" : ""}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              className={isMenuOpen ? "opacity-0" : "opacity-100"}
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
              className={isMenuOpen ? "opacity-100" : "opacity-0"}
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <ul className="md:hidden w-full px-6 py-4 space-y-4 text-white">
          {["/", "/works", "/about", "/contact"].map((path, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Link
                href={path}
                onClick={() => {
                  handleLinkClick(path, isClient);
                  toggleMenu();
                }}
                className={`block text-lg font-bold ${isActive(path)} hover:text-gray-200 transition-all duration-300`}
              >
                {path === "/" ? "Home" : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
              </Link>
            </motion.li>
          ))}
        </ul>
      )}
    </nav>
  );
}
