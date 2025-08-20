
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
  'Express.js': 'devicon-express-original colored',
  FastAPI: 'devicon-fastapi-plain colored',
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
