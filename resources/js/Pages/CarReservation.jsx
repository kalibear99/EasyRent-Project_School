import React, { useState, useEffect } from "react";
import { usePage } from "@inertiajs/react";
import axios from "axios";
import "../../css/CarReservation.css";
import calendarIcon from "../../assets/icon_calendar.png";
import clockIcon from "../../assets/icon_clock.png";
import MainLayout from "@/Layouts/MainLayout";
import "../../css/app.css";
import { router } from '@inertiajs/react'

const CarReservation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
      const token = localStorage.getItem('auth_token');
      setIsLoggedIn(!!token);
    }, []);

  const { car } = usePage().props;

  const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0]; 
  };

  const [pickupDate, setPickupDate] = useState(getCurrentDate());
  const [pickupTime, setPickupTime] = useState("13:30");
  const [returnDate, setReturnDate] = useState(getCurrentDate());
  const [returnTime, setReturnTime] = useState("14:50");
  const [days, setDays] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!car) {
    return <div className="loading">Načítání...</div>;
  }

  const totalPrice = days * car.price;

  const handleReservation = async () => {
    if (isSubmitted) return;

    setLoading(true);

    try {
      const pickupDateTime = `${pickupDate} ${pickupTime}:00`;
      const returnDateTime = `${returnDate} ${returnTime}:00`;

      console.log("Odesílám data:", {
        car_id: car.id,
        pickup_datetime: pickupDateTime,
        return_datetime: returnDateTime,
      });

      const response = await axios.post("/api/reservations", {
        car_id: car.id,
        pickup_datetime: pickupDateTime,
        return_datetime: returnDateTime,
      });

      console.log("Odpověď ze serveru:", response);
      alert("Rezervace byla úspěšná!");

      setIsSubmitted(true);
    } catch (error) {
      console.error("Chyba při rezervaci:", error.response?.data || error);
      alert(error.response?.data?.message || "Nastala chyba při rezervaci.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <div>
        <div className="car-reservation-header">Rezervace Vozidla</div>
        <div className="CarReservation-underline"></div>
        <div className="car-reservation-container">
          <div className="car-reservation-overview">
            <h1 className="Price-car-reservation">{car.name}</h1>
            <h3 className="Title-car-reservation">{car.price} Kč/den</h3>
            <img src={car.image} alt={car.name} className="car-reservation-image" />
            <h2 className="car-description-title">Popis Auta</h2>
            <p className="car-reservation-description">{car.description}</p>
          </div>

          <div className="car-reservation-details">
            <h1>Výsledná cena</h1>

            <div className="car-reservation-date-time">
              <div className="car-reservation-date-block">
                <p className="car-reservation-label">Datum převzetí</p>
                <input
                  type="date"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                />
                <input
                  type="time"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                />
              </div>

              <div className="car-reservation-date-block">
                <p className="car-reservation-label">Datum odevzdání</p>
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                />
                <input
                  type="time"
                  value={returnTime}
                  onChange={(e) => setReturnTime(e.target.value)}
                />
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

            {isLoggedIn ? (
              <button
                className="car-reservation-reserve-button"
                onClick={handleReservation}
                disabled={loading || isSubmitted}
                style={{
                  backgroundColor: isSubmitted ? "#ccc" : "#f4a742",
                  cursor: isSubmitted ? "not-allowed" : "pointer",
                }}
              >
                {isSubmitted ? "Rezervováno" : loading ? "Rezervuji..." : "Rezervovat"}
              </button>
            ) : (
              <button
                className="car-reservation-reserve-button"
                style={{ backgroundColor: "#ccc", cursor: "pointer" }}
                onClick={() => router.visit("/login")}
              >
                Jenom pro přihlášené!
              </button>
            )}

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