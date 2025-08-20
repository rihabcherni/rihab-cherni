import React from 'react';
import { ChevronRight } from 'lucide-react';

const Footer = ({ isDark, scrollToSection }) => {
  return (
    <>
      <footer className={`py-8 border-t ${isDark ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400 animate-pulse">
            © 2025 Rihab Cherni. Tous droits réservés.
          </p>
        </div>
      </footer>
      <button
        onClick={() => scrollToSection('home')}
        className="fixed bottom-8 right-6 p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 z-40 group overflow-hidden transform hover:scale-105 hover:rotate-360"
      >
        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-bounce" />
        <ChevronRight className="h-6 w-6 transform -rotate-90 relative z-10 animate-bounce" />
      </button>
    </>
  );
};

export default Footer;
