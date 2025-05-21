// config/portfolioData.js
import PosgreIcon from "../img/iconos/bd/postgre-sql.png";
import WorkbenchIcon from "../img/iconos/bd/mysqlworkbench.svg?react";
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
import BootstrapIcon from "../img/iconos/librerias/bootstrap.svg?react";
import GithubIcon from "../img/iconos/otros/github.svg?react";
import GitIcon from "../img/iconos/otros/git.svg?react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
// Technology Icons
export const technologyIcons = [
  {
    bd: [
      { name: "PostgreSQL", img: PosgreIcon },
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
  { social: LinkedInIcon, url: "https://acortar.link/bgcEVl" },
  { social: GitHubIcon, url: "https://github.com/DeiviRep" },
  {
    social: MailOutlineIcon,
    url: "mailto:patzivargasdavid@gmail.com?subject=Apacionados por el desarrollo&body=Hola soy David Patzi escribe aqui la consulta que tengas. :)",
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
      Soy Ingeniero de Software Full Stack
      y resido en La Paz, Bolivia. Me especializo en la creación de soluciones 
      escalables e innovadoras, 
      con experiencia en  
      <span style="font-weight: normal; color: #ffffffb3;">Nest.js, Next.js y TypeScript</span>.
    </div>
    <div>
      Mi curiosidad por conceptos como descentralización y Ethereum me llevó a explorar el potencial de 
      <span style="font-weight: normal; color: #ffffffb3;">
      blockchain
      para la seguridad y transparencia
      </span>
      en datos. 
      Actualmente, lo aplico en mi tesis mientras sigo aprendiendo. 
    </div>
    <div>
      En mi tiempo libre, mejoro mi 
      <span style="font-weight: normal; color: #ffffffb3;">
      inglés 
      </span>
      para 
      <span style="font-weight: normal; color: #ffffffb3;">
      colaborar con equipos globales
      </span>
      y ampliar mis 
      horizontes profesionales.
      Contáctame. ¿Quieres conectar? Escríbeme.
    </div>
  </div>`,
  etiqueta:
    "Mi anhelo es crear tecnologías intuitivas y elegantes que no solo resuelvan problemas, sino que inspiren y transformen la manera en que trabajamos y vivimos.",
};

// Skills Data
export const skillsData = {
  informacion: `He trabajado en proyectos responsivos y con buena experiencia de usuario (UI/UX).`,
  informacion2: `Mi stack de desarrollo incluye tecnologías como React, Next.js, Angular (frontend), y Nest.js, Spring Boot (backend).`,
  informacion3: `
        Uso MySQL y PostgreSQL, además tengo experiencia con TypeScript en proyectos recientes.`,
};

// Projects Data
export const projectsData = [
  {
    visitar: "Visitar Página",
    name: "Sistema de Gestión Académica YATIC",
    url: "https://yatic.agetic.gob.bo/portal",
    img: projectImages.yatic,
    descripcion: "Desarrollé un sistema completo de gestión académica para YATIC, integrando frontend y backend con tecnologías modernas para optimizar la administración de datos académicos.",
    tecnologiasUsadas: ["Next.js", "Nest.js", "TypeScript", "MaterialUI", "PostgreSQL", "Docker", "Figma"],
    icono: "mdi:school",
  },
  {
  visitar: "Ver en GitHub",
  name: "Micro Shop - NestJS & NATS",
  url: "https://github.com/DeiviRep/micro-shop-nestjs-nats",
  img: projectImages.microshop, // Asegúrate de tener esta imagen en tu objeto `projectImages`
  descripcion: "Sistema basado en microservicios usando NestJS y NATS, que gestiona usuarios y productos con autenticación JWT. Arquitectura desacoplada, comunicación asíncrona y despliegue con Docker.",
  tecnologiasUsadas: ["NestJS", "TypeScript", "NATS", "PostgreSQL", "Docker", "JWT"],
  icono: "mdi:cart",
  },
  {
    visitar: "Visitar en Hugging Face",
    name: "Audio Separator - Separador de Pistas",
    url: "https://huggingface.co/spaces/deyvi-code/audio-separator",
    img: projectImages.audioSeparator, // Asegúrate de tener una imagen representativa en tu objeto `projectImages`
    descripcion: "Aplicación desplegada en Hugging Face Spaces que permite separar archivos de audio en pistas individuales (vocales, batería, etc.) utilizando modelos como Spleeter y Demucs. Incluye endpoints de descarga y despliegue en Docker.",
    tecnologiasUsadas: ["Python", "Docker", "Spleeter", "Demucs", "Hugging Face Spaces", "NumPy"],
    icono: "mdi:music",
  },
  {
    visitar: "Ver en GitHub",
    name: "Ecommerce con Spring Boot",
    url: "https://github.com/DeiviRep/eccomerce-Spring-Boot",
    img: projectImages.ecommerceSpring, // Asegúrate de agregar esta imagen a tu objeto projectImages
    descripcion: "Proyecto desarrollado como parte de un curso práctico. Implementé un sistema de ecommerce con autenticación, gestión de productos y control de usuarios utilizando Spring Boot, Gradle y Docker.",
    tecnologiasUsadas: ["Java", "Spring Boot", "Gradle", "Docker", "Spring Security"],
    icono: "mdi:shopping-outline",
  },
  {
    visitar: "Ver en GitHub",
    name: "Sistema de Gestión Estudiantil - UPEA",
    url: "https://github.com/miguelhuayhua/lechin-backend",
    img: projectImages.lechinBackend, // Asegúrate de incluir una imagen representativa en tu objeto `projectImages`
    descripcion: "Proyecto desarrollado en la Universidad Pública de El Alto (UPEA) para la materia de Sistemas II. Me encargué principalmente del desarrollo backend, implementando rutas, conexiones a base de datos, cifrado de datos y control de sesiones en Python.",
    tecnologiasUsadas: ["Python", "Flask", "PostgreSQL", "Heroku", "WSGI"],
    icono: "mdi:account-school",
  },
  {
    visitar: "Visitar Página",
    name: "Plataforma de Venta de Automóviles",
    url: "https://compracars.netlify.app",
    img: projectImages.ventaCars,
    descripcion: "Desarrollé una plataforma dinámica para la compra de automóviles, con un frontend en React que ofrece una navegación intuitiva y amigable.",
    tecnologiasUsadas: ["React", "JavaScript", "Html", "Css"],
    icono: "ic:round-shopping-cart",
  },
  {
    visitar: "Visitar Página",
    name: "Prototipo de Página Principal para Empresa",
    url: "https://companydevdreamers.netlify.app",
    img: projectImages.empresaMia,
    descripcion: "Diseñé un prototipo de página principal para una empresa de desarrollo de software, utilizando un diseño moderno y componentes reutilizables en Angular.",
    tecnologiasUsadas: ["Angular", "JavaScript", "TypeScript", "Html", "Css"],
    icono: "mingcute:building-4-fill",
  },
  {
    visitar: "Visitar Página",
    name: "Galería de Automóviles Responsiva",
    url: "https://automoviles-js.netlify.app",
    img: projectImages.cars,
    descripcion: "Creé una galería interactiva para exhibir automóviles de lujo, con un diseño responsivo que garantiza una experiencia fluida en cualquier dispositivo.",
    tecnologiasUsadas: ["JavaScript", "Html", "Css"],
    icono: "raphael:car",
  },
  // {
  //   visitar: "Visitar Página",
  //   name: "Portafolio de Prueba",
  //   url: "https://porfolio-ejemplo.netlify.app",
  //   img: projectImages.porfolioPrueba,
  //   descripcion: "Construí un portafolio de prueba para un desarrollador web, aplicando buenas prácticas de diseño y desarrollo frontend para destacar proyectos y habilidades.",
  //   tecnologiasUsadas: ["HTML", "CSS", "JavaScript"],
  //   icono: "mingcute:user-5-fill",
  // },
  // {
  //   visitar: "Visitar Página",
  //   name: "Blog de Deportes",
  //   url: "https://animaciones-js.netlify.app",
  //   img: projectImages.patineta,
  //   descripcion: "Desarrollé un blog interactivo para amantes del skateboarding, incorporando animaciones personalizadas para enriquecer la experiencia del usuario.",
  //   tecnologiasUsadas: ["HTML", "CSS", "JavaScript"],
  //   icono: "fluent-emoji-high-contrast:skateboard",
  // },
];

// Section Names
export const sectionNames = [
  {
    name: "Proyectos Realizados",
  },
];

// Contact Data
export const contactData = [
  {
    tipo: "email",
    url: "patzivargasdavid@gmail.com",
    frase1: "Deseas realizar tu proyecto?",
    frase2: "Contáctame, estamos para servir ; )",
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
    nivel: "Full Stack Software Engineer",
    especialidad1: "Developer Software",
  },
];