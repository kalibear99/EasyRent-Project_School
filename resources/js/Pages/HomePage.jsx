import React from "react";
import MainLayout from "../Layouts/MainLayout";
import Button from "../components/Button";
import { Link } from "@inertiajs/react";
import "../../css/HomePage.css";
import CarsPage from "./CarsPage";
import VideoPage from "./VideoPage";
import Benefits from "./Benefits";
import "../../css/app.css";

const HomePage = () => {
  return (
    <MainLayout>
      <div className="home-container">
        <div className="overlay">
          <h1 className="homepage-title">Vaše auto, vaše cesta</h1>
          <p className="homepage-undertitle">
            Od malých aut do města až po prostorná SUV na víkendové výlety – najdete u nás to pravé. 
            Rezervace je snadná a rychlá, abyste mohli vyrazit bez zbytečných starostí.
          </p>
          <Link href="/vyber-aut">
            <Button className="underline-btn">Nabídka vozů</Button>
          </Link>
        </div>
      </div>
      <CarsPage/>
      <VideoPage/>
      <Benefits/>
    </MainLayout>
  );
};

export default HomePage;