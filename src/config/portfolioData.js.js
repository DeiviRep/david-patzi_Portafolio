// config/portfolioData.js
import PosgreIcon from "../img/iconos/bd/postgre-sql.png";
import MongoIcon from "../img/iconos/bd/mongodb.png";
import HtmlIcon from "../img/iconos/lenguajes/html.svg?react";
import JsIcon from "../img/iconos/lenguajes/javascript.png";
import CssIcon from "../img/iconos/lenguajes/css.svg?react";
import PythonIcon from "../img/iconos/lenguajes/python.png";
import ReactIcon from "../img/iconos/frameworks/react.png";
import LaravelIcon from "../img/iconos/frameworks/laravel.png";
import FlutterIcon from "../img/iconos/frameworks/flutter.png";
import AndroidIcon from "../img/iconos/frameworks/Android.svg?react";
import NodejsIcon from "../img/iconos/librerias/nodejs.svg?react";
import GithubIcon from "../img/iconos/otros/github.svg?react";
import GitIcon from "../img/iconos/otros/git.svg?react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from '@mui/icons-material/Description';
// Technology Icons
export const technologyIcons = [
  {
    bd: [
      { name: "PostgreSQL", img: PosgreIcon },
      { name: "MongoDB", img: MongoIcon },
    ],
    lenguaje: [
      { name: "JavaScript", img: JsIcon },
      { name: "HTML", img: HtmlIcon },
      { name: "CSS", img: CssIcon },
      { name: "Python", img: PythonIcon },
    ],
    framework: [
      { name: "React", img: ReactIcon },
      { name: "Flutter", img: FlutterIcon },
      { name: "Laravel", img: LaravelIcon },
      { name: "android", img: AndroidIcon },
    ],
    lib: [
      { name: "Node.js", img: NodejsIcon },
    ],
    editores: [
      { name: "GitHub", img: GithubIcon },
      { name: "Git", img: GitIcon },
    ],
  },
];

// Project Images
export const projectImages = {
  cars: require("../img/proyectos/cars.jpg"),
  yatic: require("../img/proyectos/yatic.png"),
  empresaMia: require("../img/proyectos/empresaMia.avif"),
  patineta: require("../img/proyectos/patineta.avif"),
  porfolioPrueba: require("../img/proyectos/porfolioPrueba.avif"),
  ventaCars: require("../img/proyectos/ventaCars.avif"),
  audioSeparator: require("../img/proyectos/audioSeparator.png"),
  microshop: require("../img/proyectos/microshop.png"),
  ecommerceSpring: require("../img/proyectos/ecommerceSpring.png"),
  lechinBackend: require("../img/proyectos/lechinBackend.png"),
  seguimiento: require("../img/proyectos/seguimiento.png"),
};

// Portfolio Images
export const portfolioImages = {
  logo: require("../img/LOGOporfolio.jpeg"),
  baner: require("../img/baner/baner1.jpg"),
  fotoPerfil: require("../img/baner/perfilAzul.jpeg"),
};

// Social Links
export const socialLinks = [
  // {
  //   social: FacebookIcon,
  //   url: "https://www.facebook.com/profile.php?id=100075852762882",
  // },
  { social: LinkedInIcon, url: "https://acortar.link/bgcEVl",title:"Linkedin" },
  { social: GitHubIcon, url: "https://github.com/DeiviRep",title:"GitHub" },
  {
    social: DescriptionIcon,
    url: "https://docs.google.com/document/d/1E5p9naGz0tVrbo3IbSkzUxGeNDOcy2gsc55p6jW__RQ/edit?usp=sharing",
    title:"Hoja de Vida / CV"
  },
];

// About Me Data
export const aboutMeData = {
  name: "Acerca de mí",
  informacion: `
  <div style="display:grid;gap:0.6rem">
    <div>
      Desarrollando desde 
      <span style="font-weight: normal; color: #ffffffb3;">
      2022. 
      </span>
      Soy Ingeniero de Software con enfoque en Backend Developer
      y resido en La Paz, Bolivia. Me especializo en la creación de soluciones 
      escalables e innovadoras, 
      con experiencia en  
      <span style="font-weight: normal; color: #ffffffb3;">Java, Spring Boot, Python, Nest.js y TypeScript</span>.
    </div>
    <div>
      He trabajado en proyectos con arquitecturas de microservicios y APIs REST, 
      aplicando principios SOLID y Clean Code. Estoy comprometido a aprender tecnologías 
      como <span style="font-weight: normal; color: #ffffffb3;">Nginx, MongoDB, AWS Cloud</span> 
      para fortalecer mi perfil backend.
    </div>
    <div>
      En mi tiempo libre, mejoro mi 
      <span style="font-weight: normal; color: #ffffffb3;">
      inglés tomando cursos
      </span>
      para 
      <span style="font-weight: normal; color: #ffffffb3;">
      colaborar con equipos globales
      </span>
      y ampliar mis horizontes profesionales.
      Contáctame. ¿Quieres conectar? Escríbeme.
    </div>
  </div>`,
  etiqueta:
    "Mi anhelo es crear tecnologías intuitivas y elegantes que no solo resuelvan problemas, sino que inspiren y transformen la manera en que trabajamos y vivimos.",
};

// Skills Data
export const skillsData = {
  informacion: `He trabajado en proyectos responsivos y con buena experiencia de usuario (UI/UX), con un fuerte enfoque en desarrollo backend.`,
  informacion2: `Mi stack de desarrollo incluye tecnologías como Java, Spring Boot, Nest.js, y Python para backend, además de React y Next.js para frontend.`,
  informacion3: `Tengo experiencia con PostgreSQL, MySQL, y arquitecturas de microservicios. Uso herramientas como Docker, Git, y Gradle, y estoy comprometido a aprender tecnologías nuevas.`,
};

// Projects Data
export const projectsData = [
  {
    visitar: "Ver en GitHub",
    name: "Micro Shop - NestJS & NATS",
    url: "https://github.com/DeiviRep/micro-shop-nestjs-nats",
    img: projectImages.microshop,
    descripcion: "Construí un sistema basado en microservicios con Nest.js y NATS, gestionando usuarios y productos con autenticación JWT. La arquitectura desacoplada asegura escalabilidad y comunicación asíncrona.",
    tecnologiasUsadas: ["Nest.js", "TypeScript", "NATS", "PostgreSQL", "Docker", "JWT"],
    icono: "mdi:cart",
  },
  {
    visitar: "Ver en GitHub",
    name: "Ecommerce con Spring Boot",
    url: "https://github.com/DeiviRep/eccomerce-Spring-Boot",
    img: projectImages.ecommerceSpring,
    descripcion: "Desarrollé un sistema de ecommerce con autenticación, gestión de productos, y APIs REST usando Java y Spring Boot. Implementé Spring Security para autenticación segura y deployé con Docker.",
    tecnologiasUsadas: ["Java", "Spring Boot", "Spring Security", "Gradle", "Docker"],
    icono: "mdi:shopping-outline",
  },
  {
    visitar: "Visitar Página",
    name: "Sistema de Gestión Académica YATIC",
    url: "https://yatic.agetic.gob.bo/portal",
    img: projectImages.yatic,
    descripcion: "Desarrollé un sistema completo de gestión académica en AGETIC, integrando frontend y backend con tecnologías modernas para optimizar la administración de datos académicos.",
    tecnologiasUsadas: ["Next.js", "Nest.js", "TypeScript", "MaterialUI", "PostgreSQL", "Docker", "Figma"],
    icono: "mdi:school",
  },
  {
    visitar: "Visitar Página",
    name: "Seguimiento de Proyectos",
    url: "https://seguimiento.upat.agetic.gob.bo/login",
    img: projectImages.seguimiento,
    descripcion: "Participé en el desarrollo full stack del sistema en AGETIC, desde la planificación con Figma y Excel. Me encargué de la experiencia de usuario aplicando diseño UI/UX, Clean Code y principios SOLID.",
    tecnologiasUsadas: ["Next.js", "Nest.js", "TypeScript", "PostgreSQL", "Figma", "Excel", "PM2"],
    icono: "mdi:account-check",
  },
  {
    visitar: "Visitar en Hugging Face",
    name: "Audio Separator - Separador de Pistas",
    url: "https://huggingface.co/spaces/deyvi-code/audio-separator",
    img: projectImages.audioSeparator,
    descripcion: "Desarrollé una aplicación en Python para separar pistas de audio (vocales, batería, etc.) usando Spleeter y Demucs. Desplegada en Hugging Face Spaces con endpoints de descarga y Docker.",
    tecnologiasUsadas: ["Python", "Docker", "Spleeter", "Demucs", "Hugging Face Spaces", "NumPy"],
    icono: "mdi:music",
  },
  {
    visitar: "Ver en GitHub",
    name: "Sistema de Gestión Estudiantil - UPEA",
    url: "https://github.com/miguelhuayhua/lechin-backend",
    img: projectImages.lechinBackend,
    descripcion: "Desarrollé el backend de un sistema de gestión estudiantil en UPEA, implementando rutas, conexiones a base de datos, cifrado de datos y control de sesiones con Python y Flask.",
    tecnologiasUsadas: ["Python", "Flask", "PostgreSQL", "Heroku", "WSGI"],
    icono: "mdi:account-school",
  },
  {
    visitar: "Visitar Página",
    name: "Plataforma de Venta de Automóviles",
    url: "https://compracars.netlify.app",
    img: projectImages.ventaCars,
    descripcion: "Desarrollé una plataforma dinámica para la compra de automóviles, con un frontend en React que ofrece una navegación intuitiva y amigable.",
    tecnologiasUsadas: ["React", "JavaScript", "HTML", "CSS"],
    icono: "ic:round-shopping-cart",
  },
  {
    visitar: "Visitar Página",
    name: "Prototipo de Página Principal para Empresa",
    url: "https://companydevdreamers.netlify.app",
    img: projectImages.empresaMia,
    descripcion: "Diseñé un prototipo de página principal para una empresa de desarrollo de software, utilizando un diseño moderno y componentes reutilizables en Angular.",
    tecnologiasUsadas: ["Angular", "JavaScript", "TypeScript", "HTML", "CSS"],
    icono: "mingcute:building-4-fill",
  },
  {
    visitar: "Visitar Página",
    name: "Galería de Automóviles Responsiva",
    url: "https://automoviles-js.netlify.app",
    img: projectImages.cars,
    descripcion: "Creé una galería interactiva para exhibir automóviles de lujo, con un diseño responsivo que garantiza una experiencia fluida en cualquier dispositivo.",
    tecnologiasUsadas: ["JavaScript", "HTML", "CSS"],
    icono: "raphael:car",
  },
];

// Section Names
export const sectionNames = [
  {
    name: "Proyectos Destacados",
  },
];

// Contact Data
export const contactData = [
  {
    tipo: "email",
    url: "patzivargasdavid@gmail.com",
    frase1: "Deseas realizar tu proyecto?",
    frase2: "Contáctame, estoy listo para colaborar ; )",
  },
];

// Footer Data
export const footerData = [
  {
    copirigth: "David Patzi © 2023. Todos los derechos reservados.",
  },
];

// Presentation Data
export const presentationData = [
  {
    foto: portfolioImages.fotoPerfil,
    img: portfolioImages.baner,
    saludo: "¡Bienvenido/a a mi portafolio!",
    nivel: "Software Engineer",
    especialidad1: "Developer Software",
  },
];