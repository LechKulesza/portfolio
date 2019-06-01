import React from "react";
import "../style/Navigation.sass";

const Navigation = props => {
  return (
    <>
      <nav
        className={
          props.showNavTitle ? "navbar show hideBurger" : "navbar hideBurger"
        }
      >
        <ul className="navMain">
          <li className={props.showNavTitle ? "title show" : "title hide"}>
            <a href="index.html">Lech Kulesza</a>
          </li>
          <li>
            <a onClick={props.handleClick} href="#main">
              Strona główna
            </a>
          </li>
          <li>
            <a onClick={props.handleClick} href="#info">
              O mnie
            </a>
          </li>
          <li>
            <a onClick={props.handleClick} href="#contact">
              Kontakt
            </a>
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
            <li>
              <a
                className="social"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/kulkazgumek"
              >
                <i class="fab fa-github-square" />
              </a>
            </li>
          </span>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
