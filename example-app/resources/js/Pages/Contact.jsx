import React from "react";
import "../../css/Contact.css";
import mapImage from "../../assets/map.png"; 
import MainLayout from "../Layouts/MainLayout";

const Contact = () => {
  return (
    <MainLayout>
    <div className="contact-container">
      
      <div className="title-container">
        <h1 className="page-title">Kontaktujte nás</h1>
        <div className="title-underline"></div>
      </div>

     
      <div className="contact-box">
        <form>
          <div className="name-fields">
            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Váš email" />
            </div>
            <div className="input-group">
              <label>Telefon</label>
              <input type="tel" placeholder="Váš telefon" />
            </div>
          </div>
          <div className="input-group">
            <label>Napište zprávu</label>
            <textarea placeholder="Vaše zpráva"></textarea>
          </div>
          <button className="submit-button">Odeslat</button>
        </form>
      </div>

      
      <div className="map-section">
        <img src={mapImage} alt="Mapa" className="map-image" />
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
