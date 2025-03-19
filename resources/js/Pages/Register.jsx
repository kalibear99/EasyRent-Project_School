import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; 
import "../../css/Auth.css";

const Register = () => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/register", form, {
        headers: { "Content-Type": "application/json" },
      });      
      console.log("Registrace úspěšná:", response.data);
      alert("Účet vytvořen! Můžete se přihlásit.");
    } catch (error) {
      console.error("Chyba při registraci:", error.response?.data || error.message);
      alert("Registrace selhala, zkontrolujte údaje.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Vytvořit nový účet zákazníka</h2>
        <div className="underline"></div>

        <form onSubmit={handleSubmit}>
          <div className="name-fields">
            <div className="input-group">
              <label>Jméno</label>
              <input type="text" name="first_name" placeholder="Zadejte jméno" value={form.first_name} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label>Příjmení</label>
              <input type="text" name="last_name" placeholder="Zadejte příjmení" value={form.last_name} onChange={handleChange} required />
            </div>
          </div>

          <label>Email</label>
          <input type="email" name="email" placeholder="Zadejte email" value={form.email} onChange={handleChange} required />

          <label>Heslo</label>
          <input type="password" name="password" placeholder="Zadejte heslo" value={form.password} onChange={handleChange} required />

          <label>Potvrdit heslo</label>
          <input type="password" name="password_confirmation" placeholder="Potvrďte heslo" value={form.password_confirmation} onChange={handleChange} required />

          <button type="submit" className="login-button">Registrovat</button>
        </form>

        <p className="register-text">
          Máte už účet?{" "}
          <Link to="/login" className="register-link">Přihlaste se</Link> zde.
        </p>
      </div>
    </div>
  );
};

export default Register;
