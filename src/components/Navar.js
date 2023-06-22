import React, { useState } from "react";
import "../styles/nav.css";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-scroll";
import WidgetsIcon from "@mui/icons-material/Widgets";
import CloseIcon from "@mui/icons-material/Close";

const Navar = ({ logo }) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const [visible, setVisible] = useState("");
  const open_nav = () => {
    setVisible("visible");
  };
  const close_nav = () => {
    setVisible("");
  }
  return (
    <>
      <header className="header">
        <nav className="nav" id={visible}>
          <div className="box-logo">
            <img src={[logo]} alt="" className="logo" onClick={scrollToTop} />
          </div>
          <button onClick={open_nav} className="menu-open">
            <WidgetsIcon className="ico_open" />
          </button>
          <button onClick={close_nav} className="menu-close">
            <CloseIcon className="ico_close" />
          </button>
          <ul>
            <li>
              <Link
                to="seccionAcercade"
                spy={true}
                smooth={true}
                duration={600}
              >
                Acerca de mi
              </Link>
            </li>
            <li>
              <Link
                to="seccion-Habilidades"
                spy={true}
                smooth={true}
                duration={600}
              >
                Mis habilidades
              </Link>
            </li>
            <li>
              <Link
                to="seccion-Proyectos"
                spy={true}
                smooth={true}
                duration={600}
              >
                Proyectos realizados
              </Link>
            </li>
            <li>
              <Link
                to="seccion-Contactame"
                spy={true}
                smooth={true}
                duration={600}
              >
                Contáctame
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navar;
