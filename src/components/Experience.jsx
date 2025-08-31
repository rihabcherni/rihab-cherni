import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp,  MapPin, Calendar, Github } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Experience = ({ t, isDark, visibleSections }) => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpanded = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: { 
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 0.3
      }
    }
  };

  const horizontalLineVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
        delay: 0.3
      }
    }
  };

  const truncateText = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <section id="experience" className="p-10">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={visibleSections.has('experience') ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <SectionTitle title={t.experience.title} subtitle={t.experience.subtitle} />
          
          {/* Desktop Timeline - Horizontal */}
          <div className="hidden xl:block relative mt-8 px-20">
            {/* Timeline Line */}
            <motion.div 
              className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 to-blue-800 rounded-full transform -translate-y-1/2 origin-left"
              variants={horizontalLineVariants}
              style={{ zIndex: 1 }}
            />
            
            <div className="flex items-center justify-between px-3 relative">
              {t.experience.listeExperiences.map((exp, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative flex-1 min-w-0 group"
                    style={{ maxWidth: `${100 / t.experience.listeExperiences.length}%` }}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {/* Timeline Dot */}
                   <motion.div
                      className="absolute left-1/2 top-1/2 w-12 h-12 flex items-center justify-center 
                                font-bold text-white text-lg 
                                bg-gradient-to-r from-blue-500 to-blue-800 rounded-full 
                                transform -translate-x-1/2 -translate-y-1/2 
                                shadow-lg border-4 border-white dark:border-gray-900 z-50"
                      whileHover={{ scale: 1.3 }}
                      initial={{ opacity: 0, scale: 0.5, y: 50 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      viewport={{ once: true }}
                    >
                      {index + 1}
                    </motion.div>            
                    {/* Experience Card */}
                    <motion.div
                      className={`relative px-6 py-3 rounded-3xl ${
                        isDark ? 'bg-gray-800/95 backdrop-blur-sm border border-gray-700' : 'bg-white/95 backdrop-blur-sm border border-gray-200'
                      } shadow-xl hover:shadow-2xl transition-all duration-300 ${
                        isEven ? 'mb-8' : 'mt-8'
                      }`}
                      style={{
                        marginTop: isEven ? 0 : '22.5rem',
                        marginBottom: isEven ? '22.5rem' : 0,
                        marginLeft: '-6rem',
                        marginRight: '-6rem'
                      }}
                      whileHover={{
                        y: isEven ? -3 : 3,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl" />
                      
                      <div className="relative z-10">
                        <motion.div className="flex justify-between items-center mb-4">
                          {/* GitHub Link (à droite) */}
                          {exp.link && (
                            <motion.a
                              href={exp.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-1 text-xs font-medium
                                ${isDark ? 'text-gray-200 hover:text-white' : 'text-gray-700 hover:text-black'} 
                                transition-colors`}
                              whileHover={{ scale: 1.1, rotate: 3 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Github className={`h-5 w-5 hover:text-white transition-colors z-50`}/>
                            </motion.a>
                          )}
                          {/* Period Badge (à gauche) */}
                          <motion.span
                            className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium 
                              bg-gradient-to-r from-blue-400 to-blue-800 text-white
                            `}
                            whileHover={{ scale: 1.05, rotate: 1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                          </motion.span>
                        </motion.div>
                      
                        {/* Title & Company */}
                        <div className="mb-3">
                          <motion.h3 
                            className="text-[14px] font-bold mb-2 line-clamp-2 leading-tight"
                            whileHover={{ x: 2 }}
                            transition={{ duration: 0.2 }}
                          >
                            {exp.title}
                          </motion.h3>
                          <motion.p 
                            className="text-blue-500 font-semibold text-[13px] mb-1"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            {exp.company}
                          </motion.p>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <MapPin className="w-3 h-3" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        
                        {/* Description */}
                        <div className="mb-3">
                          <p className={`text-xs leading-relaxed ${
                            isDark ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            {expandedCards[index] ? exp.description : truncateText(exp.description, 100)}
                          </p>
                          {exp.description.length > 100 && (
                            <button
                              onClick={() => toggleExpanded(index)}
                              className="text-blue-500 hover:text-blue-600 text-xs mt-1 flex items-center gap-1 transition-colors"
                            >
                              {expandedCards[index] ? (
                                <>{t.experience.moins} <ChevronUp className="w-3 h-3" /></>
                              ) : (
                                <>{t.experience.plus}<ChevronDown className="w-3 h-3" /></>
                              )}
                            </button>
                          )}
                        </div>
                        
                        {/* Tech Stack */}
                        <div>
                          <div className="flex flex-wrap gap-1">
                            {exp.tech.slice(0, expandedCards[index] ? exp.tech.length : 5).map((tech, techIndex) => (
                              <motion.span
                                key={techIndex}
                                className={`px-2 py-1 rounded-full text-[10px] font-medium ${
                                  isDark 
                                    ? 'bg-gray-700 text-gray-300 hover:bg-blue-600 hover:text-white' 
                                    : 'bg-gray-100 text-gray-700 hover:bg-blue-500 hover:text-white'
                                } transition-all duration-200 cursor-default`}
                                whileHover={{ scale: 1.05, y: -1 }}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ 
                                  delay: techIndex * 0.05,
                                  duration: 0.3
                                }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                            {exp.tech.length > 3 && !expandedCards[index] && (
                              <button
                                onClick={() => toggleExpanded(index)}
                                className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  isDark ? 'bg-gray-700 text-gray-400 hover:bg-gray-600' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                } transition-colors`}
                              >
                                +{exp.tech.length - 3}
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Connection line to timeline dot */}
                    <motion.div
                      className={`absolute left-1/2 w-px ${
                        isEven ? 'bottom-1/2' : 'top-1/2'
                      } ${isDark ? 'bg-gray-600' : 'bg-gray-300'} transform -translate-x-1/2`}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                      style={{
                        [isEven ? 'bottom' : 'top']: '50%',
                        transformOrigin: isEven ? 'bottom' : 'top',
                        height: expandedCards[index] ? '2rem' : '4rem',
                      }}
                    />
                  </motion.div>
                  
                );
              })}
            </div>
          </div>

          {/* Tablet Timeline - Vertical Grid */}
          <div className="hidden md:block xl:hidden relative mt-12">
            <div className="grid grid-cols-2 gap-8">
              {t.experience.listeExperiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative group"
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  {/* Experience Card */}
                  <motion.div
                    className={`relative p-6 rounded-2xl ${
                      isDark ? 'bg-gray-800/95 backdrop-blur-sm border border-gray-700' : 'bg-white/95 backdrop-blur-sm border border-gray-200'
                    } shadow-xl hover:shadow-2xl transition-all duration-300`}
                  >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl" />
                    
                    <div className="relative z-10">
                      <motion.div className="flex justify-between items-center mb-4">
                        {/* GitHub Link (à droite) */}
                          {exp.link && (
                            <motion.a
                              href={exp.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-1 text-xs font-medium
                                ${isDark ? 'text-gray-200 hover:text-white' : 'text-gray-700 hover:text-black'} 
                                transition-colors`}
                              whileHover={{ scale: 1.1, rotate: 3 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Github className={`h-5 w-5 hover:text-white transition-colors z-50`}/>
                            </motion.a>
                          )}
                        {/* Period Badge (à gauche) */}
                          <motion.span
                            className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium 
                              bg-gradient-to-r from-blue-400 to-blue-800 text-white
                            `}
                            whileHover={{ scale: 1.05, rotate: 1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                          </motion.span>
                      </motion.div>
                      
                      {/* Title & Company */}
                      <div className="mb-3">
                        <h3 className="text-lg font-bold mb-2">{exp.title}</h3>
                        <p className="text-blue-500 font-semibold text-sm mb-2">{exp.company}</p>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <div className="mb-3">
                        <p className={`text-sm leading-relaxed ${
                          isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {expandedCards[index] ? exp.description : truncateText(exp.description, 150)}
                        </p>
                        {exp.description.length > 150 && (
                          <button
                            onClick={() => toggleExpanded(index)}
                            className="text-blue-500 hover:text-blue-600 text-sm mt-2 flex items-center gap-1 transition-colors"
                          >
                            {expandedCards[index] ? (
                              <>Voir moins <ChevronUp className="w-4 h-4" /></>
                            ) : (
                              <>Voir plus <ChevronDown className="w-4 h-4" /></>
                            )}
                          </button>
                        )}
                      </div>
                      
                      {/* Tech Stack */}
                      <div>
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.slice(0, expandedCards[index] ? exp.tech.length : 6).map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                isDark 
                                  ? 'bg-gray-700 text-gray-300 hover:bg-blue-600 hover:text-white' 
                                  : 'bg-gray-100 text-gray-700 hover:bg-blue-500 hover:text-white'
                              } transition-all duration-200 cursor-default`}
                              whileHover={{ scale: 1.05, y: -1 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                          {exp.tech.length > 6 && !expandedCards[index] && (
                            <button
                              onClick={() => toggleExpanded(index)}
                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                isDark ? 'bg-gray-700 text-gray-400 hover:bg-gray-600' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                              } transition-colors`}
                            >
                              +{exp.tech.length - 6}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline - Vertical */}
          <div className="block md:hidden relative mt-8">
            {/* Vertical Timeline Line */}
            <motion.div 
              className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full origin-top"
              variants={lineVariants}
              style={{ zIndex: 1 }}
            />
            
            <div className="space-y-8 pl-16">
              {t.experience.listeExperiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <motion.div
                      className="absolute -left-[2.5rem] top-4 w-9 h-9 flex items-center justify-center 
                                font-bold text-white text-lg 
                                bg-gradient-to-r from-blue-500 to-blue-800 rounded-full 
                                transform -translate-x-1/2 -translate-y-1/2 
                                shadow-lg border-4 border-white dark:border-gray-900 z-50"
                      whileHover={{ scale: 1.3 }}
                      initial={{ opacity: 0, scale: 0.5, y: 50 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      viewport={{ once: true }}
                  >
                    {index + 1}
                  </motion.div>   
                  
                  {/* Connection line to timeline */}
                  <motion.div
                    className={`absolute -left-12 top-5 w-6 h-px ${
                      isDark ? 'bg-gray-600' : 'bg-gray-300'
                    }`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                  />
                  
                  {/* Experience Card */}
                  <motion.div
                    className={`relative p-5 rounded-2xl w-full ${
                      isDark ? 'bg-gray-800/95 backdrop-blur-sm border border-gray-700' : 'bg-white/95 backdrop-blur-sm border border-gray-200'
                    } shadow-xl hover:shadow-2xl transition-all duration-300`}
                    whileHover={{
                      x: 3,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl" />
                    
                    <div className="relative z-10">
                      <motion.div className="flex justify-between items-center mb-4">
                        {/* GitHub Link (à droite) */}
                          {exp.link && (
                            <motion.a
                              href={exp.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-1 text-xs font-medium
                                ${isDark ? 'text-gray-200 hover:text-white' : 'text-gray-700 hover:text-black'} 
                                transition-colors`}
                              whileHover={{ scale: 1.1, rotate: 3 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Github className={`h-5 w-5 hover:text-white transition-colors z-50`}/>
                            </motion.a>
                          )}
                        {/* Period Badge (à gauche) */}
                          <motion.span
                            className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium 
                              bg-gradient-to-r from-blue-400 to-blue-800 text-white
                            `}
                            whileHover={{ scale: 1.05, rotate: 1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                          </motion.span>
                      </motion.div>            
                      {/* Title & Company */}
                      <div className="mb-3">
                        <h3 className="text-base font-bold mb-1.5">{exp.title}</h3>
                        <p className="text-blue-500 font-semibold text-sm mb-1.5">{exp.company}</p>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <MapPin className="w-3 h-3" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <div className="mb-3">
                        <p className={`text-sm leading-relaxed ${
                          isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {expandedCards[index] ? exp.description : truncateText(exp.description, 120)}
                        </p>
                        {exp.description.length > 120 && (
                          <button
                            onClick={() => toggleExpanded(index)}
                            className="text-blue-500 hover:text-blue-600 text-sm mt-2 flex items-center gap-1 transition-colors"
                          >
                            {expandedCards[index] ? (
                              <>Voir moins <ChevronUp className="w-4 h-4" /></>
                            ) : (
                              <>Voir plus <ChevronDown className="w-4 h-4" /></>
                            )}
                          </button>
                        )}
                      </div>
                      
                      {/* Tech Stack */}
                      <div>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.tech.slice(0, expandedCards[index] ? exp.tech.length : 4).map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                isDark 
                                  ? 'bg-gray-700 text-gray-300 hover:bg-blue-600 hover:text-white' 
                                  : 'bg-gray-100 text-gray-700 hover:bg-blue-500 hover:text-white'
                              } transition-all duration-200 cursor-default`}
                              whileHover={{ scale: 1.05, y: -1 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                          {exp.tech.length > 4 && !expandedCards[index] && (
                            <button
                              onClick={() => toggleExpanded(index)}
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                isDark ? 'bg-gray-700 text-gray-400 hover:bg-gray-600' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                              } transition-colors`}
                            >
                              +{exp.tech.length - 4}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;