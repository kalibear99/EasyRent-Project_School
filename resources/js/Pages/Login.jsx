import React from "react";
import { Link } from "react-router-dom";
import "../../css/Auth.css";
import facebookIcon from "../../assets/facebook.png";
import googleIcon from "../../assets/google.png";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Přihlášení zákazníka</h2>
        <div className="underline"></div>

        <label>Email</label>
        <input type="email" placeholder="Zadejte email" />

        <label>Heslo</label>
        <input type="password" placeholder="Zadejte heslo" />

        <div className="forgot-password">
          <Link to="#">Zapomněli jste heslo?</Link>
        </div>

        <button className="login-button">Přihlásit se</button>

        <p className="login-via-text">Přihlásit se přes</p>
        <div className="social-icons">
          <img src={facebookIcon} alt="Facebook" />
          <img src={googleIcon} alt="Google" />
        </div>

        <p className="register-text">
          Pokud u nás ještě nemáte účet, můžete si{" "}
          <Link to="/register" className="register-link">vytvořit účet</Link> zde.
        </p>
      </div>
    </div>
  );
};

export default Login;
