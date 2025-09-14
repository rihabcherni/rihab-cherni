import { Moon, Sun, Globe, Menu, X } from 'lucide-react';

const Navbar = ({
  isDark, setIsDark,
  language, setLanguage,
  isMenuOpen, setIsMenuOpen,
  activeSection, scrollToSection,
  translations
}) => {
  const t = translations[language];

  return (
    <nav className={`fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${isDark ? 'bg-gray-900/80 border-gray-800' : 'bg-white/80 border-gray-200'
      } border-b`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text text-transparent animate-pulse">
            RC.
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {Object.entries(t.nav).map(([key, value]) => (
              <button
                aria-label="Scroll btn"
                key={key}
                onClick={() => scrollToSection(key)}
                className={`relative transition-all duration-300 transform hover:scale-105 ${activeSection === key
                    ? 'text-blue-800 scale-110'
                    : isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                {value}
                {activeSection === key && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-800 animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-2">
            {/* Language Selector */}
            <div className="relative hover:scale-110 hover:rotate-5 ">
              <select
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
              aria-label="Theme btn"
              onClick={() => setIsDark(!isDark)}
              className={`px-4 py-1  rounded-lg transition-all duration-300 transform hover:scale-110 hover:rotate-5 ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                }`}
            >
              {isDark ? <Sun className="h-6 w-6 animate-pulse text-amber-400" /> : <Moon className="h-6 w-6 animate-pulse" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              aria-label="Mobile btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg transition-transform duration-300 hover:scale-110"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden border-t transition-all duration-300 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          } ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
          <div className="px-4 py-2 space-y-2">
            {Object.entries(t.nav).map(([key, value]) => (
              <button
                aria-label="Mobile Menu btn"
                key={key}
                onClick={() => scrollToSection(key)}
                className={`block w-full text-left py-2 px-3 rounded-md transition-all duration-300 transform hover:scale-105 ${activeSection === key
                    ? 'bg-blue-500 text-white'
                    : isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'
                  }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
