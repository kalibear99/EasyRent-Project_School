import React, { useState, useRef, useEffect } from "react";
import { Link } from "@inertiajs/react";
import axios from 'axios';
import "../../css/Navbar.css";
import accountIcon from "../../assets/account-icon.png";
import logo from "../../assets/logo.png";
import Footer from "@/Components/Footer";

const MainLayout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    setIsLoggedIn(!!token);
  }, []);

  const handleClick = (event) => {
    if (
      menuRef.current && !menuRef.current.contains(event.target) &&
      dropdownRef.current && !dropdownRef.current.contains(event.target)
    ) {
      setMenuOpen(false);
      setDropdownOpen(false);
    }
  };
  
  const handleLogout = async (e) => {
    e.preventDefault();
    
    if (isLoggingOut) return; 
    
    try {
      setIsLoggingOut(true);
      
      const token = localStorage.getItem('auth_token');
      
      if (token) {
        const csrf = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
        if (csrf) {
          axios.defaults.headers.common['X-CSRF-TOKEN'] = csrf;
        }
        
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        
        await axios.post("/api/logout");
      }
      
      localStorage.removeItem('auth_token');
      delete axios.defaults.headers.common['Authorization'];
      
      console.log("Odhlášení úspěšné");
      setIsLoggedIn(false);
      
      window.location.href = '/login';
    } catch (error) {
      console.error("Chyba při odhlášení:", error);
      localStorage.removeItem('auth_token');
      delete axios.defaults.headers.common['Authorization'];
      setIsLoggedIn(false);
      window.location.href = '/login';
    } finally {
      setIsLoggingOut(false);
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
              {isLoggedIn ? (
                <>
                  <Link href="/my-profile" className="account-dropdown-item">Můj Profil</Link>
                  <Link href="/rezervace" className="account-dropdown-item">Rezervace</Link>
                  <button 
                    className="account-dropdown-item logout-button" 
                    onClick={handleLogout}
                    disabled={isLoggingOut}
                  >
                    {isLoggingOut ? 'Odhlašování...' : 'Odhlásit se'}
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" className="account-dropdown-item">Přihlásit se</Link>
                  <Link href="/register" className="account-dropdown-item">Registrovat</Link>
                </>
              )}
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