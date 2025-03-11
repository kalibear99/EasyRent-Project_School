import React, { useEffect, useState } from "react";
import { usePage } from "@inertiajs/react";
import "../../css/CarReservation.css";
import carImage from "../../assets/carreservation.png";
import bmwX5 from "../../assets/bmw-x5.png"
import calendarIcon from "../../assets/icon_calendar.png";
import clockIcon from "../../assets/icon_clock.png";
import MainLayout from "@/Layouts/MainLayout";

const carsData = {
  "bmw-x5": {
    id: "bmw-x5",
    name: "BMW X5",
    price: 1500,
    image: bmwX5,
    description: "Luxusní SUV, které nabízí vysoký komfort a výkon.",
    brand: "BMW",
    model: "X5",
    year: 2023,
    category: "SUV",
    seats: 5,
    color: "Černá",
    fuel: "Benzín",
    engine: "3000 ccm",
    power: "195 kW",
    transmission: "Automat",
    deposit: 40000
  },
  "audi-q7": {
    id: "audi-q7",
    name: "Audi Q7",
    price: 1800,
    image: carImage,
    description: "Skvěle vybavené SUV, ideální pro rodinné výlety.",
    brand: "Audi",
    model: "Q7",
    year: 2022,
    category: "SUV",
    seats: 7,
    color: "Modrá",
    fuel: "Nafta",
    engine: "3000 ccm",
    power: "210 kW",
    transmission: "Automat",
    deposit: 45000
  },
  "mercedes-gle": {
    id: "mercedes-gle",
    name: "Mercedes-Benz GLE",
    price: 2200,
    image: carImage,
    description: "Prémiové SUV s výjimečným výkonem.",
    brand: "Mercedes-Benz",
    model: "GLE",
    year: 2023,
    category: "SUV",
    seats: 5,
    color: "Stříbrná",
    fuel: "Benzín",
    engine: "3500 ccm",
    power: "230 kW",
    transmission: "Automat",
    deposit: 50000
  },
  "ford-kuga": {
    id: "ford-kuga",
    name: "Ford Kuga",
    price: 1600,
    image: carImage,
    description: "Moderní SUV s nízkou spotřebou a prostorným interiérem.",
    brand: "Ford",
    model: "Kuga",
    year: 2022,
    category: "SUV",
    seats: 5,
    color: "Červená",
    fuel: "Nafta",
    engine: "2000 ccm",
    power: "140 kW",
    transmission: "Manuál",
    deposit: 35000
  },
  "volkswagen-tiguan": {
    id: "volkswagen-tiguan",
    name: "Volkswagen Tiguan",
    price: 1700,
    image: carImage,
    description: "Komfortní a spolehlivé SUV ideální pro rodinu.",
    brand: "Volkswagen",
    model: "Tiguan",
    year: 2022,
    category: "SUV",
    seats: 5,
    color: "Šedá",
    fuel: "Nafta",
    engine: "2000 ccm",
    power: "150 kW",
    transmission: "Automat",
    deposit: 38000
  },
  "acura-rdx": {
    id: "acura-rdx",
    name: "Acura RDX",
    price: 2000,
    image: carImage,
    description: "Stylové a sportovní SUV, které nabízí výjimečný výkon a pohodlí.",
    brand: "Acura",
    model: "RDX",
    year: 2023,
    category: "SUV",
    seats: 5,
    color: "Bílá",
    fuel: "Nafta",
    engine: "2200 ccm",
    power: "142 kW",
    transmission: "Automat",
    deposit: 45000
  }
};

const CarReservation = () => {
  const { carId } = usePage().props;
  const [car, setCar] = useState(null);
  const [pickupDate, setPickupDate] = useState("20.12.2024");
  const [pickupTime, setPickupTime] = useState("13:30");
  const [returnDate, setReturnDate] = useState("24.12.2024");
  const [returnTime, setReturnTime] = useState("14:50");
  const [days, setDays] = useState(4);
  
  useEffect(() => {
    if (carId && carsData[carId]) {
      setCar(carsData[carId]);
    } else {
      setCar(carsData["acura-rdx"]);
      console.error(`Vozidlo s ID ${carId} nebylo nalezeno`);
    }
  }, [carId]);

  if (!car) {
    return <div className="loading">Načítání...</div>;
  }

  const totalPrice = days * car.price;

  return (
    <MainLayout>
    <div>
      <div className="car-reservation-header">
        Rezervace Vozidla
      </div>

      <div className="car-reservation-container">
        <div className="car-reservation-overview">
          <h1 className="Price-car-reservation">{car.name}</h1>
          <h3 className="Title-car-reservation">{car.price}kč/den</h3>
          <img src={car.image} alt={car.name} className="car-reservation-image" />
          <h2 className="car-description-title">Popis Auta</h2>
          <p className="car-reservation-description">
            {car.description}
          </p>
        </div>

        <div className="car-reservation-details">
          <h1>Výsledná cena</h1>

          <div className="car-reservation-date-time">
            <div className="car-reservation-date-block">
              <p className="car-reservation-label">Datum převzetí</p>
              <div className="car-reservation-date-time-box">
                <img src={calendarIcon} alt="Kalendář" />
                <span>{pickupDate}</span>
                <img src={clockIcon} alt="Hodiny" />
                <span>{pickupTime}</span>
              </div>
            </div>

            <div className="car-reservation-date-block">
              <p className="car-reservation-label">Datum odevzdání</p>
              <div className="car-reservation-date-time-box">
                <img src={calendarIcon} alt="Kalendář" />
                <span>{returnDate}</span>
                <img src={clockIcon} alt="Hodiny" />
                <span>{returnTime}</span>
              </div>
            </div>
          </div>

          <div className="car-reservation-summary">
            <p><span className="car-reservation-light-text">Počet dní:</span> {days}</p>
            <p><span className="car-reservation-light-text">Cena:</span> {totalPrice.toLocaleString()} Kč</p>
            <p><span className="car-reservation-light-text">DPH:</span> 21%</p>
            <p>
              <span className="car-reservation-light-text">Příplatek:</span> Pokud auto nebude dovezeno ve stanoveném časovém rozmezí, bude do výsledné částky zaúčtováno{" "}
              <span className="car-reservation-bold-text">1500 Kč</span>
            </p>
          </div>

          <button className="car-reservation-reserve-button">Rezervovat</button>

          
          <div className="car-reservation-info">
            <div className="car-reservation-info-grid">
              <p><span className="car-reservation-bold-text">Značka:</span> <span className="car-reservation-orange-text">{car.brand}</span></p>
              <p><span className="car-reservation-bold-text">Model:</span> {car.model}</p>
              <p><span className="car-reservation-bold-text">Rok výroby:</span> {car.year}</p>
              <p><span className="car-reservation-bold-text">Třída:</span> <span className="car-reservation-orange-text">{car.category}</span></p>
              <p><span className="car-reservation-bold-text">Počet míst:</span> {car.seats}</p>
              <p><span className="car-reservation-bold-text">Barva:</span> {car.color}</p>
              <p><span className="car-reservation-bold-text">Palivo:</span> {car.fuel}</p>
              <p><span className="car-reservation-bold-text">Obsah:</span> {car.engine}</p>
              <p><span className="car-reservation-bold-text">Výkon:</span> {car.power}</p>
              <p><span className="car-reservation-bold-text">Řazení:</span> {car.transmission}</p>
              <p className="car-reservation-deposit">Vratná kauce od <span className="car-reservation-bold-text">{car.deposit.toLocaleString()} Kč</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </MainLayout>
  );
};

export default CarReservation;