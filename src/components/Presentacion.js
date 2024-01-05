import React from "react";
import "../styles/presentacion.css";

const Presentacion = ({ presentacion }) => {
  return (
    <>
      <div className="seccion-presentacion">
        <div className="scrolling-img">
          <div className="name-especiality">
            <h1>{presentacion[0].nivel}</h1>
            <p>David Bernardo Patzi Vargas</p>
            <p>{presentacion[0].especialidad1}</p>
          </div>
        </div>
        {/* <div className="foto-perfil">
          <img src={presentacion[0].foto} alt="" />
        </div> */}
      </div>
    </>
  );
};

export default Presentacion;
