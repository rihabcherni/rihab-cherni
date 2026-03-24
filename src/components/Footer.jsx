import React from 'react';
import { ChevronUp } from 'lucide-react';
const Footer = ({ t, isDark, scrollToSection }) => {
  const year = new Date().getFullYear();
  const footerText = (t.footer.footer || "").replace("{year}", year);
  return (
    <>
      <footer className={`py-6 border-t ${isDark ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-gray-100'}`}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{footerText}</p>
        </div>
      </footer>
      <button
        aria-label="Scroll to top"
        onClick={() => scrollToSection('home')}
        className="fixed bottom-8 right-6 z-40 w-13 h-13 rounded-full
    bg-gradient-to-br from-blue-500 to-blue-600
    flex items-center justify-center
    shadow-lg hover:shadow-blue-500/50
    transition-all duration-300 hover:scale-110 active:scale-95
    group overflow-hidden"
      >
        <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
        <ChevronUp className="w-7 h-7 relative z-10 animate-bounce group-hover:animate-none group-hover:-translate-y-0.5 transition-transform duration-200" />
      </button>
    </>
  );
};
export default Footer;
