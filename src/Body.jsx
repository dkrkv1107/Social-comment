import React from "react";
import "./body.css";
import Vector from "./Vector";
import logo2 from "./images/amazon-logo.png";
import logo3 from "./images/google-logo.png";
import logo4 from "./images/skrill-logo.png";

function Body() {
  return (
    <div className="info">
      <Vector />
      <div className="footer">
        Integrations
        <img className="amazon" src={logo2} alt="amazon-logo" />
        <img className="amazon" src={logo3} alt="google-logo" />
        <img className="amazon" src={logo4} alt="google-logo" />
      </div>
    </div>
  );
}

export default Body;
