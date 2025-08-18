
import { Phone, Mail, MapPin, Linkedin, Github, Facebook, Instagram } from "lucide-react";

export const techIconsClass = {
  'C/C++': 'devicon-c-plain colored',
  Java: 'devicon-java-plain colored',
  Python: 'devicon-python-plain colored',
  PHP: 'devicon-php-plain colored',
  'JavaScript': 'devicon-javascript-plain colored',
  'TypeScript': 'devicon-typescript-plain colored',
  HTML: 'devicon-html5-plain colored',
  CSS: 'devicon-css3-plain colored',
  'React.js': 'devicon-react-original colored',
  Angular: 'devicon-angularjs-plain colored',
  Bootstrap: 'devicon-bootstrap-plain colored',
  'Tailwind CSS': 'devicon-tailwindcss-plain colored',
  'Node.js': 'devicon-nodejs-plain colored',
  Express: 'devicon-express-original colored',
  Django: 'devicon-django-plain colored',
  Laravel: 'devicon-laravel-plain colored',
  'Spring Boot': 'devicon-spring-plain colored',
  Flutter: 'devicon-flutter-plain colored',
  Ionic: 'devicon-ionic-original colored',
  'Android SDK': 'devicon-android-plain colored',
  MySQL: 'devicon-mysql-plain colored',
  PostgreSQL: 'devicon-postgresql-plain colored',
  MongoDB: 'devicon-mongodb-plain colored',
  Firebase: 'devicon-firebase-plain colored',
  Git: 'devicon-git-plain colored',
  Docker: 'devicon-docker-plain colored',
  Jenkins: 'devicon-jenkins-plain colored',
  Postman: 'devicon-postman-plain colored',
  Linux: 'devicon-linux-plain colored',
  Unity: 'devicon-unity-plain colored',
};

export const skills = {
  programming: ['C/C++', 'Java', 'Python', 'PHP', 'JavaScript', 'TypeScript'],
  frontend: ['HTML', 'CSS', 'React.js', 'Angular', 'Bootstrap', 'Tailwind CSS'],
  backend: ['Node.js', 'Express.js', 'FastAPI', 'Django', 'Laravel', 'Spring Boot'],
  mobile: ['Flutter', 'Ionic', 'Android SDK'],
  database: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'],
  tools: ['Git', 'Docker', 'Jenkins', 'Postman', 'Linux', 'Unity']
};
export const experiences = [
  {
    title: 'Stage PFE: Développeuse Web Full Stack',
    company: 'ADDINN Tunisie',
    period: 'Février - Juin 2025',
    description: 'Conception et développement d\'une application web «AutoTest» pour l\'automatisation des tests fonctionnels, de sécurité et des analyses SEO.',
    tech: ['FastAPI', 'Angular', 'PostgreSQL', 'Docker', 'WebSockets']
  },
  {
    title: 'Stage Technicien: Développeuse Mobile',
    company: 'SNCFT',
    period: 'Juillet - Août 2024',
    description: 'Conception et réalisation d\'une application mobile pour la gestion du fret ferroviaire.',
    tech: ['Flutter', 'Node.js', 'MongoDB', 'WebSockets']
  },
  {
    title: 'Stage Ouvrier: Développeuse Web Full Stack',
    company: 'IPACT Consult Inc.',
    period: 'Juillet - Août 2023',
    description: 'Développement de l\'application de santé "NPWT" avec intégration d\'IA.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Docker', 'Jenkins']
  }
];
export const projects = [
  {
    title: 'AutoTest - Test Automation Platform',
    description: 'Application web pour l\'automatisation des tests de sécurité et analyses SEO',
    tech: ['FastAPI', 'Angular', 'PostgreSQL', 'Docker'],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop',
    gradient: 'from-red-600 to-pink-600'
  },
  {
    title: 'Smart School IoT Solution',
    description: 'Solution IoT pour écoles intelligentes avec gestion des salles et parking',
    tech: ['Flutter', 'Firebase', 'Arduino', 'IoT'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyZJZJM84-6dmUkZaLv0IXX2Ljm6HdFLOr1D-5K5CkWFRGJ8Oq9VtzTb1JBuvRDJCQpbY&usqp=CAU',
    gradient: 'from-green-600 to-blue-600'
  },
  {
    title: 'Music Classification System',
    description: 'Système de classification musicale avec ML/DL (SVM, CNN, VGG19)',
    tech: ['Python', 'TensorFlow', 'Flask', 'Docker'],
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    gradient: 'from-blue-600 to-indigo-600'
  },
  {
    title: 'NPWT Healthcare App',
    description: 'Application de santé pour la gestion des soins par pression négative avec IA',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Docker', 'Jenkins'],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    title: 'RE-School Ecology',
    description: 'Gestion et collecte des déchets via des poubelles intelligentes dans les écoles',
    tech: ['React.js', 'Laravel', 'MySQL', 'PHP'],
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop',
    gradient: 'from-green-600 to-teal-600'
  },
  {
    title: 'BeTrendy E-Commerce',
    description: 'Application mobile e-commerce avec panier, commandes et interaction vendeurs',
    tech: ['Ionic', 'Django', 'MongoDB', 'API RESTful'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    gradient: 'from-pink-600 to-rose-600'
  }
];
export const contactItems = [
  {
    icon: Phone,
    key: "phoneTitle",
    value: "+216 23 710 078",
  },
  {
    icon: Mail,
    key: "emailTitle",
    value: "cherni.rihab23@gmail.com",
  },
  {
    icon: MapPin,
    key: "locationTitle",
    value: "26 rue Ibn Sina, Denden, Manouba, تونس",
  },
];
export const socialLinks = [
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/rihab-cherni-864558374",
    color: "text-blue-600",
    lightBg: "bg-white hover:bg-blue-600",
    darkBg: "bg-gray-800 hover:bg-blue-600",
  },
  {
    icon: Github,
    href: "https://github.com/rihabcherni",
    color: "text-gray-700",
    lightBg: "bg-white hover:bg-gray-700",
    darkBg: "bg-gray-800 hover:bg-gray-600",
  },
  {
    icon: Mail,
    href: "mailto:cherni.rihab23@gmail.com",
    color: "text-red-600",
    lightBg: "bg-white hover:bg-red-600",
    darkBg: "bg-gray-800 hover:bg-red-600",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/rihab.cherni.161",
    color: "text-blue-600",
    lightBg: "bg-white hover:bg-blue-600",
    darkBg: "bg-gray-800 hover:bg-blue-700",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/rihabcherni8",
    color: "text-pink-600",
    lightBg: "bg-white hover:bg-pink-600",
    darkBg: "bg-gray-800 hover:bg-pink-600",
  },
];
