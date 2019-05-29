import React from "react";
import "../style/Footer.sass";

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <span className="tel">
          Tel: <i>+48</i> 500 192 266
        </span>
        <span className="mailFooter">
          <a href="mailto: lmkulesz@icloud.com">lmkulesz@icloud.com</a>
        </span>
        <span className="copyFooter">&#9400; Copyright 2019 Lech Kulesza</span>
      </div>
    </footer>
  );
};

export default Footer;
