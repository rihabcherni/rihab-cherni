import React from 'react';
import { Download, Mail, Phone, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = ({ t = {
  home: {
    title: "Rihab Cherni",
    subtitle: "Développeuse Full Stack",
    description: "Passionnée par la création d'expériences numériques innovantes et performantes. Spécialisée en React, Node.js et technologies modernes.",
    cta: "Voir mes projets",
    download: "Télécharger CV"
  }
}, isDark = false, visibleSections = new Set(['home']), scrollToSection = () => {} }) => {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const sparkleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 lg:px-8 pt-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          className="absolute top-20 left-20 w-6 h-6 text-blue-400 opacity-30"
        >
          <Sparkles />
        </motion.div>
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
          className="absolute top-40 right-32 w-4 h-4 text-blue-400 opacity-20"
        >
          <Sparkles />
        </motion.div>
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          style={{ animationDelay: '4s' }}
          className="absolute bottom-32 left-32 w-5 h-5 text-pink-400 opacity-25"
        >
          <Sparkles />
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={visibleSections.has('home') ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-2">
              <motion.span 
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-50 dark:from-blue-900/20 dark:to-blue-900/20 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
                >
                  👋
                </motion.div>
                Salut, je suis
              </motion.span>
            </motion.div>
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <motion.span 
                  className="bg-gradient-to-r from-gray-600 via-blue-800 to-blue-800 dark:from-white dark:via-blue-200 dark:to-blue-200 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {t.home.title}
                </motion.span>
              </h1>
              
              <motion.div 
                className="text-2xl lg:text-4xl font-semibold text-gray-600 dark:text-gray-300"
                variants={itemVariants}
              >
                <motion.span
                  className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {t.home.subtitle}
                </motion.span>
              </motion.div>
            </motion.div>
            <motion.p 
              variants={itemVariants}
              className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl"
            >
              {t.home.description}
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-600 text-white rounded-xl font-semibold flex items-center gap-3 shadow-xl shadow-blue-500/25"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {t.home.cta}
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </motion.button> 
              <motion.a
                href="/cv.pdf" // Assure-toi que cv.pdf est dans le dossier public
                download="Rihab_Cherni_CV.pdf" // Nom du fichier lors du téléchargement
                className={`group px-8 py-4 border-2 rounded-xl font-semibold flex items-center gap-3 transition-all duration-300 ${
                  isDark
                    ? 'border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
                }`}
                whileHover={{
                  scale: 1.05,
                  borderColor: isDark ? '#6366f1' : '#3b82f6'
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Download className="h-5 w-5" />
                </motion.div>
                {t.home.download}
              </motion.a>
            </motion.div>
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-6 pt-4"
            >
              {[
                { icon: Mail, text: "cherni.rihab23@gmail.com", color: "blue" },
                { icon: Phone, text: "+216 23 710 078", color: "green" },
                { icon: MapPin, text: "Tunis, Tunisia", color: "blue" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 cursor-pointer group`}
                  whileHover={{ 
                    scale: 1.05,
                    color: item.color === 'blue' ? '#3b82f6' : item.color === 'green' ? '#10b981' : '#8b5cf6'
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    <item.icon className="h-4 w-4" />
                  </motion.div>
                  {item.text}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={visibleSections.has('home') ? "visible" : "hidden"}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">              
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-blue-500 to-pink-500 p-1"
                whileHover={{ 
                  scale: 1.05,
                  rotate: 5
                }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}>
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img src="img.jpg" alt={t.home.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"/>
                </div>
              </motion.div>
              <motion.div
                className="absolute -top-3 -right-3 w-6 h-6 bg-blue-500 rounded-full opacity-80"
                animate={{ 
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <motion.div
                className="absolute -bottom-3 -left-3 w-4 h-4 bg-blue-500 rounded-full opacity-80"
                animate={{ 
                  scale: [1, 1.3, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;