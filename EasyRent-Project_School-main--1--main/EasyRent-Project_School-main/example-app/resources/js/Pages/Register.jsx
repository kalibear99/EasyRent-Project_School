import React from "react";
import { Link } from "react-router-dom";
import "resources/css/Register.css";


import facebookIcon from "../assets/facebook.png";
import googleIcon from "../assets/google.png";

const Register = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Vytvořit nový účet zákazníka</h2>
        <div className="underline"></div>

        <div className="name-fields">
          <div className="input-group">
            <label>Jméno</label>
            <input type="text" placeholder="Zadejte jméno" />
          </div>
          <div className="input-group">
            <label>Příjmení</label>
            <input type="text" placeholder="Zadejte příjmení" />
          </div>
        </div>

        <label>Email</label>
        <input type="email" placeholder="Zadejte email" />

        <label>Heslo</label>
        <input type="password" placeholder="Zadejte heslo" />

        <label>Potvrdit heslo</label>
        <input type="password" placeholder="Potvrďte heslo" />

        <button className="login-button">Přihlásit se</button>

        <p className="register-text">
          Máte už účet?{" "}
          <Link to="/login" className="register-link">Přihlaste se</Link> zde.
        </p>
      </div>
    </div>
  );
};

export default Register;
