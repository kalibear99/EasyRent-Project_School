import React from "react";
import "../../css/Benefits.css";
import carsPicture from "../../assets/cars_picture.png";
import dots from "../../assets/dots.png";
import icon1 from "../../assets/1.png";
import icon2 from "../../assets/2.png";
import icon3 from "../../assets/3.png";
import icon4 from "../../assets/4.png";
import "../../css/app.css";

const Benefits = () => {
  return (
    <section className="benefits">
      <div className="benefits-container">
        <div className="benefits-image">
          <img src={carsPicture} alt="Výběr aut" />
          <img src={dots} alt="Dekorace" className="dots" />
        </div>

        <div className="benefits-content">
          <h2 className="benefits-title">Výhody, které oceníte</h2>
          <div className="benefits-underline"></div>

          <div className="benefit-items">
            <div className="benefit-item">
              <div className="icon-box">
                <img src={icon1} alt="Auto ikona" />
              </div>
              <p>Naše vozidla procházejí pravidelnými kontrolami a údržbou, abychom zajistili, že budou vždy v perfektním technickém stavu. </p>
            </div>
            <div className="benefit-item">
              <div className="icon-box">
                <img src={icon2} alt="Nastavení ikona" />
              </div>
              <p>S námi je půjčení auta rychlé a jednoduché. Díky efektivnímu systému rezervace můžete auto převzít během několika minut.</p>
            </div>
            <div className="benefit-item">
              <div className="icon-box">
                <img src={icon3} alt="Lokace ikona" />
              </div>
              <p>Naše služby jsou pravidelně hodnoceny velmi pozitivně. Mnozí naši zákazníci oceňují nejen kvalitu našich vozidel, ale také vynikající zákaznický servis.</p>
            </div>
            <div className="benefit-item">
              <div className="icon-box">
                <img src={icon4} alt="Hodnocení ikona" />
              </div>
              <p>Naše vozidla jsou dostupná na různých místech, a to jak v městských oblastech, tak v turistických destinacích.</p>
            </div>
          </div>

          <div className="separator"></div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
