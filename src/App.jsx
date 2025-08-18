import './App.css'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Contact from './components/Contact';
import BackgroundAnimation from './components/BackgroundAnimation';
import { translations } from './data/translations';
import { contactItems, experiences, projects, skills } from './data/data';

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [language, setLanguage] = useState('fr');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [loading, setLoading] = useState(true); 

  const t = translations[language];
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (loading) return;
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollY = window.scrollY;
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop - 100 && scrollY < offsetTop + offsetHeight - 100) {
            setActiveSection(section);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);
  useEffect(() => {
    if (loading) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, [loading]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <motion.div
          className="w-16 h-16 border-4 border-t-transparent border-blue-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    } ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className={`${language === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
        <Navbar isDark={isDark} setIsDark={setIsDark} language={language} setLanguage={setLanguage}
          isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}
          activeSection={activeSection} scrollToSection={scrollToSection} translations={translations}/>
        <Hero t={t} isDark={isDark} visibleSections={visibleSections} scrollToSection={scrollToSection} />
        <About t={t} isDark={isDark} visibleSections={visibleSections} />
        <Experience t={t} isDark={isDark} visibleSections={visibleSections} experiences={experiences} />
        <Projects t={t} isDark={isDark} visibleSections={visibleSections} projects={projects} />      
        <Skills t={t} skills={skills} isDark={isDark} visibleSections={visibleSections} />
        <Contact t={t} isDark={isDark} visibleSections={visibleSections} contactItems={contactItems}/>
        <Footer isDark={isDark} scrollToSection={scrollToSection} />
        <BackgroundAnimation isDark={isDark} />
      </div>
    </div>
  );
};

export default App;
