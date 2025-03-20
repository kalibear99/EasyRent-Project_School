import React from "react";
import "../../css/Onas.css";
import onasBackground from "../../assets/onas_background.png";
import teamMember from "../../assets/team_members.png";
import VideoPage from "./VideoPage";
import MainLayout from "@/Layouts/MainLayout";
import Button from "@/Components/Button";
import "../../css/app.css";

const Onas = () => {

  return (
    <MainLayout>
      <div className="onas-container">
        <div className="hero-section" style={{ backgroundImage: `url(${onasBackground})` }}>
          <h1 className="hero-title">Kdo jsme?</h1>
          <p className="hero-text">
            Jsme půjčovna aut, která si zakládá na kvalitních službách, férových cenách a
            spokojenosti zákazníků. Ať už potřebujete auto na víkendový výlet, pracovní
            cestu, nebo delší dobu, jsme tu pro vás.
          </p>
        </div>

        <div className="content-section">
          <h2 className="content-title">Jak jsme začínali</h2>
          <div className="underline-start"></div>
          <p className="content-text">
            Naše cesta začala v roce 2024, kdy jsme si všimli, že lidé často hledají spolehlivá a
            kvalitní auta k pronájmu, ale naráží na omezené možnosti a komplikované podmínky. 
            Viděli jsme příležitost vytvořit službu, která bude odlišná – jednoduchá, přívětivá 
            a dostupná pro každého. Naším cílem bylo odstranit zbytečné překážky a nabídnout 
            půjčovnu, která bude stavět na spolehlivosti, férových cenách a nadstandardním 
            zákaznickém servisu. Od prvního dne jsme chtěli, aby každý, kdo se rozhodne využít 
            naše služby, měl pocit, že je na správném místě.
          </p>
          <p className="content-text">
            Dnes jsme hrdí na to, že jsme se stali důvěryhodným partnerem pro stovky zákazníků, 
            kteří se k nám rádi vracejí. Ať už potřebujete auto na rodinnou dovolenou, pracovní 
            cestu, nebo jen chcete něco spolehlivého na pár dní, jsme tu, abychom vám pomohli 
            vyrazit bez starostí.
          </p>
        </div>

        
        <div className="center-button">
          <a href="/vyber-aut">
            <Button className="underline-btn">
              Nabídka vozů
            </Button>
          </a>
        </div>

        
        <VideoPage />

        
        <div className="team-section">
          <h2 className="team-title">Tým</h2>
          <div className="underline"></div>
          <div className="team-container">
            
            <div className="team-member">
              <img src={teamMember} alt="Petr Mára" className="team-image" />
              <div className="team-info">
                <h3>Petr Mára</h3>
                <p>Majitel společnosti</p>
                <a href="mailto:petrmara@easyrent.com">petrmara@easyrent.com</a>
              </div>
            </div>

            
            <div className="team-member">
              <img src={teamMember} alt="Petr Mára" className="team-image" />
              <div className="team-info">
                <h3>Petr Mára</h3>
                <p>Majitel společnosti</p>
                <a href="mailto:petrmara@easyrent.com">petrmara@easyrent.com</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </MainLayout>
  );
};

export default Onas;
