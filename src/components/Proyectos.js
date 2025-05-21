import React from "react";
import "../styles/proyectos.css";
import { Icon } from "@iconify/react";

const Proyectos = ({ proyectos, nameSeccion }) => {
  const listProyects = proyectos.map((item, index) => (
    <div className="content-proyecto" key={index}>
      <div className="content-img-proyect">
        <img src={item.img} alt="imageProyecto" />
      </div>
      <div style={{alignSelf:"start"}}>
        <Icon icon={item.icono} width="30" height="30" color="#fff"/>
        <h3 style={{color:"#fff", margin:0, lineHeight: "32px", fontSize: "24px"}}>{item.name}</h3>
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
      <div className="content-button">
        <a href={item.url} target="_blank" rel="noreferrer">
          <button className="button">{item.visitar}</button>
        </a>
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
