import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = ({ t, isDark, visibleSections, projects }) => {
  return (
    <section id="projects" className={`py-20 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className={`transition-all duration-1000 ${visibleSections.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
            {t.projects.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:rotate-1`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: visibleSections.has('projects') ? 'fadeInUp 0.6s ease-out both' : 'none'
                }}
              >
                {/* Image with overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-80 group-hover:opacity-90 transition-opacity duration-300`}></div>
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 transform transition-transform duration-300 group-hover:translate-x-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-2 py-1 rounded-full text-xs font-medium ${isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'} hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110 cursor-default`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-all duration-300 group transform hover:translate-x-2">
                    <ExternalLink className="h-4 w-4 transition-transform group-hover:rotate-45" />
                    {t.projects.view}
                  </button>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;