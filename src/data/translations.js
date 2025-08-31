export const translations = {
  fr: {
    loading: {
      text: 'Chargement...'
    },
    nav: {
      home: 'Accueil',
      about: 'À propos',
      experience: 'Expérience',
      projects: 'Projets',
      skills: 'Compétences',
      certifications: 'Certifications',
      contact: 'Contact'
    },
    home: {
      welcome: 'Disponible pour du travail en freelance',
      title: 'Rihab Cherni',
      subtitle: 'Ingénieure en Informatique & Développeur Full-Stack',
      description: 'Spécialisée en Nouvelles Technologies et Sécurité, passionnée par le développement web, mobile et l\'intelligence artificielle.',
      cta: 'Voir Mon Travail',
      download: 'Télécharger CV',
      address:'Manouba, Tunisie'
    },
    about: {
      title: 'À Propos de Moi',
      subtitle: 'Découvrez la personne derrière le code',
      description: 'Ingénieure en génie informatique diplômée de l\'ENSIT, spécialisée en Nouvelles Technologies et Sécurité. Je suis à la recherche d\'un poste qui me permette de mettre à profit mes compétences techniques et de m\'investir pleinement dans des projets innovants.',
      education: 'Formation',
      certifications: 'Certifications',
      languages: 'Langues',
      langAr: "Arabe",
      levelAr: "Langue maternelle",
      langFr: "Français",
      levelFr: "Intermédiaire",
      langAng: "Anglais",
      levelAng: "Intermédiaire",
      langItalien: "Italien",
      levelItalien: "Débutant",
      specialization:"Spécialité",
      club:'Engagement Associatif',
      associations: [
        {
          role: "Chef de Projet",
          organization: "IEEE Computer Society ENSIT",
        },
        {
          role: "Membre",
          organization: "Club GEEKS ENSIT",
        },
        {
          role: "Membre",
          organization: "Club Android ESEN Manouba",
        },
        {
          role: "Membre",
          organization: "Croissant-Rouge Tunisien",
        }
      ], 
      school: [
        {
          "degree": "Diplôme d'ingénieur en génie informatique",
          "spec": "Nouvelles technologies et sécurité",
          "school": "École Nationale Supérieure des Ingénieurs de Tunis (ENSIT)",
          "period": "2022-2025"
        },
        {
          "degree": "Licence en Informatique de Gestion",
          "spec": "E-business",
          "school": "École Supérieure des Sciences Économiques et Commerciales de Tunis (ESSECT)",
          "period": "2019-2022"
        },
        {
          "degree": "Baccalauréat",
          "spec": "Mathématiques",
          "school": "Lycée Secondaire Mohamed Attaia, Khaznadar, Tunis",
          "period": "2019"
        }
      ]
    },
    certifications: {
      title: 'Mes Certifications',
      subtitle: 'Formations certifiantes complétées pour approfondir mes compétences techniques et méthodologiques',
      Skills:'Compétences',
      pdf:'Télécharger'
    },
    experience: {
      title: 'Expérience Professionnelle',
      subtitle: 'Un aperçu de mon parcours et de mes réalisations professionnelles',
      current: 'Actuel',
      present: 'Présent',
      plus:'Voir plus',
      moins:'Voir moins',
      listeExperiences: [
        {
            title: 'Stage PFE : Développeuse Web Full Stack',
            company: 'ADDINN Tunisie',
            location: 'Ariana, Tunisie',
            period: 'Février - Juin 2025',
            description:
              "Application web «AutoTest» pour automatiser les tests fonctionnels, de sécurité et SEO, avec détection de vulnérabilités, rapports, tableau de bord dynamique et notifications en temps réel via WebSocket (Slack, Jira, Gmail).",
            tech: [
              'FastAPI',
              'Angular',
              'PostgreSQL',
              'Docker',
              'GitLab',
              'WebSockets',
              'RabbitMQ',
              'Selenium',
              'BeautifulSoup',
              'ZAP',
              'Jira/Slack API'
            ],
            link: 'https://github.com/rihabcherni/pfe-Autotest'
          },
          {
            title: 'Stage Technicien : Développeuse Mobile',
            company: 'Société Nationale des Chemins de Fer Tunisiens (SNCFT)',
            location: 'Tunis, Tunisie',
            period: 'Juillet - Août 2024',
            description:
              "Conception et développement d'une application mobile pour la gestion du fret ferroviaire (itinéraires, ressources, suivi des horaires, réclamations, messagerie instantanée via WebSocket).",
            tech: ['Flutter', 'Node.js', 'Express.js', 'MongoDB', 'WebSockets', 'Trello', 'GitHub'],
            link: 'https://github.com/rihabcherni/sncft-mobile-app'
          },
          {
            title: 'Stage Ouvrier : Développeuse Web Full Stack MERN',
            company: 'IPACT Consult Inc.',
            location: 'Lac 2, Tunis, Tunisie',
            period: 'Juillet - Août 2023',
            description:
              'Développement, tests unitaires et déploiement de l’application de santé "NPWT" pour la gestion des soins par pression négative, incluant la détection des types de soins via un modèle IA. Réalisé en Scrum avec intégration continue via Jenkins et Docker.',
            tech: [
              'React.js',
              'Node.js',
              'Express.js',
              'MongoDB',
              'Bootstrap',
              'Jira',
              'Scrum',
              'Docker',
              'Jenkins',
              'FastAPI',
              'Mocha',
              'Chai'
            ],
            link: 'https://github.com/rihabcherni/stage-npwt'
          },
          {
            title: 'Stage PFE : Développeuse Web Full Stack',
            company: 'Reschool Education',
            location: 'Charguia 1, Tunisie',
            period: 'Février - Juin 2022',
            description:
              "Conception et développement de l'application web «RE-School Ecology» pour la gestion et collecte des déchets via des poubelles intelligentes dans les écoles, incluant suivi en temps réel, optimisation des itinéraires et sensibilisation écologique.",
            tech: ['React.js', 'Laravel', 'MUI', 'MySQL', 'UML', 'PHP', 'Figma', 'Jira'],
            link: 'https://github.com/rihabcherni/pfe-reSchool-ecology'
          },
          {
            title: "Stage d'été : Développeuse Web Front-end",
            company: 'DIGIT-U',
            location: 'Centre Golden Towers, Nord Urbain, Ariana, Tunisie',
            period: 'Juillet - Août 2021',
            description:
              'Développement de l’application web éducative «Alma» pour l’apprentissage en ligne (ressources, suivi de progression, quiz, évaluations, interactions enseignants-élèves). Utilisation de la méthode Scrum avec Jira.',
            tech: ['React.js', 'MUI', 'HTML', 'CSS', 'Zeplin', 'Jira', 'Scrum', 'Slack', 'Github'],
            link: 'https://github.com/rihabcherni/alma'
          }        
      ]
    },
    projects: {
      title: 'Projets',
      subtitle: 'Travaux pratiques et projets que j\'ai réalisés',
      view: 'Voir Projet',
      tech: 'Technologies',
      plus:'Voir plus',
      moins:'Voir moins',
    },
    skills: {
      title: 'Compétences',
      subtitle: 'Un ensemble de compétences techniques et outils maîtrisés',
      programming: 'Langages de Programmation',
      frontend: 'Développement Frontend',
      backend: 'Frameworks Backend',
      mobile: 'Développement Mobile',
      database: 'Bases de Données',
      tools: 'Outils & Environnements'
    },
    contact: {
      title: 'Contactez-Moi',
      subtitle: 'Je suis toujours intéressée par de nouvelles opportunités. N\'hésitez pas à me contacter !',
      titleForm: 'Envoyez-moi un message',
      placeholderName: 'Votre nom',
      placeholderEmail: 'votre@email.com',
      placeholderSubject: 'Sujet de votre message',
      placeholderMessage: 'Votre message ici...',
      send: 'Envoyer Message',
      emailTitle: 'Email',
      phoneTitle: 'Téléphone',
      locationTitle: 'Localisation',
    },
    footer: {
      footer: "© 2025 Rihab Cherni. Tous droits réservés."
    }
  },
  en: {
    loading: {
      text: 'Loading...'
    },
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      certifications: 'Certification',
      contact: 'Contact'
    },
    home: { 
      welcome: 'Available for freelance work', 
      title: 'Rihab Cherni', 
      subtitle: 'Computer Engineer & Full-Stack Developer', 
      description: 'Specialized in New Technologies and Security, passionate about web development, mobile development, and artificial intelligence.', 
      cta: 'View My Work', 
      download: 'Download CV',
      address:'Manouba, Tunisia'
    },
    about: {
      title: 'About Me',
      subtitle: 'Get to know the person behind the code',
      description: 'Computer Engineering graduate from ENSIT, specialized in New Technologies and Security. I am looking for a position that allows me to leverage my technical skills and fully invest in innovative projects.',
      education: 'Education',
      certifications: 'Certifications',
      languages: 'Languages',
      langAr: "Arabic",
      levelAr: "Native language",
      langFr: "French",
      levelFr: "Intermediate",
      langAng: "English",
      levelAng: "Intermediate",
      langItalien: "Italian",
      levelItalien: "Beginner",
      club:'Associative Involvement',
      specialization:"Specialization",
      associations: [
        {
          role: "Project Manager",
          organization: "IEEE Computer Society ENSIT",
        },
        {
          role: "Member",
          organization: "GEEKS ENSIT Club",
        },
        {
          role: "Member",
          organization: "Android Club ESEN Manouba",
        },
        {
          role: "Member",
          organization: "Tunisian Red Crescent",
        }
      ], 
      school: [
        {
          "degree": "Engineering Degree in Computer Engineering",
          "spec": "New Technologies and Security",
          "school": "National Higher School of Engineers of Tunis (ENSIT)",
          "period": "2022-2025"
        },
        {
          "degree": "Bachelor’s Degree in Management Information Systems",
          "spec": "E-business",
          "school": "Higher School of Economic and Commercial Sciences of Tunis (ESSECT)",
          "period": "2019-2022"
        },
        {
          "degree": "Baccalaureate",
          "spec": "Mathematics",
          "school": "Mohamed Attaia High School, Khaznadar, Tunis",
          "period": "2019"
        }
      ]
    },
    certifications: {
      title: 'My Certifications',
      subtitle: 'Completed certification trainings to deepen my technical and methodological skills',
      Skills:'Skills',
      pdf:'Download'
    },
    experience: {
      title: 'Professional Experience',
      subtitle: 'An overview of my career journey and achievements',
      current: 'Current',
      present: 'Present',
      plus:'Show more',
      moins:'Show less',
      listeExperiences: [
        {
          title: 'Final Year Internship: Full Stack Web Developer',
          company: 'ADDINN Tunisia',
          location: 'Ariana, Tunisia',
          period: 'February - June 2025',
          description:
            "Web application «AutoTest» to automate functional, security, and SEO tests, with vulnerability detection, reports, dynamic dashboard, and real-time notifications via WebSocket (Slack, Jira, Gmail).",
          tech: [
            'FastAPI',
            'Angular',
            'PostgreSQL',
            'Docker',
            'GitLab',
            'WebSockets',
            'RabbitMQ',
            'Selenium',
            'BeautifulSoup',
            'ZAP',
            'Jira/Slack API'
          ],
          link: 'https://github.com/rihabcherni/pfe-Autotest'
        },
        {
          title: 'Technician Internship: Mobile Developer',
          company: 'National Tunisian Railway Company (SNCFT)',
          location: 'Tunis, Tunisia',
          period: 'July - August 2024',
          description:
            "Design and development of a mobile application for freight management (routes, resources, schedule tracking, complaints, instant messaging via WebSocket).",
          tech: ['Flutter', 'Node.js', 'Express.js', 'MongoDB', 'WebSockets', 'Trello', 'GitHub'],
          link: 'https://github.com/rihabcherni/sncft-mobile-app'
        },
        {
          title: 'Practical Internship: MERN Full Stack Web Developer',
          company: 'IPACT Consult Inc.',
          location: 'Lac 2, Tunis, Tunisia',
          period: 'July - August 2023',
          description:
            'Development, unit testing, and deployment of the health application "NPWT" for negative pressure wound therapy management, including detection of therapy types using an AI model. Done with Scrum methodology and continuous integration via Jenkins and Docker.',
          tech: [
            'React.js',
            'Node.js',
            'Express.js',
            'MongoDB',
            'Bootstrap',
            'Jira',
            'Scrum',
            'Docker',
            'Jenkins',
            'FastAPI',
            'Mocha',
            'Chai'
          ],
          link: 'https://github.com/rihabcherni/stage-npwt'
        },
        {
          title: 'Final Year Internship: Full Stack Web Developer',
          company: 'Reschool Education',
          location: 'Charguia 1, Tunisia',
          period: 'February - June 2022',
          description:
            "Design and development of the web application «RE-School Ecology» for waste management and collection via smart bins in schools, including real-time tracking, route optimization, and environmental awareness.",
          tech: ['React.js', 'Laravel', 'MUI', 'MySQL', 'UML', 'PHP', 'Figma', 'Jira'],
          link: 'https://github.com/rihabcherni/pfe-reSchool-ecology'
        },
        {
          title: 'Summer Internship: Front-end Web Developer',
          company: 'DIGIT-U',
          location: 'Golden Towers Center, Urban North, Ariana, Tunisia',
          period: 'July - August 2021',
          description:
            'Development of the educational web application «Alma» for online learning (resources, progress tracking, quizzes, evaluations, teacher-student interactions). Used Scrum methodology with Jira.',
          tech: ['React.js', 'MUI', 'HTML', 'CSS', 'Zeplin', 'Jira', 'Scrum', 'Slack', 'Github'],
          link: 'https://github.com/rihabcherni/alma'
        }
      ]
    },
    projects: {
      title: 'Projects',
      subtitle: 'Practical work and projects I have completed',
      view: 'View Project',
      tech: 'Technologies',
      plus:'Show more',
      moins:'Show less',
    },
    skills: {
      title: 'Skills',
      subtitle: 'A set of mastered technical skills and tools',
      programming: 'Programming Languages',
      frontend: 'Frontend Development',
      backend: 'Backend Frameworks',
      mobile: 'Mobile Development',
      database: 'Databases',
      tools: 'Tools & Environments'
    },
    contact: {
      title: 'Contact Me',
      subtitle: 'I\'m always interested in new opportunities. Feel free to reach out!',
      titleForm: 'Send me a message',
      placeholderName: 'Your Name',
      placeholderEmail: 'your@email.com',
      placeholderSubject: 'Subject of your message',
      placeholderMessage: 'Your message here...',
      send: 'Send Message',
      emailTitle: 'Email',
      phoneTitle: 'Phone',
      locationTitle: 'Location'
    },
    footer: {
      footer: "© 2025 Rihab Cherni. All rights reserved." // English
    }
  },
  ar: {
    loading: {
      text: '...تحميل'
    },
    nav: {
      home: 'الرئيسية',
      about: 'نبذة عني',
      experience: 'الخبرة',
      projects: 'المشاريع',
      skills: 'المهارات',
      certifications: 'الشهادات',
      contact: 'اتصل بي'
    },
    certifications: {
      title: 'شهاداتي',
      subtitle: 'دورات تدريبية معتمدة أُنجزت لتعزيز مهاراتي التقنية والمنهجية',
      Skills:'المهارات',
      pdf:'تحميل'
    },
    home: {
      welcome: 'متاحة للعمل الحر', title: 'رحاب الشارني',
      subtitle: 'مهندسة معلوماتية ومطوّرة برمجيات',
      description: 'متخصصة في التقنيات الجديدة والأمن السيبراني، شغوفة بتطوير مواقع الويب والتطبيقات المحمولة والذكاء الاصطناعي.',
      cta: 'اطلع على أعمالي',
      download: 'تحميل السيرة الذاتية',
      address:'منوبة، تونس'
    },
    about: {
      title: 'نبذة عني',
      subtitle: 'تعرف على الشخص خلف الكود',
      description: 'مهندسة في الهندسة المعلوماتية متخرجة من المعهد الوطني العالي للمهندسين بتونس، متخصصة في التقنيات الجديدة والأمن. أبحث عن منصب يسمح لي بالاستفادة من مهاراتي التقنية والاستثمار بالكامل في مشاريع مبتكرة.',
      education: 'التعليم',
      certifications: 'الشهادات',
      languages: 'اللغات',
      langAr: "العربية",
      levelAr: "اللغة الأم",
      langFr: "الفرنسية",
      levelFr: "متوسط",
      langAng: "الإنجليزية",
      levelAng: "متوسط",
      langItalien: "الإيطالية",
      levelItalien: "مبتدئ",
      club:'الانخراط الجمعياتي',
      specialization:"التخصص",
      associations: [
        {
          role: "مديرة مشروع",
          organization: "IEEE Computer Society ENSIT",
        },
        {
          role: "عضوة",
          organization: "نادي GEEKS ENSIT",
        },
        {
          role: "عضوة",
          organization: "نادي Android ESEN منوبة",
        },
        {
          role: "عضوة",
          organization: "الهلال الأحمر التونسي",
        }
      ],
      school: [
        {
          "degree": "شهادة هندسة في هندسة الحاسوب",
          "spec": "التقنيات الحديثة والأمن السيبراني",
          "school": "المدرسة الوطنية العليا للمهندسين بتونس (ENSIT)",
          "period": "2022-2025"
        },
        {
          "degree": "شهادة البكالوريوس في نظم معلومات الإدارة",
          "spec": "الأعمال الإلكترونية",
          "school": "المدرسة العليا للعلوم الاقتصادية والتجارية بتونس (ESSECT)",
          "period": "2019-2022"
        },
        {
          "degree": "شهادة البكالوريا",
          "spec": "الرياضيات",
          "school": "ثانوية محمد عطية خزدار، تونس",
          "period": "2019"
        }
      ]
    },
    experience: {
      title: 'الخبرة المهنية',
      subtitle: 'نظرة عامة على مسيرتي المهنية وإنجازاتي',
      current: 'حالي',
      present: 'الحاضر',
      plus:'عرض المزيد',
      moins:'عرض أقل',
      listeExperiences:[
        {
          title: 'تدريب نهاية الدراسة: مطورة ويب Full Stack',
          company: 'ADDINN تونس',
          location: 'أريانة، تونس',
          period: 'فبراير - يونيو 2025',
          description:
            "تطبيق ويب «AutoTest» لأتمتة الاختبارات الوظيفية، الأمن وSEO، مع كشف الثغرات، التقارير، لوحة تحكم ديناميكية وإشعارات في الوقت الفعلي عبر WebSocket (Slack، Jira، Gmail).",
          tech: [
            'FastAPI',
            'Angular',
            'PostgreSQL',
            'Docker',
            'GitLab',
            'WebSockets',
            'RabbitMQ',
            'Selenium',
            'BeautifulSoup',
            'ZAP',
            'Jira/Slack API'
          ],
          link: 'https://github.com/rihabcherni/pfe-Autotest'
        },
        {
          title: 'تدريب فني: مطورة تطبيقات موبايل',
          company: 'الشركة الوطنية للسكك الحديدية التونسية (SNCFT)',
          location: 'تونس، تونس',
          period: 'يوليو - أغسطس 2024',
          description:
            "تصميم وتطوير تطبيق موبايل لإدارة النقل بالشاحنات (المسارات، الموارد، متابعة الجداول، الشكاوى، المراسلة الفورية عبر WebSocket).",
          tech: ['Flutter', 'Node.js', 'Express.js', 'MongoDB', 'WebSockets', 'Trello', 'GitHub'],
          link: 'https://github.com/rihabcherni/sncft-mobile-app'
        },
        {
          title: 'تدريب عملي: مطورة ويب MERN Full Stack',
          company: 'IPACT Consult Inc.',
          location: 'البحيرة 2، تونس، تونس',
          period: 'يوليو - أغسطس 2023',
          description:
            'تطوير، اختبار ونشر تطبيق الصحة "NPWT" لإدارة العلاجات بالضغط السلبي، مع كشف أنواع العلاج باستخدام نموذج ذكاء اصطناعي. تم العمل وفق منهجية Scrum مع تكامل مستمر عبر Jenkins وDocker.',
          tech: [
            'React.js',
            'Node.js',
            'Express.js',
            'MongoDB',
            'Bootstrap',
            'Jira',
            'Scrum',
            'Docker',
            'Jenkins',
            'FastAPI',
            'Mocha',
            'Chai'
          ],
          link: 'https://github.com/rihabcherni/stage-npwt'
        },
        {
          title: 'تدريب نهاية الدراسة: مطورة ويب Full Stack',
          company: 'Reschool Education',
          location: 'الشرقية 1، تونس',
          period: 'فبراير - يونيو 2022',
          description:
            "تصميم وتطوير تطبيق ويب «RE-School Ecology» لإدارة وجمع النفايات عبر صناديق ذكية في المدارس، مع متابعة في الوقت الحقيقي، تحسين المسارات وزيادة الوعي البيئي.",
          tech: ['React.js', 'Laravel', 'MUI', 'MySQL', 'UML', 'PHP', 'Figma', 'Jira'],
          link: 'https://github.com/rihabcherni/pfe-reSchool-ecology'
        },
        {
          title: 'تدريب صيفي: مطورة ويب Front-end',
          company: 'DIGIT-U',
          location: "مركز جولدن تاورز، أوربان نورث، أريانة، تونس",
          period: 'يوليو - أغسطس 2021',
          description:
            'تطوير تطبيق ويب تعليمي «Alma» للتعلم عن بعد (الموارد، متابعة التقدم، الاختبارات، التقييمات، التفاعل بين المعلمين والطلاب). استخدام Scrum مع Jira.',
          tech: ['React.js', 'MUI', 'HTML', 'CSS', 'Zeplin', 'Jira', 'Scrum', 'Slack', 'Github'],
          link: 'https://github.com/rihabcherni/alma'
        }
      ]
    },
    projects: {
      title: 'المشاريع',
      subtitle: 'الأعمال العملية والمشاريع التي أنجزتها',
      view: 'عرض المشروع',
      tech: 'التقنيات',
      plus:'عرض المزيد',
      moins:'عرض أقل',
    },
    skills: {
      title: 'المهارات',
      subtitle: 'مجموعة من المهارات التقنية والأدوات التي أتقنها',
      programming: 'لغات البرمجة',
      frontend: 'تطوير الواجهة الأمامية',
      backend: 'أطر العمل الخلفية',
      mobile: 'تطوير التطبيقات المحمولة',
      database: 'قواعد البيانات',
      tools: 'الأدوات والبيئات'
    },
    contact: {
      title: 'اتصل بي',
      subtitle: 'أنا مهتمة دائماً بالفرص الجديدة. لا تتردد في التواصل معي!',
      titleForm: 'أرسل لي رسالة',
      placeholderName: 'اسمك',
      placeholderEmail: 'بريدك الإلكتروني',
      placeholderSubject: 'موضوع رسالتك',
      placeholderMessage: 'رسالتك هنا...',
      send: 'إرسال رسالة',
      emailTitle: 'البريد الإلكتروني',
      phoneTitle: 'الهاتف',
      locationTitle: 'الموقع'
    },
    footer: {
      footer: "© 2025 رحاب الشارني. جميع الحقوق محفوظة."
    }
  }
};