import React, { useState, useEffect } from 'react';
import { Download, Calendar, Award, ExternalLink, Sparkles, ChevronLeft, ChevronRight, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { certifications } from '../data/certifications';
import SectionTitle from './SectionTitle';

const Certifications = ({ t, isDark, visibleSections,isRTL}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerSlide, setCardsPerSlide] = useState(3);

    useEffect(() => {
        const updateCardsPerSlide = () => {
            if (window.innerWidth < 640) {
                setCardsPerSlide(1);
            } else if (window.innerWidth < 1024) {
                setCardsPerSlide(2);
            } else {
                setCardsPerSlide(3);
            }
        };

        updateCardsPerSlide();
        window.addEventListener('resize', updateCardsPerSlide);
        return () => window.removeEventListener('resize', updateCardsPerSlide);
    }, []);

    const totalSlides = Math.ceil(certifications.length / cardsPerSlide);
    const maxIndex = Math.max(0, totalSlides - 1);

    const nextSlide = () => {
        setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
    };

    const prevSlide = () => {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
    };

    const goToSlide = (index) => {
        setCurrentIndex(Math.min(index, maxIndex));
    };

    const canGoNext = currentIndex < maxIndex;
    const canGoPrev = currentIndex > 0;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
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
        <section id="certifications" className={`py-10 px-4 lg:px-8 relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-gray-800/50' : 'bg-gray-200'}`}>
            <div className="absolute inset-0 pointer-events-none">
                <motion.div variants={sparkleVariants} animate="animate" className="absolute top-32 left-16 w-6 h-6 text-blue-400 opacity-30">
                    <Sparkles />
                </motion.div>
                <motion.div variants={sparkleVariants} animate="animate" style={{ animationDelay: '2s' }} className="absolute top-24 right-50 w-4 h-4 text-red-400 opacity-25">
                    <Sparkles />
                </motion.div>
                <motion.div variants={sparkleVariants} animate="animate" style={{ animationDelay: '3s' }} className="absolute top-64 right-20 w-4 h-4 text-blue-400 opacity-20">
                    <Sparkles />
                </motion.div>
                <motion.div variants={sparkleVariants} animate="animate" style={{ animationDelay: '4s' }} className="absolute bottom-40 left-1/4 w-5 h-5 text-green-400 opacity-25">
                    <Sparkles />
                </motion.div>
            </div>
            <div className="max-w-7xl mx-auto">
                <motion.div variants={containerVariants} initial="hidden" animate={visibleSections.has('certifications') ? "visible" : "hidden"} className="text-center mb-2">
                    <SectionTitle title={t.certifications.title} subtitle={t.certifications.subtitle} />
                </motion.div>
                <motion.div variants={containerVariants} initial="hidden" animate={visibleSections.has('certifications') ? "visible" : "hidden"} className="relative">
                    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 z-20 pointer-events-none px-4">
                        <div className="flex justify-between">
                            <motion.button onClick={prevSlide} disabled={!canGoPrev}
                                className={`pointer-events-auto w-14 h-14 rounded-full flex items-center justify-center
                                          shadow-lg backdrop-blur-sm border transition-all duration-300 -ml-7
                                          ${canGoPrev 
                                            ? 'bg-white/95 dark:bg-gray-800/95 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 hover:scale-110 hover:shadow-xl' 
                                            : 'bg-gray-100/50 dark:bg-gray-900/50 border-gray-300/50 dark:border-gray-700/50 text-gray-400 dark:text-gray-600 cursor-not-allowed'
                                          }`}
                                whileHover={canGoPrev ? { scale: 1.1, x: -2 } : {}}
                                whileTap={canGoPrev ? { scale: 0.9 } : {}}
                            >
                                {isRTL ?<ChevronRight className="h-6 w-6" />:<ChevronLeft className="h-6 w-6" />}
                            </motion.button>
                            <motion.button
                                onClick={nextSlide}
                                disabled={!canGoNext}
                                className={`pointer-events-auto w-14 h-14 rounded-full flex items-center justify-center
                                          shadow-lg backdrop-blur-sm border transition-all duration-300 -mr-7
                                          ${canGoNext 
                                            ? 'bg-white/95 dark:bg-gray-800/95 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 hover:scale-110 hover:shadow-xl' 
                                            : 'bg-gray-100/50 dark:bg-gray-900/50 border-gray-300/50 dark:border-gray-700/50 text-gray-400 dark:text-gray-600 cursor-not-allowed'
                                          }`}
                                whileHover={canGoNext ? { scale: 1.1, x: 2 } : {}}
                                whileTap={canGoNext ? { scale: 0.9 } : {}}
                            >
                                {isRTL ?<ChevronLeft className="h-6 w-6" />:<ChevronRight className="h-6 w-6" />}
                            </motion.button>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-2xl mx-8">
                        <motion.div
                            className="flex transition-transform duration-500 ease-out gap-6"
                            style={{ 
                                transform: `translateX(${isRTL ? currentIndex * (100 / totalSlides) : -currentIndex * (100 / totalSlides)}%)`,
                                width: `${totalSlides * 100}%`
                            }}
                        >
                            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                                <div 
                                    key={slideIndex}
                                    className="flex gap-6 min-w-0"
                                    style={{ width: `${100 / totalSlides}%` }}
                                >
                                    {certifications
                                        .slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide)
                                        .map((cert, certIndex) => (
                                        <motion.div
                                            key={cert.title}
                                            className="flex-1 min-w-0"
                                            variants={cardVariants}
                                            whileHover={{ y: -10, scale: 1.02 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className={`group relative overflow-hidden rounded-2xl ${cert.bgColor} ${cert.borderColor} border-2 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col`}>
                                                <div className="absolute top-4 left-4 z-10">
                                                    <motion.span
                                                        className={`inline-block px-3 py-1 text-xs font-medium rounded-full 
                                                                  bg-white/90 dark:bg-gray-800/90 
                                                                  ${cert.iconColor} backdrop-blur-sm 
                                                                  shadow-md border border-white/50 dark:border-gray-700/50`}
                                                        whileHover={{ scale: 1.05 }}
                                                    >
                                                        {cert.domain}
                                                    </motion.span>
                                                </div>
                                                <div className="absolute top-4 right-4 z-10">
                                                    
                                                     <motion.span
                                                        className="px-2 py-1 font-bold 
                                                                 bg-black/20 text-white rounded-full backdrop-blur-sm flex items-center gap-2 text-xs mb-3"
                                                            whileHover={{ x: 3 }}
                                                        >
                                                            <Calendar className="h-3 w-3" />
                                                            {cert.date}
                                                        </motion.span>
                                                </div>
                                                <div className="relative h-48 overflow-hidden">
                                                    {cert.image ? (
                                                        <motion.div
                                                            className="absolute inset-0"
                                                            whileHover={{ scale: 1.05 }}
                                                            transition={{ duration: 0.3 }}
                                                        >
                                                            <img 
                                                                src={cert.image} 
                                                                alt={cert.title}
                                                                className="w-full h-full object-cover"
                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40" />
                                                        </motion.div>
                                                    ) : (
                                                        <motion.div
                                                            className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-90`}
                                                            whileHover={{ scale: 1.05 }}
                                                            transition={{ duration: 0.3 }}
                                                        />
                                                    )}
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <motion.div
                                                            className={`w-16 h-16 ${cert.image ? 'bg-black/500' : 'bg-white/20'} rounded-full flex items-center justify-center backdrop-blur-sm`}
                                                            animate={{
                                                                rotate: [0, 20, -20, 0],
                                                                scale: [1, 1.15, 1]
                                                            }}
                                                            transition={{
                                                                duration: 4,
                                                                repeat: Infinity,
                                                                delay: (slideIndex * cardsPerSlide + certIndex) * 0.5
                                                            }}
                                                        >
                                                            <Award className="h-8 w-8 text-white" />
                                                        </motion.div>
                                                    </div>
                                                    <motion.div
                                                        className="absolute bottom-4 left-4 w-6 h-6 bg-white/10 rounded-full"
                                                        animate={{
                                                            y: [0, -8, 0],
                                                            opacity: [0.3, 0.6, 0.3]
                                                        }}
                                                        transition={{
                                                            duration: 3,
                                                            repeat: Infinity,
                                                            delay: (slideIndex * cardsPerSlide + certIndex) * 0.3
                                                        }}
                                                    />
                                                </div>
                                                <div className={`px-6 py-3 space-y-4 bg-gradient-to-r ${cert.color} flex-1 flex flex-col`}>
                                                    <div className="flex-1">
                                                        <h3 className="text-[14px] font-bold text-gray-800 dark:text-white
                                                                     group-hover:text-gray-900 dark:group-hover:text-gray-100 
                                                                     transition-colors line-clamp-2 min-h-[2rem]">
                                                            {cert.title}
                                                        </h3>
                                                        <p className="text-gray-600 dark:text-gray-400 font-medium text-sm mb-3">
                                                            {cert.organization}
                                                        </p>
                                                       
                                                        {cert.skills && cert.skills.length > 0 && (
                                                            <div>
                                                                <motion.div className="flex items-center gap-1 mb-1">
                                                                    <Tag className="h-3 w-3 text-gray-500 dark:text-gray-400" />
                                                                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                                                                        {t.certifications.Skills}
                                                                    </span>
                                                                </motion.div>
                                                                <div className="flex flex-wrap gap-1">
                                                                    {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                                                                        <motion.span
                                                                            key={skillIndex}
                                                                            className={`px-2 pt-1 text-xs rounded-md 
                                                                                      ${cert.iconColor} bg-white/50 dark:bg-gray-800/50 
                                                                                      font-medium backdrop-blur-sm`}
                                                                            whileHover={{ scale: 1.05 }}
                                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                                            animate={{ opacity: 1, scale: 1 }}
                                                                            transition={{ delay: skillIndex * 0.1 }}
                                                                        >
                                                                            {skill}
                                                                        </motion.span>
                                                                    ))}
                                                                    {cert.skills.length > 3 && (
                                                                        <motion.span
                                                                            className="px-2 py-1 text-xs rounded-md 
                                                                                     bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 
                                                                                     font-medium"
                                                                            whileHover={{ scale: 1.05 }}
                                                                        >
                                                                            +{cert.skills.length - 3}
                                                                        </motion.span>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="flex gap-3">
                                                        <motion.a
                                                            href={cert.pdfUrl}
                                                            download={`${cert.title.replace(/\s+/g, '_')}_Certificate.pdf`}
                                                            className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 
                                                                     text-white rounded-lg font-medium flex items-center justify-center 
                                                                     gap-2 transition-all duration-300 text-sm hover:from-blue-700 hover:to-blue-800
                                                                     shadow-md hover:shadow-lg"
                                                            whileHover={{
                                                                scale: 1.02,
                                                                boxShadow: "0 8px 25px rgba(37, 99, 235, 0.3)"
                                                            }}
                                                            whileTap={{ scale: 0.98 }}
                                                        >
                                                            <motion.div
                                                                animate={{ y: [0, -1, 0] }}
                                                                transition={{ duration: 2, repeat: Infinity }}
                                                            >
                                                                <Download className="h-4 w-4" />
                                                            </motion.div>
                                                            <span>{t.certifications.pdf}</span>
                                                        </motion.a>
                                                        {(cert.link || cert.verifyUrl) && (
                                                            <motion.a
                                                                href={cert.link || cert.verifyUrl}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className={`px-3 py-2 ${cert.iconColor} bg-gray-100 dark:bg-gray-800 
                                                                          hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg 
                                                                          transition-all duration-300 shadow-md group/verify`}
                                                                whileHover={{
                                                                    scale: 1.1,
                                                                    rotate: 5
                                                                }}
                                                                whileTap={{ scale: 0.9 }}
                                                                title="Vérifier la certification"
                                                            >
                                                                <ExternalLink className="h-4 w-4 group-hover/verify:scale-110 transition-transform" />
                                                            </motion.a>
                                                        )}
                                                    </div>
                                                </div>
                                                <motion.div
                                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                                                             translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                                                    initial={false}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <motion.button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    currentIndex === index
                                        ? 'bg-blue-600 dark:bg-blue-400 scale-110'
                                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                                }`}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;