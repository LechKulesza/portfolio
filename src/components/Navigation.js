import React from "react";
import "../style/Navigation.sass";

const Navigation = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navMain">
          <li className="title">
            <a href="index.html">Lech Kulesza</a>
          </li>
          <li>
            <a href="">Strona główna</a>
          </li>
          <li>
            <a href="">O mnie</a>
          </li>
          <li>
            <a href="">Kontakt</a>
          </li>
          <span className="navSocial">
            <li>
              <a
                className="social"
                target="_blank"
                rel="noopener noreferrer"
                href="https://pl-pl.facebook.com/kulkazgumek"
              >
                <i className="fab fa-facebook-square" />
              </a>
            </li>
            <li>
              <a
                className="social"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/kulkazgumek/"
              >
                <i className="fab fa-instagram" />
              </a>
            </li>
          </span>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
