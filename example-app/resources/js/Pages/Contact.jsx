import React, { useState } from "react";
import axios from "axios";
import "../../css/Contact.css";
import mapImage from "../../assets/map.png"; 
import MainLayout from "../Layouts/MainLayout";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await axios.post("http://localhost:8000/api/contact", formData);
      setStatus("success");
      setFormData({ email: "", phone: "", message: "" });
      console.log(formData)
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <MainLayout>
      <div className="contact-container">
        <div className="title-container">
          <h1 className="page-title">Kontaktujte nás</h1>
          <div className="title-underline"></div>
        </div>

        <div className="contact-box">
          <form onSubmit={handleSubmit}>
            <div className="name-fields">
              <div className="input-group">
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Váš email" required />
              </div>
              <div className="input-group">
                <label>Telefon</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Váš telefon" required />
              </div>
            </div>
            <div className="input-group">
              <label>Napište zprávu</label>
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Vaše zpráva" required></textarea>
            </div>
            <button className="submit-button" type="submit">Odeslat</button>

            {status === "loading" && <p>Odesílám...</p>}
            {status === "success" && <p style={{ color: "green" }}>Email byl úspěšně odeslán!</p>}
            {status === "error" && <p style={{ color: "red" }}>Chyba při odesílání.</p>}
          </form>
        </div>

        <div className="map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.609250551443!2d17.69329847632812!3d49.22693717138454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713736217f47a19%3A0x13c5fafd124ff449!2zU3TFmWVkbsOtIMWha29sYSBCYWx0YWNpIHMuci5vLg!5e0!3m2!1scs!2scz!4v1741633606607!5m2!1scs!2scz"
            width="1000"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="contact-info">
            <p><strong>Adresa:</strong> Ulice 123, Město</p>
            <p><strong>Email:</strong> info@example.com</p>
            <p><strong>Telefon:</strong> +420 123 456 789</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
