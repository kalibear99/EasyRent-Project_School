import React, { useState } from "react";
import { usePage } from "@inertiajs/react";
import "../../css/CarReservation.css";
import calendarIcon from "../../assets/icon_calendar.png";
import clockIcon from "../../assets/icon_clock.png";
import MainLayout from "@/Layouts/MainLayout";

const CarReservation = () => {
  const { car } = usePage().props;
  const [pickupDate, setPickupDate] = useState("20.12.2024");
  const [pickupTime, setPickupTime] = useState("13:30");
  const [returnDate, setReturnDate] = useState("24.12.2024");
  const [returnTime, setReturnTime] = useState("14:50");
  const [days, setDays] = useState(4);
  
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