import React, { useState, useRef } from "react";
import { Link } from "@inertiajs/react";
import "../../css/Navbar.css";
import accountIcon from "../../assets/account-icon.png";
import logo from "../../assets/logo.png";
import Footer from "@/Components/Footer";

const MainLayout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleClick = (event) => {
    if (
      menuRef.current && !menuRef.current.contains(event.target) &&
      dropdownRef.current && !dropdownRef.current.contains(event.target)
    ) {
      setMenuOpen(false);
      setDropdownOpen(false);
    }
  };

  return (
    <div className="app-container" onClick={handleClick}>
      <nav className="navbar" ref={menuRef}>
        <div
          className="menu-icon"
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(!menuOpen);
          }}
          aria-expanded={menuOpen}
        >
          ☰
        </div>

        <div className="logo">
          <Link href="/">
            <img src={logo} alt="Logo" className="logo-img" />
          </Link>
        </div>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link href="/" onClick={() => setMenuOpen(false)}>Domů</Link>
          <Link href="/vyber-aut" onClick={() => setMenuOpen(false)}>Výběr aut</Link>
          <Link href="/o-nas" onClick={() => setMenuOpen(false)}>O nás</Link>
          <Link href="/kontakt" onClick={() => setMenuOpen(false)}>Kontakt</Link>
        </div>

        <div className="login-icon">
          <img
            src={accountIcon}
            alt="Účet"
            className="account-icon"
            onClick={(e) => {
              e.stopPropagation();
              setDropdownOpen(!dropdownOpen);
            }}
          />
{dropdownOpen && (
  <div className="account-dropdown-menu" ref={dropdownRef}>
    <Link href="/my-profile" className="account-dropdown-item">Můj Profil</Link>
    <Link href="/rezervace" className="account-dropdown-item">Rezervace</Link>
    <Link href="/logout" className="account-dropdown-item">Odhlásit se</Link>
  </div>
)}
        </div>
      </nav>

      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;