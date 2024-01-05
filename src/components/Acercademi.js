import React from "react";
import "../styles/acercade.css";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Acercademi = ({ acercade }) => {
  return (
    <div className="box-acercade-saludo">
      <div className="saludo">
        <h1>¡Bienvenido/a a mi portafolio!</h1>
      </div>
      <div className="box-acercade" id="acercade">
        <section className="descripcion">
          <h1>{acercade.name}</h1>
          <div className="acercade">
            <p>
              {acercade.informacion}
              <a href="#contact">
                <ArrowRightIcon />
                Contactar
              </a>
            </p>
            <cite>{acercade.etiqueta}</cite>
          </div>
        </section>
        <section className="presentacion">
          <div className="conten1">
            <p class="comment">{"// Mi presentacion"}</p>
            <p>
              <span class="span">Nombre</span> {"{"}
            </p>
            <div className="content-array">
              <p class="p">
                Nombres: <span>David Bernardo;</span>
              </p>
              <p class="p">
                Apellidos: <span>Patzi Vargas;</span>
              </p>
            </div>
            <p>
              {"}"}
              <span class="line1">|</span>
            </p>
          </div>
          <div className="conten2">
            <p>
              <span class="span">.A que me dedico.</span> {"{"}
            </p>
            <div className="content-array">
              <p class="p">
                Profesion: <span>Desarrollador web y de apps moviles;</span>
              </p>
              <p class="p">
                Markup: <span>HTML;</span>
              </p>
              <p class="p">
                Back-End: <span>[ JAVA, PYTHON, JAVA-SCRIPT ];</span>
              </p>
            </div>
            <p>
              {"}"}
              <span class="line2">|</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Acercademi;
