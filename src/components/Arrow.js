import React from "react";
import "../style/Arrow.sass";

const Arrow = props => {
  return (
    <div
      onClick={props.handleClick}
      className={props.show ? "arrow show" : "arrow"}
    >
      <i className="fas fa-angle-up" />
    </div>
  );
};

export default Arrow;
