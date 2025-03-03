import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import "resources/css/HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="overlay">
        <h1>Vaše auto, vaše cesta</h1>
        <p>
          Od malých aut do města až po prostorná SUV na víkendové výlety – najdete u nás to pravé. 
          Rezervace je snadná a rychlá, abyste mohli vyrazit bez zbytečných starostí.
        </p>
        <Button className="underline-btn" onClick={() => navigate("/cars")}>
          Nabídka vozů
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
