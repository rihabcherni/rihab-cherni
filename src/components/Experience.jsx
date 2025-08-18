import React from 'react';

const Experience = ({ t, isDark, visibleSections, experiences }) => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`transition-all duration-1000 ${visibleSections.has('experience') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
            {t.experience.title}
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-gray-50'} shadow-sm hover:shadow-2xl transition-all duration-500 group overflow-hidden transform hover:scale-105 hover:-translate-y-2`}
                style={{
                  animationDelay: `${index * 200}ms`,
                  animation: visibleSections.has('experience') ? 'fadeInUp 0.6s ease-out both' : 'none'
                }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-1 transform transition-transform duration-300 group-hover:translate-x-2">
                        {exp.title}
                      </h3>
                      <p className="text-blue-500 font-medium transform transition-all duration-300 group-hover:scale-105">
                        {exp.company}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${isDark ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'}`}>
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 transition-opacity duration-300 group-hover:opacity-100 opacity-80">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-xs ${isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} transition-all duration-300 transform hover:scale-115 hover:bg-blue-500 hover:text-white cursor-default`}
                        style={{
                          animationDelay: `${techIndex * 100}ms`,
                          animation: visibleSections.has('experience') ? 'fadeInScale 0.5s ease-out both' : 'none'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
