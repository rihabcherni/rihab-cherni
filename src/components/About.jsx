import React from 'react';
import { GraduationCap, Globe, Users } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';

const About = ({ t, isDark, visibleSections }) => {
  const languages = [
    { lang: t.about.langAr, level: t.about.levelAr, progress: 100 },
    { lang: t.about.langFr, level: t.about.levelFr, progress: 60 },
    { lang: t.about.langAng, level: t.about.levelAng, progress: 60 },
    { lang: t.about.langItalien, level: t.about.levelItalien, progress: 25 }
  ];
  return (
    <section id="about" className={`py-10 ${isDark ? 'bg-gray-800/50' : 'bg-gray-200'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${
            visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <SectionTitle title={t.about.title} subtitle={t.about.subtitle} />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Education */}
            <div className="space-y-6">
              <p className="text-[16px] leading-relaxed mb-4 text-gray-500 dark:text-gray-300">
                {t.about.description}
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-1 flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-blue-500 animate-bounce" />
                  {t.about.education}
                </h3>
                <div className="space-y-3">
                  {t.about.school.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.5,
                        type: 'spring',
                        stiffness: 120
                      }}
                      className={`p-4 rounded-xl border ${
                        isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
                      } shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1`}
                    >
                      <div className="flex justify-between items-center">
                        <h4 className="font-semibold text-sm">{edu.degree}</h4>
                        <span className="text-sm text-blue-500 font-bold">{edu.period}</span>
                      </div>
                      <p className="text-xs font-bold mb-1 text-gray-400">
                        {t.about.specialization} : <span className="italic"> {edu.spec}</span>
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-300">{edu.school}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Languages + Associations */}
            <div className="space-y-6">
              {/* Languages */}
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-1">
                  <Globe className="h-6 w-6 text-blue-500 animate-spin" style={{ animationDuration: '4s' }} />
                  {t.about.languages}
                </h3>
                <div className="space-y-3">
                  {languages.map((item, index) => (
                    <div key={index} className="group">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-sm group-hover:text-blue-500 transition-colors duration-300">
                          {item.lang}
                        </span>
                        <span className="text-sm text-gray-500">{item.level}</span>
                      </div>
                      <div
                        className={`h-2 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'} overflow-hidden`}
                      >
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: visibleSections.has('about') ? `${item.progress}%` : '0%',
                            transitionDelay: `${index * 200}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Associations */}
              <div className="transition-all duration-700 delay-400">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <Users className="h-6 w-6 text-yellow-500 animate-bounce" />
                  {t.about.club}
                </h3>

                <div className="grid md:grid-cols-1 gap-2">
                  {t.about.associations.map((assoc, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.5,
                        type: 'spring',
                        stiffness: 120
                      }}
                      className={`group px-4 py-3 rounded-xl border flex justify-between items-center transition-all duration-500 hover:shadow-lg hover:scale-105 ${
                        isDark
                          ? 'bg-gray-800/30 border-gray-700 hover:bg-gray-800/50'
                          : 'bg-white/60 border-gray-200 hover:bg-white/80'
                      }`}
                    >
                      <h5 className="font-semibold text-xs group-hover:text-blue-600 transition-colors duration-300">
                        {assoc.organization}
                      </h5>
                      <p className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-500 transition-colors duration-300">
                        {assoc.role}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
