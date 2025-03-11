import React, { useState } from "react";
import { router } from "@inertiajs/react"; 
import "../../css/CarCards.css";
import carImage1 from "../../assets/car.png";
import calendarImage from "../../assets/calendar.png";
import sortImage from "../../assets/sort.png";
import MainLayout from "@/Layouts/MainLayout";
import bmwX5 from "../../assets/bmw-x5.png"


const cars = [
  { id: "bmw-x5", name: "BMW X5", price: "1500kč/den", image: bmwX5, description: "Luxusní SUV, které nabízí vysoký komfort a výkon." },
  { id: "audi-q7", name: "Audi Q7", price: "1800kč/den", image: carImage1, description: "Skvěle vybavené SUV, ideální pro rodinné výlety." },
  { id: "mercedes-gle", name: "Mercedes-Benz GLE", price: "2200kč/den", image: carImage1, description: "Prémiové SUV s výjimečným výkonem." },
  { id: "ford-kuga", name: "Ford Kuga", price: "1600kč/den", image: carImage1, description: "Moderní SUV s nízkou spotřebou a prostorným interiérem." },
  { id: "volkswagen-tiguan", name: "Volkswagen Tiguan", price: "1700kč/den", image: carImage1, description: "Komfortní a spolehlivé SUV ideální pro rodinu." },
  { id: "acura-rdx", name: "Acura RDX", price: "2000kč/den", image: carImage1, description: "Stylové a sportovní SUV, které nabízí výjimečný výkon a pohodlí." },
];

const CarCards = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleReservation = (id) => {
    router.visit(`/vyber-aut/${id}`);
  };

  return (
    <MainLayout>
      <div className="container">
        <h1>Výběr našich vozidel</h1>
        <p className="subtext">Dostupných vozidel: {cars.length}</p>

        <div className="sort-button-container">
          <button className="sort-button" onClick={toggleDropdown}>
            <img src={sortImage} alt="Sort" className="sort-icon" />
            Seřadit podle: Doporučeno
          </button>

          {isDropdownOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-item">Doporučeno</div>
              <div className="dropdown-item">Nejlevnější</div>
              <div className="dropdown-item">Nejdražší</div>
            </div>
          )}
        </div>

        <div className="filters">
          <span>Značka ▼</span>
          <span>Model ▼</span>
          <span>Palivo ▼</span>
          <span>Karoserie ▼</span>
        </div>

        <div className="carcards-car-list">
          {cars.map((car) => (
            <div key={car.id} className="car-card">
              <img src={car.image} alt={car.name} />
              <div className="car-info">
                <h3>{car.name}</h3>
                <p className="price">{car.price}</p>
              </div>
              <p className="description">{car.description}</p>
              <div className="reserve-container">
                <button className="reserve-button" onClick={() => handleReservation(car.id)}>
                  Rezervovat
                </button>
                <div className="calendar-icon">
                  <img src={calendarImage} alt="Kalendář" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default CarCards;