import React, { useState } from "react";
import "../styles/nav.css";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-scroll";
import WidgetsIcon from "@mui/icons-material/Widgets";
import ContactsIcon from "@mui/icons-material/Contacts";
import DevicesIcon from "@mui/icons-material/Devices";
import CodeIcon from "@mui/icons-material/Code";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import CloseIcon from "@mui/icons-material/Close";

const Navar = ({ logo, social }) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const [visible, setVisible] = useState("");
  const open_nav = () => {
    setVisible("open_nav");
  };
  const close_nav = () => {
    setVisible("close_nav");
  };
  const [activeLink, setActiveLink] = useState(null);

  const handleSetActive = (tod) => {
    console.log(tod);
    switch (tod) {
      case "Acerca de mi":
        setActiveLink("seccionAcercade");
        break;
      case "Mis habilidades":
        setActiveLink("seccion-Habilidades");
        break;
      case "Proyectos realizados":
        setActiveLink("seccion-Proyectos");
        break;
      case "Contáctame":
        setActiveLink("seccion-Contactame");
        break;
      default:
        setActiveLink(null);
        break;
    }
  };
  const links = [
    {
      to: "seccionAcercade",
      parrafo: "Acerca de mi",
      IcoLink: AccountCircleIcon,
    },
    {
      to: "seccion-Habilidades",
      parrafo: "Mis habilidades",
      IcoLink: CodeIcon,
    },
    {
      to: "seccion-Proyectos",
      parrafo: "Proyectos realizados",
      IcoLink: DevicesIcon,
    },
    { to: "seccion-Contactame", parrafo: "Contáctame", IcoLink: ContactsIcon },
  ];
  const mostrarSocial = social.map((itemSocial, index) => {
    return (
      <a href={itemSocial.url} target="_blank">
        <itemSocial.social className="icono-social" />
      </a>
    );
  });
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
            {links.map((link) => (
              <li>
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={600}
                  onClick={() => handleSetActive(link.parrafo)}
                  className={activeLink === link.to ? "activado" : null}
                  // activeClass="activado"
                >
                  <link.IcoLink id="ico-link" />
                  <p className={activeLink}>{link.parrafo}</p>
                </Link>
              </li>
            ))}
            <li className="li-social">
              <div className="content-social">{mostrarSocial}</div>
            </li>
          </ul>
          <div className="flecha-sube" onClick={scrollToTop}>
            <ArrowDropUpIcon id="ico-sube" />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navar;
