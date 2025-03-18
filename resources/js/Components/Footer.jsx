import React from "react";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import "../../css/Footer.css";
import logo from "../../assets/logo.png"; 

const Footer = () => {
  return (  
    <footer className="footer">
      <div className="footer-container">  
       
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
        </div>

        <div className="footer-center">
          <h3>EasyRent</h3>
          <p>Výběr aut</p>
          <p>O nás</p>
          <p>Kontakt</p>
          <p>Obchodní podmínky</p>
        </div>
        
        <div className="footer-right">
          <h3>Kontaktovat</h3>
          <a className="mail" href="mailto:info@easyrent.cz">info@easyrent.cz</a>
          <a className="mail" href="tel:+420123456789">+420 123 456 789</a>
          <div className="footer-icons">
            <FaInstagram className="footer-icon"/>
            <FaXTwitter className="footer-icon"/>
          </div>
        </div>
      </div>

      <p className="footer-bottom">© 2025 EasyRent.cz s.r.o</p>
    </footer>
  );
};

export default Footer;
