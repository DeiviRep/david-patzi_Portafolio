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
// Technology Icons
export const technologyIcons = [
  {
    bd: [
      { name: "posgre", img: PosgreIcon },
      { name: "workbench", img: WorkbenchIcon },
      { name: "mongo", img: MongoIcon },
    ],
    lenguaje: [
      { name: "html", img: HtmlIcon },
      { name: "js", img: JsIcon },
      { name: "css", img: CssIcon },
      { name: "python", img: PythonIcon },
    ],
    framework: [
      { name: "react", img: ReactIcon },
      { name: "laravel", img: LaravelIcon },
      { name: "flutter", img: FlutterIcon },
      { name: "android", img: AndroidIcon },
    ],
    lib: [
      { name: "nodejs", img: NodejsIcon },
      { name: "bootstrap", img: BootstrapIcon },
    ],
    editores: [
      { name: "github", img: GithubIcon },
      { name: "git", img: GitIcon },
    ],
  },
];

// Project Images
export const projectImages = {
  cars: require("../img/proyectos/cars.avif"),
  yatic: require("../img/proyectos/yatic.png"),
  empresaMia: require("../img/proyectos/empresaMia.avif"),
  patineta: require("../img/proyectos/patineta.avif"),
  porfolioPrueba: require("../img/proyectos/porfolioPrueba.avif"),
  ventaCars: require("../img/proyectos/ventaCars.avif"),
};

// Portfolio Images
export const portfolioImages = {
  logo: require("../img/LOGOporfolio.jpeg"),
  baner: require("../img/baner/baner1.jpg"),
  fotoPerfil: require("../img/baner/DavidFoto.webp"),
};

// Social Links
export const socialLinks = [
  {
    social: "FacebookIcon",
    url: "https://www.facebook.com/profile.php?id=100075852762882",
  },
  { social: "LinkedInIcon", url: "https://acortar.link/bgcEVl" },
  { social: "GitHubIcon", url: "https://github.com/DeiviRep" },
  {
    social: "MailOutlineIcon",
    url: "mailto:patzivargasdavid@gmail.com?subject=Apacionados por el desarrollo&body=Hola soy David Patzi escribe aqui la consulta que tengas. :)",
  },
];

// About Me Data
export const aboutMeData = {
  name: "Acerca de mi",
  informacion: `Mi nombre es David Bernardo Patzi Vargas, soy un desarrollador web y móvil. Durante los últimos 4 años, he estado dedicando tiempo y esfuerzo para perfeccionar mis habilidades en el desarrollo web y iOS. 
    He completado varios proyectos, principalmente en la creación de páginas web. Actualmente, me encuentro inmerso en el aprendizaje de inteligencia artificial para poder integrarla en mis futuros proyectos`,
  etiqueta:
    "Me apaciona el mundo del desarrollo y mi sueño es formar parte de compañías como Google, Amazon, Facebook, realizando proyectos que mejoren el mundo.",
};

// Skills Data
export const skillsData = {
  informacion: `Realise proyectos responsivos, con una buena experiencia de usuario UI/UX, en proyectos medianos y pequeños usando CSS (para su estilo) y JS para las funciones interactivas.`,
  informacion2: `My stack de desarrollo para el desarrollo web son: frontend(React, NextJs y Angular), backend(NestJs, Spring Boot), GitLab, GitHub, Docker, WebSockets entre otras tecnologias`,
  informacion3: `
        Para la creacion de base de datos hago uso de MySql y PostgreSql,
        Tengo experiencia con TypeScript obtenidas en 3 proyectos recientes elboradas con NextJs y NestJs.`,
};

// Projects Data
export const projectsData = [
  {
    visitar: "Visitar Página",
    name: "Sistema de Gestión Académica YATIC",
    url: "https://yatic.agetic.gob.bo/portal",
    img: projectImages.yatic,
    descripcion: "Sistema de Gestión Académica YATIC",
    tecnologiasUsadas: ["NextJs", "NestJs", "TypeScript", "MaterialUI"],
  },
    {
      visitar: "Visitar Página",
      name: "Automoviles Responsive",
      url: "https://automoviles-js.netlify.app",
      img: projectImages.cars,
      descripcion: "Exhibición de automóviles de gama alta",
      tecnologiasUsadas: ["JavaScript", "Html", "Css"],
    },
    {
      visitar: "Visitar Página",
      name: "Home de una Empresa",
      url: "https://companydevdreamers.netlify.app",
      img: projectImages.empresaMia,
      descripcion: "Diseño de la pagina prinicipal para empresas de desarrollo",
      tecnologiasUsadas: ["Angular"],
    },
    {
      visitar: "Visitar Página",
      name: "Venta de Automoviles",
      url: "https://compracars.netlify.app",
      img: projectImages.ventaCars,
      descripcion: "Pagina para comprar automoviles",
      tecnologiasUsadas: ["React"],
    },
    {
      visitar: "Visitar Página",
      name: "Portafolio de Prueba",
      url: "https://porfolio-ejemplo.netlify.app",
      img: projectImages.porfolioPrueba,
      descripcion: "Portafolio para un desarrollador web",
      tecnologiasUsadas: ["Html", "Css", "Js"],
    },
    {
      visitar: "Visitar Página",
      name: "Deporte con Patineta",
      url: "https://animaciones-js.netlify.app",
      img: projectImages.patineta,
      descripcion: "Block para amantes del deporte en patineta",
      tecnologiasUsadas: ["Html", "Css", "JavaScript"],
    },
  // ... (other projects follow the same pattern)
];

// Section Names
export const sectionNames = [
  {
    name: "Proyectos 2024 realizados",
  },
];

// Contact Data
export const contactData = [
  {
    tipo: "email",
    url: "patzivargasdavid@gmail.com",
    frase1: "Deseas realizar tu proyecto?",
    frase2: "Contactame estamos para servir ; )",
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
    nivel: "FULLSTACK",
    especialidad1: "Developer Web",
    especialidad2: "Developer App",
  },
];