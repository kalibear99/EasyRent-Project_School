import React from "react";
import "../../css/YourReservations.css?v=1";

const YourReservations = () => {
  const reservations = [
    {
      id: 1,
      car: "Toyota Corolla",
      date: "2025-03-20",
      pricePerDay: 1000,
      days: 3,
    },
    {
      id: 2,
      car: "BMW 320i",
      date: "2025-03-22",
      pricePerDay: 1500,
      days: 2,
    },
    {
      id: 3,
      car: "Audi A4",
      date: "2025-03-25",
      pricePerDay: 1200,
      days: 5,
    },
  ];

  const calculateTotalPrice = (reservation) => {
    return reservation.pricePerDay * reservation.days;
  };

  const totalPrice = reservations.reduce(
    (total, reservation) => total + calculateTotalPrice(reservation),
    0
  );

  return (
    <div className="your-reservations-page-container">
      <h1 className="your-reservations-title">Vaše Rezervace</h1>
      <div className="your-reservations-underline"></div>

      <div className="your-reservations-list">
        {reservations.length > 0 ? (
          reservations.map((reservation) => (
            <div key={reservation.id} className="your-reservation-item">
              <div className="your-reservation-header">
                <h2 className="your-car-name">{reservation.car}</h2>
                <span className="your-reservation-date">{reservation.date}</span>
              </div>
              <div className="your-reservation-details">
                <p>Cena za den: <strong>{reservation.pricePerDay} Kč</strong></p>
                <p>Počet dní: <strong>{reservation.days}</strong></p>
                <p>
                  <strong>Celková cena: {calculateTotalPrice(reservation)} Kč</strong>
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-reservations-text">Nemáte žádné rezervace.</p>
        )}
      </div>

      <div className="your-total-price">
        <p><strong>Celková cena za všechny rezervace: {totalPrice} Kč</strong></p>
      </div>

      <button className="your-pay-button">Zaplatit</button>
    </div>
  );
};

export default YourReservations;
