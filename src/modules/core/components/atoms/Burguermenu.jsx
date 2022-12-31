import React from "react";
import "./burguermenu.css";

function Burguermenu(props) {
  return (
    <div className="pr-3 z-10">
      <div
        onClick={props.handdleClick}
        className={`icon nav-icon-5 ${props.nav ? "open" : ""}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Burguermenu;
