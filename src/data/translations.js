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
      projectsListe:[
        {
          title: 'Application Web Portfolio Personnel',
          description:
            'Application web de portfolio personnel responsive et multilingue, développée avec React.js, Tailwind CSS et Framer Motion, présentant projets, compétences, expériences et certifications.',
          tech: ['React.js', 'Tailwind CSS', 'Framer Motion', 'EmailJS', 'Lucide React', 'React Icons'],
          link: 'https://rihab-cherni.vercel.app/',
          date: '2025',
          role: 'Développeuse Web Full-Stack',
          type: 'Projet Personnel',
          organisation: 'Moi-même',
          image: 'projects/portfolio.PNG',
          gradient: 'from-blue-300 to-indigo-100',
        },
        {
          title: 'Solution IoT Smart School',
          description:
            'Solution IoT "Smart School" comprenant des classes intelligentes et un parking intelligent pour la gestion en temps réel des infrastructures scolaires (présence, stationnement).',
          tech: [
            'Flutter',
            'Firebase',
            'Arduino UNO',
            'DHT11',
            'RFID',
            'Capteurs IoT',
            'Module WiFi',
            'LCD',
          ],
          link: 'https://github.com/rihabcherni/IOT-Smart-School',
          date: 'Nov - Déc 2024',
          role: 'Développeuse IoT',
          type: 'Projet académique',
          organisation: 'ENSIT',
          image: 'projects/iot-smart.png',
          gradient: 'from-blue-300 to-blue-100',
        },
        {
          title: 'Système de Classification Musicale',
          description:
            'Développement et déploiement d’un système de classification musicale combinant ML/DL (SVM, VGG19, CNN) avec extraction de caractéristiques audio (Mel-spectrogrammes), évaluation via GTZAN, services web Flask, Docker Compose et Jenkins.',
          tech: ['Python', 'TensorFlow', 'Flask', 'Docker', 'SVM', 'CNN', 'VGG19', 'Jenkins'],
          link: 'https://github.com/rihabcherni/Docker-Music-Genre-Classification',
          date: 'Nov - Déc 2024',
          role: 'Data Scientist',
          type: 'Projet académique',
          organisation: 'ENSIT',
          image: 'projects/music.jpg',
          gradient: 'from-green-300 to-green-100',
        },
        {
          title: 'Application Mobile E-learning Accessible',
          description:
            'Conception et développement d’une application mobile d’apprentissage en ligne (E-learning) destinée aux personnes malvoyantes et non-voyantes, centrée sur l’accessibilité.',
          tech: ['Flutter', 'Django', 'MongoDB', 'Postman', 'UML', 'GitHub', 'Jira', 'Draw.io'],
          link: 'https://github.com/rihabcherni/pfa2-Nawerny-E-learning',
          date: 'Jan - Avr 2024',
          role: 'Développeuse Mobile',
          type: 'Projet académique',
          organisation: 'ENSIT',
          image: 'projects/e-learning.png',
          gradient: 'from-orange-300 to-yellow-100',
        },
        {
          title: 'BeTrendy E-Commerce',
          description:
            'Application mobile e-commerce "BeTrendy" avec navigation, filtrage, gestion du panier, commandes et suivi des livraisons.',
          tech: ['Ionic', 'Django', 'MongoDB', 'API RESTful', 'JWT'],
          link: 'https://github.com/rihabcherni/BeTrendy-mobile-app',
          date: 'Jan - Avr 2024',
          role: 'Développeuse Full-Stack',
          type: 'Projet académique',
          organisation: 'ENSIT',
          image: 'projects/be-trendy.png',
          gradient: 'from-pink-300 to-rose-100',
        },
        {
          title: 'Application de Gestion de Bibliothèque',
          description:
            'Application de bureau pour la gestion d’une bibliothèque (prêts, retours, gestion des livres).',
          tech: ['Java', 'JavaFX', 'MySQL', 'Scene Builder'],
          link: 'https://github.com/rihabcherni/libraTech',
          date: 'Nov - Déc 2023',
          role: 'Développeuse Desktop',
          type: 'Projet académique',
          organisation: 'ENSIT',
          image: 'projects/libraTech.png',
          gradient: 'from-purple-300 to-pink-100',
        },
        {
          title: 'Application Web de Gestion d’Énergie',
          description:
            'Application web de gestion d’énergie avec compteurs intelligents, suivi de consommation et statistiques. Modélisation Merise (Entité-Association).',
          tech: ['React.js', 'Laravel', 'Chart.js', 'MySQL', 'Postman'],
          link: 'https://github.com/rihabcherni/pfa1-smart-watts',
          date: 'Jan - Avr 2023',
          role: 'Développeuse Full-Stack',
          type: 'Projet académique',
          organisation: 'ENSIT',
          image: 'projects/pfa1.png',
          gradient: 'from-blue-300 to-teal-100',
        },
        {
          title: 'Site Web IEEE RAS Tunisia Conference (RTC)',
          description:
            'Développement du site web officiel de l’événement IEEE RAS Tunisia Conference (RTC), présentant les informations clés, intervenants, programme et formulaire d’inscription en ligne.',
          tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap'],
          link: 'https://github.com/rihabcherni/ieee-ras-event',
          date: 'Août 2025',
          role: 'Développeuse Web Full-Stack',
          type: 'Projet Freelance',
          organisation: 'IEEE RAS Tunisia',
          image: 'projects/rtc/1.PNG',
          gradient: 'from-red-300 to-orange-100',
        },
        {
          title: 'Site Web & Jeux IEEE ENSIT',
          description:
            'Développement et maintenance du site IEEE ENSIT, création de jeux éducatifs (dactylographie, pendu, mémoire).',
          tech: ['Angular', 'PHP', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'MUI', 'MySQL', 'MongoDB'],
          linkweb: 'https://ensit.ieee.tn/',
          date: '2023 - 2025',
          role: 'Développeuse Web & Chef de Projet',
          type: 'Projet Freelance',
          organisation: 'IEEE ENSIT',
          image: 'projects/ieee.PNG',
          gradient: 'from-indigo-300 to-purple-100',
        },
      ]
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
      projectsListe: [
        {
          title: 'Personal Portfolio Web Application',
          description:
            'A responsive, multilingual personal portfolio web application built with React.js, Tailwind CSS, and Framer Motion, showcasing projects, skills, experience, and certifications.',
          tech: ['React.js', 'Tailwind CSS', 'Framer Motion', 'EmailJS', 'Lucide React', 'React Icons'],
          link: 'https://rihab-cherni.vercel.app/',
          date: '2025',
          role: 'Full-Stack Web Developer',
          type: 'Personal Project',
          organisation: 'Self',
          image: 'projects/portfolio.PNG',
          gradient: 'from-blue-300 to-indigo-100',
        },
        {
          title: 'Smart School IoT Solution',
          description:
            'IoT "Smart School" solution including smart classrooms and smart parking for real-time school infrastructure management (attendance, parking).',
          tech: [
            'Flutter',
            'Firebase',
            'Arduino UNO',
            'DHT11',
            'RFID',
            'IoT Sensors',
            'WiFi Module',
            'LCD',
          ],
          link: 'https://github.com/rihabcherni/IOT-Smart-School',
          date: 'Nov - Dec 2024',
          role: 'IoT Developer',
          type: 'Academic Project',
          organisation: 'ENSIT',
          image: 'projects/iot-smart.png',
          gradient: 'from-blue-300 to-blue-100',
        },
        {
          title: 'Music Classification System',
          description:
            'Development and deployment of a music classification system combining ML/DL (SVM, VGG19, CNN) with audio feature extraction (Mel-spectrograms), evaluation via GTZAN, Flask web services, Docker Compose, and Jenkins.',
          tech: ['Python', 'TensorFlow', 'Flask', 'Docker', 'SVM', 'CNN', 'VGG19', 'Jenkins'],
          link: 'https://github.com/rihabcherni/Docker-Music-Genre-Classification',
          date: 'Nov - Dec 2024',
          role: 'Data Scientist',
          type: 'Academic Project',
          organisation: 'ENSIT',
          image: 'projects/music.jpg',
          gradient: 'from-green-300 to-green-100',
        },
        {
          title: 'E-learning Mobile App Accessibility',
          description:
            'Design and development of a mobile e-learning application for visually impaired and blind users, focused on accessibility.',
          tech: ['Flutter', 'Django', 'MongoDB', 'Postman', 'UML', 'GitHub', 'Jira', 'Draw.io'],
          link: 'https://github.com/rihabcherni/pfa2-Nawerny-E-learning',
          date: 'Jan - Apr 2024',
          role: 'Mobile Developer',
          type: 'Academic Project',
          organisation: 'ENSIT',
          image: 'projects/e-learning.png',
          gradient: 'from-orange-300 to-yellow-100',
        },
        {
          title: 'BeTrendy E-Commerce',
          description:
            'Mobile e-commerce application "BeTrendy" with navigation, filtering, cart management, orders, and delivery tracking.',
          tech: ['Ionic', 'Django', 'MongoDB', 'RESTful API', 'JWT'],
          link: 'https://github.com/rihabcherni/BeTrendy-mobile-app',
          date: 'Jan - Apr 2024',
          role: 'Full-Stack Developer',
          type: 'Academic Project',
          organisation: 'ENSIT',
          image: 'projects/be-trendy.png',
          gradient: 'from-pink-300 to-rose-100',
        },
        {
          title: 'Library Management App',
          description:
            'Desktop application for library management (loans, returns, book inventory).',
          tech: ['Java', 'JavaFX', 'MySQL', 'Scene Builder'],
          link: 'https://github.com/rihabcherni/libraTech',
          date: 'Nov - Dec 2023',
          role: 'Desktop Developer',
          type: 'Academic Project',
          organisation: 'ENSIT',
          image: 'projects/libraTech.png',
          gradient: 'from-purple-300 to-pink-100',
        },
        {
          title: 'Energy Management Web App',
          description:
            'Web application for energy management with smart meters, consumption monitoring, and statistics. Modeled using Merise (Entity-Relationship).',
          tech: ['React.js', 'Laravel', 'Chart.js', 'MySQL', 'Postman'],
          link: 'https://github.com/rihabcherni/pfa1-smart-watts',
          date: 'Jan - Apr 2023',
          role: 'Full-Stack Developer',
          type: 'Academic Project',
          organisation: 'ENSIT',
          image: 'projects/pfa1.png',
          gradient: 'from-blue-300 to-teal-100',
        },
        {
          title: 'IEEE RAS Tunisia Conference (RTC) Website',
          description:
            'Development of the official IEEE RAS Tunisia Conference (RTC) website, presenting key information, speakers, program, and online registration form.',
          tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap'],
          link: 'https://github.com/rihabcherni/ieee-ras-event',
          date: 'Aug 2025',
          role: 'Full-Stack Web Developer',
          type: 'Freelance Project',
          organisation: 'IEEE RAS Tunisia',
          image: 'projects/rtc/1.PNG',
          gradient: 'from-red-300 to-orange-100',
        },
        {
          title: 'IEEE ENSIT Website & Games',
          description:
            'Development and maintenance of the IEEE ENSIT website, including creation of educational games (typing, hangman, memory).',
          tech: ['Angular', 'PHP', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'MUI', 'MySQL', 'MongoDB'],
          linkweb: 'https://ensit.ieee.tn/',
          date: '2023 - 2025',
          role: 'Web Developer & Project Manager',
          type: 'Freelance Project',
          organisation: 'IEEE ENSIT',
          image: 'projects/ieee.PNG',
          gradient: 'from-indigo-300 to-purple-100',
        },
      ]
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
      projectsListe: [
        {
          title: 'تطبيق ويب للملف الشخصي الشخصي',
          description:
            'تطبيق ويب للملف الشخصي الشخصي متجاوب ومتعدد اللغات، تم تطويره باستخدام React.js وTailwind CSS وFramer Motion، يعرض المشاريع، المهارات، الخبرات والشهادات.',
          tech: ['React.js', 'Tailwind CSS', 'Framer Motion', 'EmailJS', 'Lucide React', 'React Icons'],
          link: 'https://rihab-cherni.vercel.app/',
          date: '2025',
          role: 'مطور ويب Full-Stack',
          type: 'مشروع شخصي',
          organisation: 'مشروع شخصي',
          image: 'projects/portfolio.PNG',
          gradient: 'from-blue-300 to-indigo-100',
        },
        {
          title: 'حل IoT للمدرسة الذكية',
          description:
            'حل IoT "المدرسة الذكية" يتضمن فصولًا ذكية وموقف سيارات ذكي لإدارة البنية التحتية المدرسية في الوقت الفعلي (الحضور، مواقف السيارات).',
          tech: [
            'Flutter',
            'Firebase',
            'Arduino UNO',
            'DHT11',
            'RFID',
            'حساسات IoT',
            'وحدة WiFi',
            'LCD',
          ],
          link: 'https://github.com/rihabcherni/IOT-Smart-School',
          date: 'نوفمبر - ديسمبر 2024',
          role: 'مطور IoT',
          type: 'مشروع أكاديمي',
          organisation: 'ENSIT',
          image: 'projects/iot-smart.png',
          gradient: 'from-blue-300 to-blue-100',
        },
        {
          title: 'نظام تصنيف الموسيقى',
          description:
            'تطوير ونشر نظام تصنيف موسيقي يجمع بين ML/DL (SVM، VGG19، CNN) مع استخراج خصائص الصوت (Mel-spectrograms)، التقييم باستخدام GTZAN، خدمات ويب Flask، Docker Compose وJenkins.',
          tech: ['Python', 'TensorFlow', 'Flask', 'Docker', 'SVM', 'CNN', 'VGG19', 'Jenkins'],
          link: 'https://github.com/rihabcherni/Docker-Music-Genre-Classification',
          date: 'نوفمبر - ديسمبر 2024',
          role: 'عالم بيانات',
          type: 'مشروع أكاديمي',
          organisation: 'ENSIT',
          image: 'projects/music.jpg',
          gradient: 'from-green-300 to-green-100',
        },
        {
          title: 'تطبيق تعليم إلكتروني متاح للجميع',
          description:
            'تصميم وتطوير تطبيق تعليم إلكتروني على الهاتف المحمول مخصص للأشخاص ضعاف البصر وغير المبصرين، مع التركيز على الوصولية.',
          tech: ['Flutter', 'Django', 'MongoDB', 'Postman', 'UML', 'GitHub', 'Jira', 'Draw.io'],
          link: 'https://github.com/rihabcherni/pfa2-Nawerny-E-learning',
          date: 'يناير - أبريل 2024',
          role: 'مطور تطبيقات الهاتف المحمول',
          type: 'مشروع أكاديمي',
          organisation: 'ENSIT',
          image: 'projects/e-learning.png',
          gradient: 'from-orange-300 to-yellow-100',
        },
        {
          title: 'تطبيق BeTrendy للتجارة الإلكترونية',
          description:
            'تطبيق تجارة إلكترونية على الهاتف المحمول "BeTrendy" مع التنقل، الفلترة، إدارة السلة، الطلبات وتتبع الشحنات.',
          tech: ['Ionic', 'Django', 'MongoDB', 'API RESTful', 'JWT'],
          link: 'https://github.com/rihabcherni/BeTrendy-mobile-app',
          date: 'يناير - أبريل 2024',
          role: 'مطور Full-Stack',
          type: 'مشروع أكاديمي',
          organisation: 'ENSIT',
          image: 'projects/be-trendy.png',
          gradient: 'from-pink-300 to-rose-100',
        },
        {
          title: 'تطبيق إدارة المكتبة',
          description:
            'تطبيق سطح مكتب لإدارة المكتبة (الإعارة، الإرجاع، إدارة الكتب).',
          tech: ['Java', 'JavaFX', 'MySQL', 'Scene Builder'],
          link: 'https://github.com/rihabcherni/libraTech',
          date: 'نوفمبر - ديسمبر 2023',
          role: 'مطور تطبيقات سطح المكتب',
          type: 'مشروع أكاديمي',
          organisation: 'ENSIT',
          image: 'projects/libraTech.png',
          gradient: 'from-purple-300 to-pink-100',
        },
        {
          title: 'تطبيق ويب لإدارة الطاقة',
          description:
            'تطبيق ويب لإدارة الطاقة مع عدادات ذكية، تتبع الاستهلاك والإحصائيات. تصميم Merise (كيان-علاقة).',
          tech: ['React.js', 'Laravel', 'Chart.js', 'MySQL', 'Postman'],
          link: 'https://github.com/rihabcherni/pfa1-smart-watts',
          date: 'يناير - أبريل 2023',
          role: 'مطور Full-Stack',
          type: 'مشروع أكاديمي',
          organisation: 'ENSIT',
          image: 'projects/pfa1.png',
          gradient: 'from-blue-300 to-teal-100',
        },
        {
          title: 'موقع مؤتمر IEEE RAS تونس (RTC)',
          description:
            'تطوير الموقع الرسمي لمؤتمر IEEE RAS تونس (RTC)، يعرض المعلومات الرئيسية، المتحدثين، البرنامج ونموذج التسجيل عبر الإنترنت.',
          tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap'],
          link: 'https://github.com/rihabcherni/ieee-ras-event',
          date: 'أغسطس 2025',
          role: 'مطور ويب Full-Stack',
          type: 'مشروع حر',
          organisation: 'IEEE RAS تونس',
          image: 'projects/rtc/1.PNG',
          gradient: 'from-red-300 to-orange-100',
        },
        {
          title: 'موقع IEEE ENSIT وألعاب تعليمية',
          description:
            'تطوير وصيانة موقع IEEE ENSIT، وإنشاء ألعاب تعليمية (الكتابة السريعة، لعبة الرجل المشنوق، الذاكرة).',
          tech: ['Angular', 'PHP', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'MUI', 'MySQL', 'MongoDB'],
          linkweb: 'https://ensit.ieee.tn/',
          date: '2023 - 2025',
          role: 'مطور ويب ومدير مشروع',
          type: 'مشروع حر',
          organisation: 'IEEE ENSIT',
          image: 'projects/ieee.PNG',
          gradient: 'from-indigo-300 to-purple-100',
        },
      ]
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