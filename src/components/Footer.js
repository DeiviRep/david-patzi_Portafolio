import React from "react";
import "../styles/footer.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = ({ footer,social }) => {
  const mostrarSocial = social.map((itemSocial, index) => {
    return (
      <a href={itemSocial.url} target="_blank">
        <itemSocial.social className="icono-social" />
      </a>
    );
  });
  return (
    <>
      <footer className="footer">
        <div className="content-social">{mostrarSocial}</div>
        <p>{footer[0].copirigth}</p>
      </footer>
    </>
  );
};

export default Footer;
