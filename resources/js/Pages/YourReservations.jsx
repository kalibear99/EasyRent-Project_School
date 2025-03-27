import React, { useEffect, useState } from "react";
import "../../css/YourReservations.css?v=1";
import axios from "axios";

const YourReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [userId, setUserId] = useState(null);  

  useEffect(() => {
    axios.get("/api/reservations", { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } })
      .then((response) => {
        console.log("Data z API:", response.data);
        setReservations(response.data);
      })
      .catch((error) => console.error("Chyba při načítání rezervací:", error));
  }, []);
  
  
  const handlePayment = async (reservation) => {
    try {
      const response = await axios.put(`/api/reservations/${reservation.id}`, {
        status: "paid"
      }, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
  
      alert("Rezervace byla zaplacena!");
      setReservations((prevReservations) =>
        prevReservations.map((r) => (r.id === reservation.id ? { ...r, status: "paid" } : r))
      );
    } catch (error) {
      console.error("Chyba při platbě:", error);
      alert("Nepodařilo se zaplatit rezervaci.");
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
              <h2>{reservation.car.name}</h2>
              <p>{reservation.pickup_datetime} - {reservation.return_datetime}</p>
              <p>Celková cena: {reservation.total_price} Kč</p>
              <p>Status: {reservation.status}</p>
              {reservation.status === "pending" && (
                <button onClick={() => handlePayment(reservation)}>Zaplatit</button>
              )}
            </div>
          ))
        ) : (
          <p>Nemáte žádné rezervace.</p>
        )}
      </div>
    </div>
  );
};

export default YourReservations;
