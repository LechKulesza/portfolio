import React from "react";
import "../style/Baner.sass";
import img1 from "../images/baner.jpg";

const Baner = () => {
  return (
    <div className="baner">
      <img src={img1} alt="baner" />
    </div>
  );
};

export default Baner;
