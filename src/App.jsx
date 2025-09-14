import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Contact from './components/Contact';
import BackgroundAnimation from './components/BackgroundAnimation';
import Certifications from './components/Certifications';
import Loading from './components/Loading';
import { translations } from './data/translations';
import { contactItems, skills } from './data/data';
import Analytics from "./Analytics";
import { translationsProject } from './data/project';

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'fr');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [loading, setLoading] = useState(true);
  const isRTL = language === 'ar';

  const t = translations[language];
  const tp = translationsProject[language];
  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) return;
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'certifications', 'contact'];
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
    return <Loading t={t} isDark={isDark} />;
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      } ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <Analytics activeSection={activeSection} />
      <div className={`${language === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
        <Navbar isDark={isDark} setIsDark={setIsDark} language={language} setLanguage={setLanguage}
          isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}
          activeSection={activeSection} scrollToSection={scrollToSection} translations={translations} />
        <Hero t={t} isDark={isDark} visibleSections={visibleSections} scrollToSection={scrollToSection} isRTL={isRTL} />
        <About t={t} isDark={isDark} visibleSections={visibleSections} />
        <Experience t={t} isDark={isDark} visibleSections={visibleSections} />
        <Projects t={t} tp={tp} isDark={isDark} visibleSections={visibleSections} />
        <Skills t={t} skills={skills} isDark={isDark} visibleSections={visibleSections} />
        <Certifications t={t} isDark={isDark} visibleSections={visibleSections} isRTL={isRTL} />
        <Contact t={t} isDark={isDark} visibleSections={visibleSections} contactItems={contactItems} />
        <Footer t={t} isDark={isDark} scrollToSection={scrollToSection} />
        <BackgroundAnimation isDark={isDark} />
      </div>
    </div>
  );
};

export default App;
