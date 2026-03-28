import React from 'react';
import { Download, Mail, Phone, MapPin, ArrowRight, Sparkles, Globe, Smartphone, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = ({ t, isDark, visibleSections, scrollToSection, isRTL }) => {

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
    <section id="home" className="min-h-[85vh] sm:min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 pt-14 pb-4 sm:py-18 md:pb-10 md:pt-20 relative overflow-hidden">
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
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-16 items-center">
          <motion.div variants={containerVariants} initial="hidden" animate={visibleSections.has('home') ? "visible" : "hidden"}
            className={`space-y-7 md:space-y-8 lg:col-span-2 text-center  ${isRTL ? "lg:text-right" : "lg:text-left"}`}>
            <motion.div variants={itemVariants} className="space-y-2">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 mt-6 
                          bg-gradient-to-r from-blue-50/20 via-transparent to-blue-100/20 
                          dark:from-blue-900/20 dark:via-transparent dark:to-blue-800/20 
                          rounded-2xl text-sm font-medium text-blue-600 dark:text-blue-400 
                          border border-white/40 dark:border-gray-600 
                          shadow-md shadow-blue-500/30"
              >
                <span>👋</span>
                {t.home.welcome}
              </span>
            </motion.div>
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
                <motion.span
                  className="bg-gradient-to-r from-gray-600 via-blue-800 to-blue-800 dark:from-white dark:via-blue-200 dark:to-blue-200 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {t.home.title}
                </motion.span>
              </h1>
              <motion.div
                className="text-base sm:text-lg md:text-xl lg:text-3xl font-semibold text-gray-600 dark:text-gray-300"
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
              className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl mx-auto md:mx-0"
            >
              {t.home.description}
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-full md:w-full items-center justify-center lg:justify-start"
            >
              <motion.button
                aria-label="cta"
                onClick={() => scrollToSection('projects')}
                className="group w-[90%] max-w-xs sm:w-auto md:w-auto justify-center px-7 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-600 text-white rounded-xl font-semibold flex items-center gap-3 shadow-xl shadow-blue-500/25"
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
                aria-label="Download CV (PDF)"
                href="/cv.pdf"
                download="Rihab_Cherni_CV.pdf"
                className={`group w-[90%] max-w-xs sm:w-auto md:w-auto justify-center px-7 sm:px-8 py-3.5 sm:py-4 border-2 rounded-xl font-semibold flex items-center gap-3 transition-all duration-300 ${isDark
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
              className="flex flex-wrap gap-4 sm:gap-5 pt-2 justify-center lg:justify-start"
            >
              {[
                { icon: Mail, text: "cherni.rihab23@gmail.com", color: "blue" },
                { icon: Phone, text: "+216 23 710 078", color: "green" },
                { icon: MapPin, text: t.home.address, color: "blue" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 cursor-pointer group 
                      ${isRTL ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}
                  whileHover={{
                    scale: 1.05,
                    color: item.color === 'blue' ? '#3b82f6' : item.color === 'green' ? '#10b981' : '#8b5cf6'
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  dir={"ltr"}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    <item.icon className="h-4 w-4" />
                  </motion.div>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={visibleSections.has('home') ? "visible" : "hidden"}
            className="relative flex justify-center lg:justify-end lg:col-span-1"
          >
            <div className="relative w-60 sm:w-80 md:w-[20rem] lg:w-[26rem] xl:w-[28rem] aspect-square mb-6 sm:mb-0 mx-auto md:mx-0">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-300 via-blue-600 to-blue-900 p-4"
                whileHover={{ scale: 1.04, rotate: 1.5 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    loading="lazy"
                    decoding="async"
                    src="img.webp"
                    alt={t.home.title}
                    className="w-full h-full object-cover rounded-full transition-transform duration-300 hover:scale-120"
                  />
                </div>
              </motion.div>
              {[
                { icon: Globe, label: "Web", top: "-8%", left: "50%", transform: "translateX(-50%)", color: "text-blue-600 dark:text-blue-400", bgColor: "bg-blue-200 dark:bg-blue-900/30", borderColor: "border-blue-400 dark:border-blue-800" },
                { icon: Smartphone, label: "Mobile", top: "50%", left: "-8%", transform: "translateY(-50%)", color: "text-green-600 dark:text-green-400", bgColor: "bg-green-200 dark:bg-green-900/30", borderColor: "border-green-400 dark:border-green-800" },
                { icon: Shield, label: "Sécurité", top: "80%", right: "10%", transform: "translateY(-50%)", color: "text-purple-600 dark:text-purple-400", bgColor: "bg-purple-200 dark:bg-purple-900/30", borderColor: "border-purple-400 dark:border-purple-800" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className={`absolute flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-full ${item.bgColor} ${item.borderColor} border-2 sm:border-4 shadow-lg ${item.color}`}
                  style={{
                    top: item.top,
                    left: item.left,
                    right: item.right,
                    transform: item.transform
                  }}
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.6,
                    ease: "easeInOut"
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
                  }}
                >
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section >
  );
};
export default Hero;
