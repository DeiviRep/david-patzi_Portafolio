import React from "react";
import "../styles/habilidades.css";

const Habilidades = ({ habilidades, img }) => {
  const imagenes = img.map((item, index) => (
    <div key={index} className="box-iconos">
      {item.bd.map((itemBd, indexBd) => (
        <div key={indexBd} className="content-icono">
          <div className="content-img">
            <img src={itemBd.img} alt="" />
          </div>
          <div className="content-name-img">
            <p>{itemBd.name}</p>
          </div>
        </div>
      ))}
      {item.lenguaje.map((itemLenguaje, indexLenguaje) => (
        <div key={indexLenguaje} className="content-icono">
          <div className="content-img">
            <img src={itemLenguaje.img} alt="" />
          </div>
          <div className="content-name-img">
            <p>{itemLenguaje.name}</p>
          </div>
        </div>
      ))}
      {item.framework.map((itemFramework, indexFramework) => (
        <div key={indexFramework} className="content-icono">
          <div className="content-img">
            <img src={itemFramework.img} alt="" />
          </div>
          <div className="content-name-img">
            <p>{itemFramework.name}</p>
          </div>
        </div>
      ))}
      {item.lib.map((itemLib, indexLib) => (
        <div key={indexLib} className="content-icono">
          <div className="content-img">
            <img src={itemLib.img} alt="" />
          </div>
          <div className="content-name-img">
            <p>{itemLib.name}</p>
          </div>
        </div>
      ))}
      {item.editores.map((itemEditores, indexEditores) => (
        <div key={indexEditores} className="content-icono">
          <div className="content-img">
            <img src={itemEditores.img} alt="" />
          </div>
          <div className="content-name-img">
            <p>{itemEditores.name}</p>
          </div>
        </div>
      ))}
    </div>
  ));
  return (
    <>
      <div className="seccion-habilidades" id="habilidades">
        <h1>Mis Habilidades</h1>
        <div className="box-habilidades">
          <p>{habilidades[0].informacion}</p>
          {imagenes}
        </div>
      </div>
    </>
  );
};

export default Habilidades;
