import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "@inertiajs/react";
import "../../css/Footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          {/* Odkaz na úvodní stránku */}
          <Link href="/">
            <img src={logo} alt="Logo" className="footer-logo" />
          </Link>
        </div>

        <div className="footer-center">
          <h3>EasyRent</h3>
          <Link href="/vyber-aut"><p>Výběr aut</p></Link>
          <Link href="/o-nas"><p>O nás</p></Link>
          <Link href="/kontakt"><p>Kontakt</p></Link>
          <Link href="/obchodni-podminky"><p>Obchodní podmínky</p></Link>
        </div>

        <div className="footer-right">
          <h3>Kontaktovat</h3>
          <a className="mail" href="mailto:info@easyrent.cz">info@easyrent.cz</a>
          <a className="mail" href="tel:+420123456789">+420 123 456 789</a>
          <div className="footer-icons">
            <a href="https://www.instagram.com/d.kalistt/?next=%2F">
              <FaInstagram className="footer-icon" />
            </a>
            <a href="https://twitter.com/franta1626944">
              <FaTwitter className="footer-icon" />
            </a>
          </div>
        </div>
      </div>

      <p className="footer-bottom">© 2025 EasyRent.cz s.r.o</p>
    </footer>
  );
};

export default Footer;
