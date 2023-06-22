import React from "react";
import "../styles/contacto.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contacto = ({ contacto }) => {
  const social = [
    {
      social: FacebookIcon,
    },
    {
      social: LinkedInIcon,
    },
    {
      social: GitHubIcon,
    },
  ];
  const mostrarSocial = social.map((itemSocial, index) => {
    const Icono = itemSocial.social;
    return (
      <a href="#$">
        <Icono className="icono-social"/>
      </a>
    );
  });

  return (
    <>
      <div className="seccion-contacto" id="contact">
        <div className="content-contact">
          <h1>Contáctame</h1>

          {/* <a href={contacto[0].url}>{contacto[0].url}</a> */}
          <a
            className="content-email"
            rel="nofollow"
            href="mailto:patzivargasdavid@gmail.com?subject=Apacionados por el desarrollo&body=Hola soy David Patzi escribe aqui la consulta que tengas. :)"
          >
            <button className="boton">
              <MailOutlineIcon className="icon-continue" />
              patzivargasdavid@gmail.com
            </button>
          </a>
          <div className="content-social">{mostrarSocial}</div>
        </div>
        <div className="content-frases">
          <p className="frase">{contacto[0].frase1}</p>
          <p className="frase">{contacto[0].frase2}</p>
        </div>
      </div>
    </>
  );
};

export default Contacto;
