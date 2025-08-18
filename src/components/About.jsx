import React from 'react';
import { GraduationCap, Globe, Award } from 'lucide-react';

const About = ({ t, isDark, visibleSections }) => {

  const languages = [
    { lang: 'العربية', level: 'langue maternelle', progress: 100 },
    { lang: 'Français', level: 'intermédiaire', progress: 80 },
    { lang: 'English', level: 'intermediate', progress: 75 },
    { lang: 'Italiano', level: 'débutant', progress: 40 }
  ];

  const certifications = [
    'Fondamentaux de Scrum (Scrum Study)',
    'CCNA 1, 2 et 3 (Cisco)',
    'Introduction au Cloud (AWS Academy)',
    'Fondements ML (AWS Academy)'
  ];

  return (
    <section id="about" className={`py-20 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className={`transition-all duration-1000 ${
          visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
            {t.about.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed mb-6 text-gray-600 dark:text-gray-300">
                {t.about.description}
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-blue-500 animate-bounce" />
                  {t.about.education}
                </h3>
                <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-white'} shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1`}>
                  <h4 className="font-semibold">Diplôme d'ingénieur en informatique</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">ENSIT • 2022-2025</p>
                </div>
                <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-white'} shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1`}>
                  <h4 className="font-semibold">Licence en Informatique de Gestion</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">ESSECT • 2019-2022</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Globe className="h-6 w-6 text-blue-500 animate-spin" style={{animationDuration: '4s'}} />
                  {t.about.languages}
                </h3>
                <div className="space-y-3">
                  {languages.map((item, index) => (
                    <div key={index} className="group">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium group-hover:text-blue-500 transition-colors duration-300">{item.lang}</span>
                        <span className="text-sm text-gray-500">{item.level}</span>
                      </div>
                      <div className={`h-2 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'} overflow-hidden`}>
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: visibleSections.has('about') ? `${item.progress}%` : '0%', transitionDelay: `${index * 200}ms` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Award className="h-6 w-6 text-yellow-500 animate-bounce" />
                  {t.about.certifications}
                </h3>
                <div className="space-y-2">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-2 hover:bg-blue-50 dark:hover:bg-gray-700/50 p-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:translate-x-2">
                      <Award className="h-4 w-4 text-blue-500 animate-pulse" />
                      <span className="text-sm">{cert}</span>
                    </div>
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