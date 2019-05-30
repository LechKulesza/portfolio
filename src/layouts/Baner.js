import React from "react";
import "../style/Baner.sass";
import img1 from "../images/baner.jpg";

const Baner = props => {
  return (
    <section className="baner">
      <img src={img1} alt="baner" />
      <span className="title">
        <h1 className={props.go || props.showNavTitle ? null : "center"}>
          Lech Kulesza
        </h1>
        <h2 className={props.go || props.showNavTitle ? null : "center"}>
          Web Developer
        </h2>
      </span>
      <a
        tabIndex="-1"
        className={props.showNavTitle ? "hide" : null}
        href="#info"
        onClick={props.handleClick}
      >
        <i className="fas fa-angle-down" />
      </a>
    </section>
  );
};

export default Baner;
