import React from "react";
import "../styles/footer.css";

const Footer = ({ footer,social }) => {
  return (
    <>
      <footer className="footer">
        <p style={{color: "#ffffff"}}>{footer[0].copirigth} 👋👋👋👋👋</p>
      </footer>
    </>
  );
};

export default Footer;
