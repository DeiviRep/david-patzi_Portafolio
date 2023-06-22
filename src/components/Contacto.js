import React from "react";
import "../styles/contacto.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline"
const Contacto = ({ contacto }) => {
  
  return (
    <>
      <div className="seccion-contacto" id="contact">
        <div className="content-contact">
          <h1>Contáctame</h1>
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
