import React from "react";
import "../styles/proyectos.css";

const Proyectos = ({ proyectos, nameSeccion }) => {
  console.log(proyectos);
  const listProyects = proyectos.map((item, index) => (
    <div className="content-proyecto">
      <div className="content-img-proyect">
        <img src={item.img} alt="imageProyecto" />
      </div>
      <div className="content-button">
        <a href={item.url} target="_blank">
          <button className="button">{item.visitar}</button>
        </a>
      </div>
      <div className="item-name-descripcion">
        <p>{item.descripcion}</p>
      </div>
      <div className="content-tecnologia">
        {item.tecnologiasUsadas.map((itemTecnologia) => (
          <div className="item-name-tecnologia">
            <p>{itemTecnologia}</p>
          </div>
        ))}
      </div>
    </div>
  ));
  return (
    <>
      <div className="seccion-proyectos" id="proyectos">
        <div className="name-seccion">
          <h1>{nameSeccion[0].name}</h1>
        </div>
        <div className="box-content-proyectos">{listProyects}</div>
      </div>
    </>
  );
};

export default Proyectos;
