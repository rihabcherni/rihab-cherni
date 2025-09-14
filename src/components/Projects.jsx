import { useState } from 'react';
import { Calendar, Github, ExternalLink, User, Building2, Briefcase } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';

const Projects = ({ t, tp, isDark, visibleSections }) => {
  const [expandedProjects, setExpandedProjects] = useState(new Set());
  const [showAll, setShowAll] = useState(false);
  const isVisible = visibleSections?.has('projects') ?? true;

  const toggleExpanded = (index) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(index)) newExpanded.delete(index);
    else newExpanded.add(index);
    setExpandedProjects(newExpanded);
  };

  const truncateText = (text, maxLength = 70) => text.length <= maxLength ? text : text.substring(0, maxLength) + '...';

  const renderLinks = (project) => {
    const links = [];
    if (project.link) links.push(
      <a
        key="github"
        href={project.link}
         aria-label="Voir mon projet GitHub"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2.5 rounded-full bg-white/90 backdrop-blur-sm text-gray-800 hover:bg-white hover:scale-110 hover:rotate-12 hover:text-black transition-all duration-200 shadow-lg"
        title="GitHub Repository"
      >
        <Github className="h-4 w-4" />
      </a>
    );
    if (project.linkweb) links.push(
      <a
        key="website"
        href={project.linkweb}
        aria-label="Voir mon projet Link"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2.5 rounded-full bg-white/90 backdrop-blur-sm text-gray-800 hover:bg-white hover:scale-110 hover:rotate-12 hover:text-black transition-all duration-200 shadow-lg"
        title="Website"
      >
        <ExternalLink className="h-4 w-4" />
      </a>
    );
    return links;
  };

  const displayedProjects = showAll ? tp.projectsListe : tp.projectsListe.slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="projects" className={`py-8 transition-colors duration-300 ${isDark ? 'bg-gray-800/50' : 'bg-gray-200'}`}>
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 mx-auto">
        <motion.div
          className="transition-all duration-1000"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <SectionTitle title={t.projects.title} subtitle={t.projects.subtitle} />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedProjects.map((project, index) => {
              const isExpanded = expandedProjects.has(index);
              const shouldTruncate = project.description.length > 100;
              return (
                <motion.div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2
                    ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-2xl hover:rotate-1`}
                  variants={itemVariants}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      loading="lazy"
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
                      <div className="flex gap-2">{renderLinks(project)}</div>
                    </div>
                  </div>

                  <div className="px-4 py-3">
                    <h3
                        className={`text-sm sm:text-base md:text-base lg:text-lg font-bold mb-1 transition-all duration-300 group-hover:translate-x-1
                          ${isDark ? 'text-white' : 'text-gray-900'}`}
                      >
                        {project.title}
                      </h3>

                    <div className="mb-3 space-y-2">
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
                      <p>{isExpanded || !shouldTruncate ? project.description : truncateText(project.description)}</p>
                      {shouldTruncate && (
                        <button
                          aria-label="View btn"
                          onClick={() => toggleExpanded(index)}
                          className={`mt-1 text-xs font-semibold hover:underline transition-colors duration-200
                            ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`}
                        >
                          {isExpanded ? t.projects.moins : t.projects.plus}
                        </button>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 cursor-default
                            hover:scale-110 hover:shadow-md
                            ${isDark
                              ? 'bg-gray-700 text-gray-300 hover:bg-blue-600 hover:text-white'
                              : 'bg-gray-100 text-gray-600 hover:bg-blue-500 hover:text-white'}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {tp.projectsListe.length > 3 && (
            <div className="mt-4 text-center">
              <motion.button
                aria-label="Voir plus/moins"
                onClick={() => setShowAll(!showAll)}
                className="group px-10 py-2 bg-gradient-to-r from-blue-600 to-blue-600 text-white rounded-3xl font-semibold shadow-xl shadow-blue-500/25 transition-all duration-300 hover:bg-blue-500"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {showAll ? t.projects.moins : t.projects.plus}
              </motion.button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
