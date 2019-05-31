import React from "react";
import "../style/Info.sass";
import img1 from "../images/me.jpg";

const Info = () => {
  return (
    <section className="info">
      <h1>O mnie</h1>
      <div className="wrapImg">
        <img src={img1} alt="Lech Kulesza" />
      </div>
      <p>
        Cześć! <br />
        <br />
        Nazywam się Lech, mam 22 lata, jestem studentem na 3 roku Politechniki
        Warszawskiej, na kierunku i wydziale Mechatronika, specjalność Techniki
        Multimedialne. <br />
        <br />
        Żywo interesuję się tworzeniem stron internetowych i chciałbym dalej
        rozwijać się w tej dziedzinie pracując i tworząc niesamowite projekty.
        Staram się być na bierząco z najnowszymi trendami w świecie web
        developerów oraz wdrażać je do swoich projektów. Ciągle się uczę i
        pragnę zdobywać nowe umiejętności związane zarówno z Frontend’em jak i
        Backend’em. Swoje aplikacje opieram na językach HTML5, CSS3 oraz
        JavaScript z wykorzystaniem bibliotek takich jak: React.js, Node.js,
        jQuery czy Bootstrap. <br />
        <br />
        Poza tworzeniem aplikacji internetowych w wolnym czasie jeżdżę na
        snowboardzi, gram w piłkę nożną, pływam po jeziorach i morzach oraz gram
        na gitarze i trochę na pianinie. <br />
        <br />
        Zapraszam do kontaktu i współpracy :)
      </p>
    </section>
  );
};

export default Info;
