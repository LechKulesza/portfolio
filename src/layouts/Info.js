import React from "react";
import "../style/Info.sass";
import img1 from "../images/me.jpg";
import imgHtml from "../images/tools/html5.png";
import imgCss from "../images/tools/css3.png";
import imgSass from "../images/tools/sass.png";
import imgJs from "../images/tools/js.png";
import imgBootstrap from "../images/tools/bootstrap.png";
import imgReact from "../images/tools/react.png";
import imgJquery from "../images/tools/jquery.png";
import imgNode from "../images/tools/node.png";
import imgGit from "../images/tools/git.png";
import imgPs from "../images/tools/photoshop.png";
import imgLr from "../images/tools/lightroom.png";
import imgRails from "../images/tools/rails.png";
import imgRedis from "../images/tools/redis.png";
import imgPostgresql from "../images/tools/postresql.png";
import imgMysql from "../images/tools/mysql.png";
import imgDocker from "../images/tools/docker.png";
import imgHeroku from "../images/tools/heroku.png";

const Info = () => {
  return (
    <section className="info">
      <h1>O mnie</h1>
      <div className="wrapImg">
        <img src={img1} alt="Lech Kulesza" />
      </div>
      <section className="paragraph">
        Mam na imię Lech, mam 26 lat, ukończyłem studia magisterskie na
        Politechnice Warszawskiej, na kierunku i wydziale Mechatronika. <br />
        <br />
        Jestem Fullstack Developerem z komercyjnym doświadczeniem od ponad 4
        lat. Pracowałem nad wieloma projektami od prostych stron internetowych
        po zaawansowane aplikacje mobilne (
        <a
          target="_blank"
          href="https://www.tdcm.io/portfolio"
          rel="noreferrer"
        >
          TDCM.io protfolio
        </a>
        ). Cały czas rozwijam się w dziedzinie web oraz mobile developmentu
        pracując i tworząc niesamowite projekty. Staram się być na bieżąco z
        najnowszymi trendami w świecie web developerów oraz wdrażać je do swoich
        projektów. Pragnę zdobywać nowe umiejętności związane zarówno z
        Frontend’em jak i Backend’em. Znam i w moich projektach posługuję się
        takimi narzędziami jak:
        <ul className="tools">
          <li>
            <img src={imgHtml} alt="html" />
            <span>HTML5</span>
          </li>
          <li>
            <img src={imgCss} alt="html" />
            <span>CSS3</span>
          </li>
          <li>
            <img src={imgSass} alt="html" />
            <span>SASS</span>
          </li>
          <li>
            <img src={imgJs} alt="html" />
            <span>JavaScript ES6</span>
          </li>
          <li>
            <img src={imgBootstrap} alt="html" />
            <span>Bootstrap</span>
          </li>
          <li>
            <img src={imgReact} alt="html" />
            <span>React.js</span>
          </li>
          <li>
            <img src={imgReact} alt="html" />
            <span>React Native</span>
          </li>
          <li>
            <img src={imgJquery} alt="html" />
            <span>jQuery</span>
          </li>
          <li>
            <img src={imgNode} alt="html" />
            <span>Node.js</span>
          </li>
          <li>
            <img src={imgRails} alt="html" />
            <span>Ruby on Rails</span>
          </li>
          <li>
            <img src={imgRedis} alt="html" />
            <span>Redis</span>
          </li>
          <li>
            <img src={imgPostgresql} alt="html" />
            <span>PostgreSQL</span>
          </li>
          <li>
            <img src={imgMysql} alt="html" />
            <span>MySQL</span>
          </li>
          <li>
            <img src={imgDocker} alt="html" />
            <span>Docker</span>
          </li>
          <li>
            <img src={imgHeroku} alt="html" />
            <span>Heroku</span>
          </li>
          <li>
            <img src={imgGit} alt="html" />
            <span>Git</span>
          </li>
          <li>
            <img src={imgPs} alt="html" />
            <span>Photoshop</span>
          </li>
          <li>
            <img src={imgLr} alt="html" />
            <span>Lightroom</span>
          </li>
        </ul>
        Poza tworzeniem aplikacji internetowych w wolnym czasie jeżdżę na
        snowboardzie, gram w piłkę nożną, pływam po jeziorach i morzach oraz
        gram na gitarze i na pianinie.
        <br />
        <br />
        Zapraszam do kontaktu i współpracy!
      </section>
    </section>
  );
};

export default Info;
