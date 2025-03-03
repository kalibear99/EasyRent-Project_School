import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import "../../assets/account-icon.png";
import "../../css/Navbar.css"
import accountIcon from "../../assets/account-icon.png";
import Footer from "@/Components/Footer";

const MainLayout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".navbar")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link href="/" onClick={() => setMenuOpen(false)}>Domů</Link>
          <Link href="/" onClick={() => setMenuOpen(false)}>Výběr aut</Link>
          <Link href="/" onClick={() => setMenuOpen(false)}>O nás</Link>
          <Link href="/kontakt" onClick={() => setMenuOpen(false)}>Kontakt</Link>
        </div>

        <div className="login-icon">
          <Link href="/login">
            <img src={accountIcon} alt="Účet" className="account-icon" />
          </Link>
        </div>
      </nav>

      <main>{children}</main>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default MainLayout;