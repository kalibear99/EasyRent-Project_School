import React from 'react';
import "../../css/TermsAndConditions.css"; 


const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <h1 className="terms-title">Obchodní Podmínky</h1>
      <div className="terms-content">
        <section className="terms-section">
          <h2>1. Úvod</h2>
          <p>Tyto obchodní podmínky (dále jen "podmínky") se vztahují na všechny transakce, které probíhají na webových stránkách společnosti EasyRent (dále jen "společnost").</p>
        </section>
        <section className="terms-section">
          <h2>2. Rezervace vozidel</h2>
          <p>Rezervace vozidel je možná prostřednictvím našeho webu. Po odeslání rezervace obdržíte potvrzení na uvedený e-mail.</p>
        </section>
        <section className="terms-section">
          <h2>3. Platba a Ceny</h2>
          <p>Ceny za pronájem vozidel jsou uvedeny na našich stránkách a jsou uvedeny bez DPH. Platba je možná prostřednictvím bankovního převodu nebo kreditní kartou.</p>
        </section>
        <section className="terms-section">
          <h2>4. Zrušení rezervace</h2>
          <p>Pokud chcete zrušit svou rezervaci, kontaktujte nás alespoň 24 hodin předem. Zrušení po této lhůtě může být zpoplatněno.</p>
        </section>
        <section className="terms-section">
          <h2>5. Odpovědnost</h2>
          <p>Společnost nenese odpovědnost za škody způsobené nesprávným použitím pronajatého vozidla.</p>
        </section>
        <section className="terms-section">
          <h2>6. Závěr</h2>
          <p>Tyto podmínky jsou závazné pro všechny zákazníky využívající naše služby. Pokud máte jakékoliv dotazy, neváhejte nás kontaktovat.</p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
