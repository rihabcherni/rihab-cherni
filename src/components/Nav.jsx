import { Moon, Sun, Globe, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = ({
  isDark, setIsDark,
  language, setLanguage,
  isMenuOpen, setIsMenuOpen,
  activeSection, scrollToSection,
  translations
}) => {
  const t = translations[language];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${isDark ? 'bg-gray-900/80 border-gray-800' : 'bg-white/80 border-gray-200'} border-b`}
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex justify-between items-center py-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text text-transparent animate-pulse"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
            viewport={{ once: true }}
          >
            RC.
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center space-x-8 md:space-x-6 md:text-[12px] lg:text-[16px]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, staggerChildren: 0.1 } }}
            viewport={{ once: true }}
          >
            {Object.entries(t.nav).map(([key, value]) => (
              <motion.button
                aria-label="nav"
                key={key}
                onClick={() => scrollToSection(key)}
                className={`relative transition-colors duration-75 ease-out ${activeSection === key
                    ? `text-blue-800 font-bold px-3 py-1 rounded-full shadow-sm ${isDark ? 'bg-blue-500/20 text-blue-200' : 'bg-blue-100/70'}`
                    : isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                {value}
                
              </motion.button>
            ))}
          </motion.div>
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
            viewport={{ once: true }}
          >            <div className="relative hover:scale-110 hover:rotate-5 hidden md:block">
              <select aria-label="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className={`appearance-none bg-transparent border rounded-md px-4 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:scale-105 ${isDark ? 'border-gray-700 text-white' : 'border-gray-300 text-gray-900'
                  }`}
                style={{ backgroundColor: isDark ? '#374151' : '#f9fafb' }}
              >
                <option value="fr" style={{ backgroundColor: isDark ? '#374151' : '#f9fafb', color: isDark ? 'white' : 'black' }}>FR</option>
                <option value="en" style={{ backgroundColor: isDark ? '#374151' : '#f9fafb', color: isDark ? 'white' : 'black' }}>EN</option>
                <option value="ar" style={{ backgroundColor: isDark ? '#374151' : '#f9fafb', color: isDark ? 'white' : 'black' }}>AR</option>
              </select>
              <Globe className="absolute right-0.5 top-0 h-4 w-4 pointer-events-none animate-spin" style={{ animationDuration: '8s' }} />
            </div>

            {/* Theme Toggle */}
            <button
              aria-label="Toggle dark mode"
              onClick={() => setIsDark(!isDark)}
              className={`hidden md:inline-flex px-4 py-1 rounded-lg transition-all duration-300 transform hover:scale-110 hover:rotate-5 ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                }`}
            >
              {isDark ? <Sun className="h-6 w-6 animate-pulse text-amber-400" /> : <Moon className="h-6 w-6 animate-pulse" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              aria-label="Open main menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg transition-transform duration-300 hover:scale-110"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className={`md:hidden border-t transform ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
        >
          <div className="px-4 py-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <select
                  aria-label="language"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className={`w-full appearance-none border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${isDark ? 'border-gray-700 text-white bg-gray-800' : 'border-gray-300 text-gray-900 bg-white'}`}
                >
                  <option value="fr">FR</option>
                  <option value="en">EN</option>
                  <option value="ar">AR</option>
                </select>
                <Globe className="absolute right-2 top-2.5 h-4 w-4 pointer-events-none" />
              </div>
              <button
                aria-label="Toggle dark mode"
                onClick={() => setIsDark(!isDark)}
                className={`shrink-0 px-3 py-2 rounded-md transition-all duration-300 ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                {isDark ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
            {Object.entries(t.nav).map(([key, value]) => (
              <motion.button
               aria-label="nav"
                key={key}
                onClick={() => { scrollToSection(key); setIsMenuOpen(false); }}
                className={`block w-full text-left py-2 px-3 rounded-md transition-all duration-300 transform hover:scale-105 ${activeSection === key
                    ? 'bg-blue-500 text-white'
                    : isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
                viewport={{ once: true }}
              >
                {value}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
