import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar, Github, ExternalLink, User, Building2, Briefcase } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';

const Projects = ({ t, isDark, visibleSections }) => {
  const [expandedProjects, setExpandedProjects] = useState(new Set());
  const [showAll, setShowAll] = useState(false); // pour afficher tous les projets
  const isVisible = visibleSections?.has('projects') ?? true;

  const toggleExpanded = (index) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedProjects(newExpanded);
  };

  const truncateText = (text, maxLength = 83) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const renderLinks = (project) => {
    const links = [];
    if (project.link) {
      links.push(
        <a
          key="github"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full bg-white/90 backdrop-blur-sm text-gray-800 
          hover:bg-white hover:scale-110 hover:rotate-12 hover:text-black 
          transition-all duration-200 shadow-lg"
          title="GitHub Repository"
        >
          <Github className="h-4 w-4" />
        </a>
      );
    }
    if (project.linkweb) {
      links.push(
        <a
          key="website"
          href={project.linkweb}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full bg-white/90 backdrop-blur-sm text-gray-800 
          hover:bg-white hover:scale-110 hover:rotate-12 hover:text-black 
          transition-all duration-200 shadow-lg"
          title="Website"
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      );
    }
    return links;
  };

  // Limiter le nombre de projets affichés
  const displayedProjects = showAll ? t.projects.projectsListe : t.projects.projectsListe.slice(0, 6);

  return (
    <section 
      id="projects" 
      className={`py-8 transition-colors duration-300 ${isDark ? 'bg-gray-800/50' : 'bg-gray-200'}`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SectionTitle 
            title={t.projects.title} 
            subtitle={t.projects.subtitle} 
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProjects.map((project, index) => {
              const isExpanded = expandedProjects.has(index);
              const shouldTruncate = project.description.length > 100;
              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2
                    ${isDark ? 'bg-gray-800' : 'bg-white'} 
                    shadow-lg hover:shadow-2xl hover:rotate-1`}
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animation: isVisible ? `fadeInUp 0.8s ease-out both` : 'none'
                  }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
                      {project.date && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold
                          bg-white/90 backdrop-blur-sm text-gray-800 shadow-lg
                          hover:bg-white hover:scale-105 transition-all duration-200">
                          <Calendar className="w-3 h-3" />
                          {project.date}
                        </span>
                      )}
                      <div className="flex gap-2">
                        {renderLinks(project)}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 py-3">
                    <h3 className={`text-lg font-bold mb-1 transition-all duration-300 group-hover:translate-x-1
                      ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {project.title}
                    </h3>

                    <div className="mb-3 space-y-2">
                      {project.role && (
                        <div className={`flex items-center gap-2 text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                          <User className="w-3 h-3" />
                          <span className="font-medium">{project.role}</span>
                        </div>
                      )}
                      
                      <div className="flex items-center gap-4 text-xs">
                        {project.type && (
                          <div className={`flex items-center gap-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                            <Briefcase className="w-3 h-3" />
                            <span>{project.type}</span>
                          </div>
                        )}
                        
                        {project.organisation && (
                          <div className={`flex items-center gap-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                            <Building2 className="w-3 h-3" />
                            <span>{project.organisation}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className={`mb-2 text-sm leading-relaxed transition-colors duration-300
                      ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      <p>
                        {isExpanded || !shouldTruncate 
                          ? project.description 
                          : truncateText(project.description)
                        }
                      </p>
                      
                      {shouldTruncate && (
                        <button
                          onClick={() => toggleExpanded(index)}
                          className={`mt-1 text-xs font-semibold hover:underline transition-colors duration-200
                            ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`}
                        >
                          {isExpanded ?t.projects.moins : t.projects.plus }
                        </button>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 cursor-default
                            hover:scale-110 hover:shadow-md
                            ${isDark 
                              ? 'bg-gray-700 text-gray-300 hover:bg-blue-600 hover:text-white' 
                              : 'bg-gray-100 text-gray-600 hover:bg-blue-500 hover:text-white'
                            }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {t.projects.projectsListe.length > 3 && (
            <div className="mt-4 text-center">
              <motion.button 
                onClick={() => setShowAll(!showAll)}
                className={`group px-10 py-2 bg-gradient-to-r from-blue-600 to-blue-600 text-white rounded-3xl font-semibold  shadow-xl shadow-blue-500/25 transition-all duration-300hover:bg-blue-500`}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }} >
                {showAll ? t.projects.moins : t.projects.plus }
              </motion.button>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Projects;
