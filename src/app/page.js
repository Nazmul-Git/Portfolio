'use client';
import { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import HomeMain from './components/homeComponents/HomeMain';

export default function Home() {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <HomeMain />

      {/* Scroll Up Button */}
      {showScrollUp && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-red-700 p-2 rounded-full shadow-xl transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl hover:rotate-12 focus:outline-none"
        >
          <FaArrowCircleUp className="text-3xl" />
        </button>
      )}
    </div>
  );
}
