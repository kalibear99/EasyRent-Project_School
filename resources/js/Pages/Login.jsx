import React from "react";
import { Link } from "react-router-dom";
import "../../css/Auth.css";


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

        

        <button className="login-button">Přihlásit se</button>

        <p className="login-via-text">Přihlásit se přes</p>
        

        <p className="register-text">
          Pokud u nás ještě nemáte účet, můžete si{" "}
          <Link to="/register" className="register-link">vytvořit účet</Link> zde.
        </p>
      </div>
    </div>
  );
};

export default Login;
