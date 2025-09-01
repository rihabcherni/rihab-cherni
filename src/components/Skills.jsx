import React from 'react';
import { Code, Globe, Briefcase, Phone, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { techIconsClass } from '../data/data';
import SectionTitle from './SectionTitle';

const categoryIcons = {
  programming: Code,
  frontend: Globe,
  backend: Briefcase,
  mobile: Phone,
  database: Award,
  tools: Users,
};

const Skills = ({ t, skills, isDark, visibleSections }) => {
  return (
    <section id="skills" className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visibleSections.has('skills') ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle title={t.skills.title} subtitle={t.skills.subtitle} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList], index) => {
              const Icon = categoryIcons[category];
              return (
                <motion.div
                  key={category}
                  className={`relative p-6 rounded-xl ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'} shadow-sm group overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-translate-y-2`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={visibleSections.has('skills') ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-blue-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Category icon & title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center animate-pulse">
                      {Icon && <Icon className="w-4 h-4 text-white" />}
                    </div>
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-gray-400 to-gray-500 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                      {t.skills[category]}
                    </h3>
                  </div>

                  {/* Skill badges */}
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {skillList.map((skill, skillIndex) => {
                      return (
                        <motion.span
                          key={skillIndex}
                          className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${isDark ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-700'} shadow-sm cursor-default border border-transparent transition-all duration-300 transform hover:scale-110 hover:bg-blue-500 hover:text-white hover:border-blue-500 hover:shadow-lg hover:rotate-2`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={visibleSections.has('skills') ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: skillIndex * 0.05 + 0.2, duration: 0.4 }}
                        >
                          <i className={`${techIconsClass[skill]} text-lg`} />
                          {skill}
                        </motion.span>
                      );
                    })}
                  </div>
                  <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center font-bold transition-all duration-300 transform group-hover:scale-120 group-hover:rotate-360 animate-pulse">
                    {skillList.length}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
