import React from "react";
import Button from "../components/Button";
import "../../css/CarsPage.css";


import hyundai from "../../assets/hyundai-i30.png";
import acuraMDX from "../../assets/acura-mdx.png";
import acuraRDX from "../../assets/acura-rdx.png";

const cars = [
  { name: "Hyundai i30", description: "Vinnalit le quibusdam exducta nepelicantur quibus expeledicat armo quia.", image: hyundai },
  { name: "Acura MDX", description: "Vinnalit le quibusdam exducta nepelicantur quibus expeledicat armo quia.", image: acuraMDX },
  { name: "Acura RDX", description: "Vinnalit le quibusdam exducta nepelicantur quibus expeledicat armo quia.", image: acuraRDX },
];

const CarsPage = () => {
  return (
    <div className="cars-container">
      <div className="left-section">
        <h2 className="highlight-title">Rezervujte teď</h2>
        <div className="reserve-underline"></div>
        <p className="description-text">
          Prozkoumejte naši nabídku vozů a vyberte si ten, který perfektně vyhovuje vašim potřebám. <br />
          Rychlá rezervace a dostupnost ihned.
        </p>
        <a href="vyber-aut" className="cta-button">Nabídka vozů</a>
      </div>
      
      <div className="right-section">
        <div className="cars-list">
          {cars.map((car, index) => (
            <div key={index} className="car-card">
              <img src={car.image} alt={car.name} />
              <h3 className="car-name">{car.name}</h3>
              <p className="car-description">{car.description}</p>
            </div>
          ))}
        </div>
        <div className="dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </div>
  );
};

export default CarsPage;
