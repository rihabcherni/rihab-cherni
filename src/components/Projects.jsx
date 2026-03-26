import { useState, useEffect } from 'react';
import { Calendar, Github, ExternalLink, User, Building2, Briefcase, Filter, Trophy, GraduationCap, SlidersHorizontal, Info, Tag, X, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';

const Projects = ({ t, tp, isDark, visibleSections }) => {
  const [expandedProjects, setExpandedProjects] = useState(new Set());
  const [showAll, setShowAll] = useState(false);
  const [activeFilterKey, setActiveFilterKey] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const isVisible = visibleSections?.has('projects') ?? true;
  useEffect(() => {
    const keys = getProjectTypeKeys();
    if (!keys.includes(activeFilterKey)) {
      setActiveFilterKey('all');
    }
    setShowAll(false);
    setExpandedProjects(new Set());
  }, [tp]);

  useEffect(() => {
    setCarouselIndex(0);
  }, [selectedProject]);

  const toggleExpanded = (index) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(index)) newExpanded.delete(index);
    else newExpanded.add(index);
    setExpandedProjects(newExpanded);
  };

  const truncateText = (text, maxLength = 70) => text.length <= maxLength ? text : text.substring(0, maxLength) + '...';

  const getTypeKey = (type) => {
    if (type === 'all') return 'all';
    const tLower = String(type).toLowerCase();
    if (tLower.includes('competition') || tLower.includes('compétition') || tLower.includes('مسابقة')) return 'competition';
    if (tLower.includes('personal') || tLower.includes('personnel') || tLower.includes('شخصي')) return 'personal';
    if (tLower.includes('freelance') || tLower.includes('حر')) return 'freelance';
    if (tLower.includes('academic') || tLower.includes('acad') || tLower.includes('أكاديمي')) return 'academic';
    if (tLower.includes('competence') || tLower.includes('compétence')) return 'competence';
    return 'other';
  };

  const getFilterIconByKey = (key) => {
    if (key === 'all') return SlidersHorizontal;
    if (key === 'competition') return Trophy;
    if (key === 'academic') return GraduationCap;
    if (key === 'freelance') return Briefcase;
    if (key === 'personal') return User;
    return Filter;
  };

  const getProjectTypeKeys = () => {
    const keys = new Set(tp.projectsListe.map((p) => getTypeKey(p.type)));
    return ['all', ...Array.from(keys).filter((k) => k !== 'all')];
  };

  const getTypeCountByKey = (key) => {
    if (key === 'all') return tp.projectsListe.length;
    return tp.projectsListe.filter((p) => getTypeKey(p.type) === key).length;
  };

  const getDateValue = (date) => {
    if (!date) return 0;
    const text = String(date);
    const monthMap = {
      jan: 1, january: 1, 'janv': 1, 'Janvier': 1, 'jan.': 1,
      feb: 2, february: 2, fev: 2, 'févr': 2, 'Février': 2, 'fevr': 2, 'fevrier': 2,
      mar: 3, march: 3, mars: 3,
      apr: 4, april: 4, avr: 4, avril: 4,
      may: 5, mai: 5,
      jun: 6, june: 6, juin: 6,
      jul: 7, july: 7, juil: 7, juillet: 7,
      aug: 8, august: 8, 'août': 8, aout: 8,
      sep: 9, sept: 9, september: 9, septembre: 9,
      oct: 10, october: 10, octobre: 10,
      nov: 11, november: 11, novembre: 11,
      dec: 12, december: 12, decembre: 12, 'déc': 12, 'Décembre': 12, 'dec.': 12,
      'جانفي': 1, 'فيفري': 2, 'مارس': 3, 'أفريل': 4, 'افريل': 4,
      'ماي': 5, 'جوان': 6, 'جويلية': 7, 'أوت': 8, 'اوت': 8,
      'سبتمبر': 9, 'أكتوبر': 10, 'اكتوبر': 10, 'نوفمبر': 11, 'ديسمبر': 12
    };

    const years = text.match(/\b(19|20)\d{2}\b/g) || [];
    const maxYear = years.length ? Math.max(...years.map((y) => parseInt(y, 10))) : 0;

    const lowered = text.toLowerCase();
    let maxMonth = 0;
    Object.keys(monthMap).forEach((key) => {
      if (lowered.includes(key)) {
        if (monthMap[key] > maxMonth) maxMonth = monthMap[key];
      }
    });

    if (maxYear) {
      return maxYear * 12 + (maxMonth || 12);
    }

    return maxMonth;
  };

  const renderLinks = (project) => {
    const links = [];
    if (project.link) links.push(
      <a
        key="github"
        href={project.link}
        aria-label="Voir mon projet GitHub"
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
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
        onClick={(e) => e.stopPropagation()}
        className="p-2.5 rounded-full bg-white/90 backdrop-blur-sm text-gray-800 hover:bg-white hover:scale-110 hover:rotate-12 hover:text-black transition-all duration-200 shadow-lg"
        title="Website"
      >
        <ExternalLink className="h-4 w-4" />
      </a>
    );
    return links;
  };

  const projectTypeKeys = getProjectTypeKeys();
  const filteredProjects = activeFilterKey === 'all'
    ? tp.projectsListe
    : tp.projectsListe.filter(project => getTypeKey(project.type) === activeFilterKey);

  const sortedProjects = [...filteredProjects].sort((a, b) => getDateValue(b.date) - getDateValue(a.date));
  const displayedProjects = showAll ? sortedProjects : sortedProjects.slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="projects" className={`py-8 md:py-12 transition-colors duration-300 ${isDark ? 'bg-gray-800/50' : 'bg-gray-200'}`}>
      <div className="px-5 sm:px-6 md:px-12 lg:px-10 xl:px-5 mx-auto">
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4" onClick={() => setSelectedProject(null)}>
            <div
              className={`w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`flex items-start justify-between gap-4 px-8 py-6 ${isDark ? 'bg-gray-800/80' : 'bg-gray-100'}`}>
                <div>
                  <h3 className="text-xl font-bold">{selectedProject.title}</h3>
                  {selectedProject.organisation && (
                    <p className={`text-sm mt-2 flex items-center gap-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      <Building2 className="h-5 w-5" />
                      {selectedProject.organisation}
                    </p>
                  )}
                </div>
                <button
                  aria-label="Close"
                  onClick={() => setSelectedProject(null)}
                  className={`rounded-full p-2 transition-colors bg-red-500 ${isDark ? 'hover:bg-red-700' : 'hover:bg-red-600'}`}
                >
                  <X className="h-5 w-5 text-white"/>
                </button>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    {(() => {
                      const images = Array.isArray(selectedProject.images) && selectedProject.images.length > 0
                        ? selectedProject.images
                        : (selectedProject.image ? [selectedProject.image] : []);
                      if (images.length === 0) return null;
                      return (
                        <div className="flex flex-col gap-3">
                          <div className={`relative overflow-hidden rounded-xl h-64 md:h-65 lg:h-65 flex items-center justify-center ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
                            <img
                              src={images[carouselIndex]}
                              alt={`${selectedProject.title} ${carouselIndex + 1}`}
                              className="w-full h-auto max-h-full object-contain"
                            />
                            {images.length > 1 && (
                              <>
                                <button
                                  aria-label="Previous image"
                                  onClick={() => setCarouselIndex((i) => (i - 1 + images.length) % images.length)}
                                  className={`absolute left-3 top-1/2 -translate-y-1/2 rounded-full p-2 shadow-lg transition-colors ${isDark ? 'bg-gray-900/70 text-white hover:bg-gray-900' : 'bg-white/80 text-gray-900 hover:bg-white'}`}
                                >
                                  <ChevronLeft className="h-5 w-5" />
                                </button>
                                <button
                                  aria-label="Next image"
                                  onClick={() => setCarouselIndex((i) => (i + 1) % images.length)}
                                  className={`absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 shadow-lg transition-colors ${isDark ? 'bg-gray-900/70 text-white hover:bg-gray-900' : 'bg-white/80 text-gray-900 hover:bg-white'}`}
                                >
                                  <ChevronRight className="h-5 w-5" />
                                </button>
                              </>
                            )}
                          </div>
                          {images.length > 1 && (
                            <div className="flex justify-center gap-2">
                              {images.map((_, idx) => (
                                <button
                                  key={idx}
                                  aria-label={`Go to image ${idx + 1}`}
                                  onClick={() => setCarouselIndex(idx)}
                                  className={`h-2.5 w-2.5 rounded-full transition-all ${idx === carouselIndex
                                    ? (isDark ? 'bg-white' : 'bg-gray-900')
                                    : (isDark ? 'bg-white/40 hover:bg-white/70' : 'bg-gray-900/30 hover:bg-gray-900/50')}`}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })()}
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4 text-xs">
                      {selectedProject.date && (
                        <span className={`px-3 py-1 rounded-full inline-flex items-center gap-1.5 ${isDark ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-700'}`}>
                          <Calendar className="h-3 w-3" />
                          {selectedProject.date}
                        </span>
                      )}
                    {selectedProject.type && (
                      <span className={`px-3 py-1 rounded-full inline-flex items-center gap-1.5 ${isDark ? 'bg-blue-500/20 text-blue-200' : 'bg-blue-100 text-blue-800'}`}>
                        {(() => {
                          const TypeIcon = getFilterIconByKey(getTypeKey(selectedProject.type));
                          return <TypeIcon className="h-3 w-3" />;
                        })()}
                        {selectedProject.type}
                      </span>
                    )}
                    </div>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                      {selectedProject.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {selectedProject.tech?.map((tech, idx) => (
                        <span key={idx} className={`px-2 py-1 rounded-full text-[11px] font-medium ${isDark ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-700'}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3 mt-5">
                      {selectedProject.link && (
                        <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className={`px-4 py-2 rounded-lg text-sm font-semibold inline-flex items-center gap-2 ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}>
                          <Github className="h-4 w-4" />
                          GitHub
                        </a>
                      )}
                    {selectedProject.linkweb && (
                      <a href={selectedProject.linkweb} target="_blank" rel="noopener noreferrer" className={`px-4 py-2 rounded-lg text-sm font-semibold inline-flex items-center gap-2 ${isDark ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'bg-blue-600 hover:bg-blue-500 text-white'}`}>
                        <ExternalLink className="h-4 w-4" />
                        {t.projects.live || 'Demo'}
                      </a>
                    )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <motion.div className="transition-all duration-1000" initial="hidden"
          animate={isVisible ? "visible" : "hidden"} variants={containerVariants}>
          <SectionTitle title={t.projects.title} subtitle={t.projects.subtitle} />
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            {projectTypeKeys.map((key) => (
              <motion.button
                key={key}
                onClick={() => {
                  setActiveFilterKey(key);
                  setShowAll(false); 
                }}
                className={`px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 sm:gap-2 whitespace-nowrap 
                  ${activeFilterKey === key 
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
                {(() => {
                  const Icon = getFilterIconByKey(key);
                  return <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
                })()}
                {key === 'all' ? (t.projects.filterAll || 'All') : (t.projects.filters?.[key] || key)}
                {activeFilterKey === key && (
                  <span className={`ml-1 px-1.5 sm:px-2 py-0.5 rounded-full text-[9px] sm:text-[12px] font-bold text-white ${isDark ? 'bg-white/20' : 'bg-black/10'}`}>
                    {getTypeCountByKey(key)}
                  </span>
                )}
              </motion.button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-5 lg:flex lg:flex-wrap lg:justify-center">
            {displayedProjects.map((project, index) => {
              const isExpanded = expandedProjects.has(index);
              const shouldTruncate = project.description.length > 100;
              return (
                <motion.div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl transition-transform duration-300 transform lg:w-[calc(25%-1.25rem)]
                    hover:-translate-y-2 
                    ${isDark 
                      ? 'hover:shadow-[0_30px_60px_rgba(99,102,241,0.15)] shadow-lg bg-gray-800' 
                      : 'hover:shadow-[0_30px_60px_rgba(59,130,246,0.2)] shadow-md bg-white'}`}
                  variants={itemVariants}
                  layout
                >
                  <div className="relative h-44 overflow-hidden">
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
                      <div className="flex gap-2">
                        {renderLinks(project)}
                      </div>
                    </div>
                  </div>

                  <div className="px-4 py-3">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className={`text-[15px] font-bold mb-1 transition-all duration-300 group-hover:translate-x-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {project.title}
                      </h3>
                      <button
                        aria-label="View details"
                        onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                        className={`p-2 rounded-full transition-all duration-200 hover:scale-110 ${isDark ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        title="Details"
                      >
                        <Info className="h-4 w-4" />
                      </button>
                    </div>

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
                        <button aria-label="View btn" onClick={(e) => { e.stopPropagation(); toggleExpanded(index); }} className={`mt-1 text-xs font-semibold hover:underline transition-colors duration-200 ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`}>
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
