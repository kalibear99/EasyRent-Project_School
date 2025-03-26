import React, { useEffect, useState } from "react";
import "../../css/YourReservations.css?v=1";
import axios from "axios";

const YourReservations = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    axios.get("/api/reservations", { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } })
      .then((response) => setReservations(response.data))
      .catch((error) => console.error("Chyba při načítání rezervací:", error));
  }, []);

  const calculateTotalPrice = (reservation) => {
    const pickupDate = new Date(reservation.pickup_datetime);
    const returnDate = new Date(reservation.return_datetime);
    const days = Math.ceil((returnDate - pickupDate) / (1000 * 60 * 60 * 24));
    return reservation.car.price * days;
  };

  const handlePayment = async (reservation) => {
    try {
      const response = await axios.post("/api/orders", {
        reservation_id: reservation.id,
        total_price: calculateTotalPrice(reservation),
      }, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });

      alert(response.data.message);
    } catch (error) {
      console.error("Chyba při vytváření objednávky:", error);
      alert("Nepodařilo se vytvořit objednávku.");
    }
  };

  return (
    <div className="your-reservations-page-container">
      <h1 className="your-reservations-title">Vaše Rezervace</h1>
      <div className="your-reservations-underline"></div>

      <div className="your-reservations-list">
        {reservations.length > 0 ? (
          reservations.map((reservation) => (
            <div key={reservation.id} className="your-reservation-item">
              <div className="your-reservation-header">
                <h2 className="your-car-name">{reservation.car.name}</h2>
                <span className="your-reservation-date">{reservation.pickup_datetime} - {reservation.return_datetime}</span>
              </div>
              <div className="your-reservation-details">
                <p>Cena za den: <strong>{reservation.car.price} Kč</strong></p>
                <p>
                  <strong>Celková cena: {calculateTotalPrice(reservation)} Kč</strong>
                </p>
              </div>
              <button className="your-pay-button" onClick={() => handlePayment(reservation)}>
                Zaplatit
              </button>
            </div>
          ))
        ) : (
          <p className="no-reservations-text">Nemáte žádné rezervace.</p>
        )}
      </div>
    </div>
  );
};

export default YourReservations;
