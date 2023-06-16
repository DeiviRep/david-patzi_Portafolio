import React from "react";
import '../styles/nav.css'

const Navar = ({logo}) => {
  return (
    <>
      <header className="header">
        <nav className="nav">
            <div className="box-logo">
                <img src={[logo]} alt="" className="logo"/>
            </div>
            <ul>
                <li><a href="#acercade">Acerca de mi</a></li>
                <li><a href="#habilidades">Mis habilidades</a></li>
                <li><a href="#proyectos">Proyectos realizados</a></li>
                <li><a href="#contact">Contáctame</a></li>
            </ul>
        </nav>
      </header>
    </>
  );
};

export default Navar;
