// app.js
import "./App.css";
import Navar from "./components/Navar";
import Acercademi from "./components/Acercademi";
import Contacto from "./components/Contacto";
import Habilidades from "./components/Habilidades";
import Proyectos from "./components/Proyectos";
import Footer from "./components/Footer";
import Presentacion from "./components/Presentacion";
import { Element } from "react-scroll";

// Icons
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

// Data imports separated into a config file
import {
  technologyIcons,
  projectImages,
  portfolioImages,
  socialLinks,
  aboutMeData,
  skillsData,
  projectsData,
  sectionNames,
  contactData,
  footerData,
  presentationData,
} from "./config/portfolioData.js";
import { useState } from "react";

function App() {
  return (
    <>
      <Navar logo={portfolioImages.logo} social={socialLinks} />
      <div className="cajon">
        <Presentacion presentacion={presentationData} />
        <Element name="seccionAcercade">
          <Acercademi acercade={aboutMeData} />
        </Element>
        <Element name="seccion-Proyectos">
          <Proyectos proyectos={projectsData} nameSeccion={sectionNames} />
        </Element>
        <Element name="seccion-Habilidades">
          <Habilidades habilidades={skillsData} img={technologyIcons} />
        </Element>
        <Element name="seccion-Contactame">
          <Contacto contacto={contactData} />
        </Element>
        <Footer footer={footerData} social={socialLinks} />
      </div>
    </>
  );
}

export default App;