import React, { useState } from "react";
import "../styles/nav.css";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-scroll";
import WidgetsIcon from "@mui/icons-material/Widgets";
import ContactsIcon from '@mui/icons-material/Contacts';
import DevicesIcon from '@mui/icons-material/Devices';
import CodeIcon from '@mui/icons-material/Code';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from "@mui/icons-material/Close";

const Navar = ({ logo }) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const [visible, setVisible] = useState("close_nav");
  const open_nav = () => {
    setVisible("open_nav");
  };
  const close_nav = () => {
    setVisible("close_nav");
  };
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
                <AccountCircleIcon id="ico-link" />
                <p>Acerca de mi</p>
              </Link>
            </li>
            <li>
              <Link
                to="seccion-Habilidades"
                spy={true}
                smooth={true}
                duration={600}
              >
                <CodeIcon id="ico-link" />
                <p>Mis habilidades</p>
              </Link>
            </li>
            <li>
              <Link
                to="seccion-Proyectos"
                spy={true}
                smooth={true}
                duration={600}
              >
                <DevicesIcon id="ico-link" />
                <p>Proyectos realizados</p>
              </Link>
            </li>
            <li>
              <Link
                to="seccion-Contactame"
                spy={true}
                smooth={true}
                duration={600}
              >
                <ContactsIcon id="ico-link" />
                <p>Contáctame</p>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navar;
