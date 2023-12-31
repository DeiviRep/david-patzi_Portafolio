import posgre from "./img/iconos/bd/postgre-sql.png";
import worbench from "./img/iconos/bd/mysqlworkbench.svg";
import mongo from "./img/iconos/bd/mongodb.png";
import react from "./img/iconos/frameworks/react.png";
// import angular from "./img/iconos/frameworks/angular.png";
import laravel from "./img/iconos/frameworks/laravel.png";
// import flask from "./img/iconos/frameworks/flask.png";
import flutter from "./img/iconos/frameworks/flutter.png";
import android from "./img/iconos/frameworks/Android.svg";
import python from "./img/iconos/lenguajes/python.png";
// import dart from "./img/iconos/lenguajes/dart.png";
import css from "./img/iconos/lenguajes/css.svg";
import html from "./img/iconos/lenguajes/html.svg";
import js from "./img/iconos/lenguajes/javascript.png";
// import php from "./img/iconos/lenguajes/php.svg";
import bootstrap from "./img/iconos/librerias/bootstrap.svg";
import nodejs from "./img/iconos/librerias/nodejs.svg";
import github from "./img/iconos/otros/github.svg";
// import gitlab from "./img/iconos/otros/gitlab.png";
import git from "./img/iconos/otros/git.svg";
// import vscode from "./img/iconos/otros/vscode.png";
import "./App.css";
import Navar from "./components/Navar";
import Acercademi from "./components/Acercademi";
import Contacto from "./components/Contacto";
import Habilidades from "./components/Habilidades";
import Proyectos from "./components/Proyectos";
import Footer from "./components/Footer";
import logo from "./img/LOGOporfolio.jpeg";
//IMG DE LOS PROYECTOS
import cars from "./img/proyectos/cars.avif";
import gestionProyectos from "./img/proyectos/gestionProyectos.png";
import empresaMia from "./img/proyectos/empresaMia.avif";
import patineta from "./img/proyectos/patineta.avif";
import porfolioPrueba from "./img/proyectos/porfolioPrueba.avif";
import ventaCars from "./img/proyectos/ventaCars.avif";
import baner from "./img/baner/baner1.jpg";
import fotoPerfil from "./img/baner/DavidFoto.webp";
import Presentacion from "./components/Presentacion";
import { Element } from "react-scroll";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function App() {
  let acercade = {
    name: "Acerca de mi",
    informacion: `Mi nombre es David Bernardo Patzi Vargas, soy un desarrollador web y móvil. Durante los últimos 4 años, he estado dedicando tiempo y esfuerzo para perfeccionar mis habilidades en el desarrollo web y iOS. 
    He completado varios proyectos, principalmente en la creación de páginas web. Actualmente, me encuentro inmerso en el aprendizaje de inteligencia artificial para poder integrarla en mis futuros proyectos`,
    etiqueta:
      "Me apaciona el mundo del desarrollo y mi sueño es formar parte de compañías como Google, Amazon, Facebook, realizando proyectos que mejoren el mundo.",
  };
  let habilidades = {
    informacion: `Realise proyectos responsivos, con una buena experiencia de usuario UI/UX, en proyectos medianos y pequeños usando CSS (para su estilo) y JS para las funciones interactivas.`,
    informacion2: `My stack de desarrollo para el desarrollo web son: frontend(React, NextJs y Angular), backend(NestJs, Spring Boot), GitLab, GitHub, Docker, WebSockets entre otras tecnologias`,
    informacion3: `
        Para la creacion de base de datos hago uso de MySql y PostgreSql,
        Tengo experiencia con TypeScript obtenidas en 3 proyectos recientes elboradas con NextJs y NestJs.`,
  };
  let imgStack = [
    {
      bd: [
        { name: "posgre", img: posgre },
        { name: "worbench", img: worbench },
        { name: "mongo", img: mongo },
      ],
      lenguaje: [
        { name: "html", img: html },
        { name: "js", img: js },
        { name: "css", img: css },
        { name: "python", img: python },
      ],
      framework: [
        { name: "react", img: react },
        { name: "laravel", img: laravel },
        { name: "flutter", img: flutter },
        { name: "android", img: android },
      ],
      lib: [
        { name: "nodejs", img: nodejs },
        { name: "bootstrap", img: bootstrap },
      ],
      editores: [
        { name: "github", img: github },
        { name: "git", img: git },
      ],
    },
  ];
  let proyectos = [
    {
      visitar: "Visitar Página",
      name: "Gestion de Proyectos",
      url: "https://test-seguimiento.agcs.agetic.gob.bo/login",
      img: gestionProyectos,
      descripcion: "Herramienta para gestionar tus proyectos de desarrollo",
      tecnologiasUsadas: ["NextJs", "NestJs", "TypeScript", "MaterialUI"],
    },
    {
      visitar: "Visitar Página",
      name: "Automoviles Responsive",
      url: "https://automoviles-js.netlify.app",
      img: cars,
      descripcion: "Exhibición de automóviles de gama alta",
      tecnologiasUsadas: ["JavaScript", "Html", "Css"],
    },
    {
      visitar: "Visitar Página",
      name: "Home de una Empresa",
      url: "https://companydevdreamers.netlify.app",
      img: empresaMia,
      descripcion: "Diseño de la pagina prinicipal para empresas de desarrollo",
      tecnologiasUsadas: ["Angular"],
    },
    {
      visitar: "Visitar Página",
      name: "Venta de Automoviles",
      url: "https://compracars.netlify.app",
      img: ventaCars,
      descripcion: "Pagina para comprar automoviles",
      tecnologiasUsadas: ["React"],
    },
    {
      visitar: "Visitar Página",
      name: "Portafolio de Prueba",
      url: "https://porfolio-ejemplo.netlify.app",
      img: porfolioPrueba,
      descripcion: "Portafolio para un desarrollador web",
      tecnologiasUsadas: ["Html", "Css", "Js"],
    },
    {
      visitar: "Visitar Página",
      name: "Deporte con Patineta",
      url: "https://animaciones-js.netlify.app",
      img: patineta,
      descripcion: "Block para amantes del deporte en patineta",
      tecnologiasUsadas: ["Html", "Css", "JavaScript"],
    },
  ];
  let nameSeccion = [
    {
      name: "Proyectos 2023 realizados",
    },
  ];
  let contacto = [
    {
      tipo: "email",
      url: "patzivargasdavid@gmail.com",
      frase1: "Deseas realizar tu proyecto?",
      frase2: "Contactame estamos para servir ; )",
    },
  ];
  let footer = [
    {
      copirigth: "David Patzi © 2023. Todos los derechos reservados.",
    },
  ];
  let presentacion = [
    {
      foto: fotoPerfil,
      img: baner,
      saludo: "¡Bienvenido/a a mi portafolio!",
      nivel: "FULLSTACK JR",
      especialidad1: "Developer Web",
      especialidad2: "Developer App",
    },
  ];
  const social = [
    {
      social: FacebookIcon,
      url: "https://www.facebook.com/profile.php?id=100075852762882",
    },
    {
      social: LinkedInIcon,
      url: "https://acortar.link/bgcEVl",
    },
    {
      social: GitHubIcon,
      url: "https://github.com/DeiviRep",
    },
    {
      social: MailOutlineIcon,
      url: "mailto:patzivargasdavid@gmail.com?subject=Apacionados por el desarrollo&body=Hola soy David Patzi escribe aqui la consulta que tengas. :)",
    },
  ];
  return (
    <>
      <Navar logo={logo} social={social} />
      <div className="cajon">
        <Presentacion presentacion={presentacion} />
        <Element name="seccionAcercade">
          <Acercademi acercade={acercade} />
        </Element>
        <Element name="seccion-Habilidades">
          <Habilidades habilidades={habilidades} img={imgStack} />
        </Element>
        <Element name="seccion-Proyectos">
          <Proyectos proyectos={proyectos} nameSeccion={nameSeccion} />
        </Element>
        <Element name="seccion-Contactame">
          <Contacto contacto={contacto} />
        </Element>
        <Footer footer={footer} social={social} />
      </div>
    </>
  );
}

export default App;
