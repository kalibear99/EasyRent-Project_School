import React from "react";
import Button from "../components/Button";
import "../../css/CarsPage.css";
import "../../css/app.css";
import hyundai from "../../assets/hyundai-i30.png";
import acuraMDX from "../../assets/acura-mdx.png";
import acuraRDX from "../../assets/acura-rdx.png";

const cars = [
  { 
    name: "Hyundai i30", 
    description: "Kompaktní hatchback s moderním designem, skvělou spotřebou a komfortním interiérem vhodným pro městské i dálkové jízdy.", 
    image: hyundai 
  },
  { 
    name: "Acura MDX", 
    description: "Luxusní SUV s výkonným motorem, pohonem všech kol a špičkovou výbavou pro maximální pohodlí a bezpečnost na cestách.", 
    image: acuraMDX 
  },
  { 
    name: "Acura RDX", 
    description: "Dynamické a prostorné SUV s pokročilou technologií, sportovním designem a prémiovými materiály v interiéru.", 
    image: acuraRDX 
  },
];


const CarsPage = () => {
  return (
    <div className="cars-page-container">
      <div className="cars-page-left-section">
        <h2 className="cars-page-highlight-title">Rezervujte teď</h2>
        <div className="cars-page-reserve-underline"></div>
        <p className="cars-page-description-text">
          Prozkoumejte naši nabídku vozů a vyberte si ten, který perfektně vyhovuje vašim potřebám. <br />
          Rychlá rezervace a dostupnost ihned.
        </p>
        <a href="vyber-aut" className="cars-page-cta-button">Nabídka vozů</a>
      </div>
      
      <div className="cars-page-right-section">
        <div className="cars-page-list">
          {cars.map((car, index) => (
            <div key={index} className="cars-page-card">
              <img src={car.image} alt={car.name} />
              <h3 className="cars-page-car-name">{car.name}</h3>
              <p className="cars-page-car-description">{car.description}</p>
            </div>
          ))}
        </div>
        <div className="cars-page-dots">
          <span className="cars-page-dot active"></span>
          <span className="cars-page-dot"></span>
          <span className="cars-page-dot"></span>
        </div>
      </div>
    </div>
  );
};

export default CarsPage;
