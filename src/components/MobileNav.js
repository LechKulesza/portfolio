import React from "react";
import "../style/MobileNav.sass";

const MobileNav = () => {
  return (
    <div className="mobileNavBar">
      <span>Lech Kulesza</span>
      <button className="open close" />
    </div>
  );
};

export default MobileNav;
