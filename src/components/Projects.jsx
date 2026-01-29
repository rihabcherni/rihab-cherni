import { useState } from 'react';
import { Calendar, Github, ExternalLink, User, Building2, Briefcase, Filter } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';

const Projects = ({ t, tp, isDark, visibleSections }) => {
  const [expandedProjects, setExpandedProjects] = useState(new Set());
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
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

  // Get unique project types
  const projectTypes = ['all', ...new Set(tp.projectsListe.map(p => p.type))];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? tp.projectsListe 
    : tp.projectsListe.filter(project => project.type === activeFilter);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

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
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-5 mx-auto">
        <motion.div className="transition-all duration-1000" initial="hidden"
          animate={isVisible ? "visible" : "hidden"} variants={containerVariants}>
          <SectionTitle title={t.projects.title} subtitle={t.projects.subtitle} />

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {projectTypes.map((type) => (
              <motion.button
                key={type}
                onClick={() => {
                  setActiveFilter(type);
                  setShowAll(false); // Reset showAll when changing filter
                }}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 
                  ${activeFilter === type 
                    ? (isDark 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                      : 'bg-blue-500 text-white shadow-lg shadow-blue-500/30')
                    : (isDark 
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                      : 'bg-white text-gray-700 hover:bg-gray-100')
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Filter className="w-4 h-4" />
                {type === 'all' ? (t.projects.filterAll || 'All') : type}
              </motion.button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {displayedProjects.map((project, index) => {
              const isExpanded = expandedProjects.has(index);
              const shouldTruncate = project.description.length > 100;
              return (
                <motion.div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl transition-transform duration-300 transform
                    hover:-translate-y-2 
                    ${isDark 
                      ? 'hover:shadow-[0_30px_60px_rgba(99,102,241,0.15)] shadow-lg bg-gray-800' 
                      : 'hover:shadow-[0_30px_60px_rgba(59,130,246,0.2)] shadow-md bg-white'}`}
                  variants={itemVariants}
                  layout
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
                    <h3 className={`text-[15px] font-bold mb-1 transition-all duration-300 group-hover:translate-x-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {project.title}
                      </h3>

                    <div className="mb-3 space-y-2">
                      <div className="flex items-center gap-4 text-xs">
                        {project.type && (
                          <div className={`flex items-center gap-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                            <Briefcase className="w-2.5 h-2.5" />
                            <span className='text-[11px]'>{project.type}</span>
                          </div>
                        )}
                        {project.organisation && (
                          <div className={`flex items-center gap-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                            <Building2 className="w-2.5 h-2.5" />
                            <span className='text-[11px]'>{project.organisation}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className={`mb-2 text-sm leading-relaxed transition-colors duration-300
                      ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      <p className='text-[12px]'>{isExpanded || !shouldTruncate ? project.description : truncateText(project.description)}</p>
                      {shouldTruncate && (
                        <button aria-label="View btn" onClick={() => toggleExpanded(index)} className={`mt-1 text-xs font-semibold hover:underline transition-colors duration-200 ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`}>
                          {isExpanded ? t.projects.moins : t.projects.plus}
                        </button>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className={`px-2 py-1 rounded-full text-[10px] font-medium transition-all duration-300 cursor-default hover:scale-110 hover:shadow-md ${isDark ? 'bg-gray-700 text-white hover:bg-blue-600 hover:text-white' : 'bg-gray-100 text-gray-900 hover:bg-blue-500 hover:text-white'}`} >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filteredProjects.length > 4 && (
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

          {filteredProjects.length === 0 && (
            <div className={`text-center py-12 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              <p className="text-lg">{t.projects.noResults || 'Aucun projet trouvé pour ce filtre'}</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;