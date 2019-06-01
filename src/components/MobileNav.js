import React from "react";
import "../style/MobileNav.sass";

const MobileNav = props => {
  return (
    <div className={props.showNavTitle ? "mobileNavBar show" : "mobileNavBar"}>
      <span className={props.showNavTitle ? "show" : null}>Lech Kulesza</span>
      <button onClick={props.handleClickNavMobile} className="open" />
    </div>
  );
};

export default MobileNav;
