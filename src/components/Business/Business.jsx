import React, { useContext } from "react";
import "./Business.css";
import arrowWhite from "../../img/arrowWhite.svg";
import { Link } from "react-scroll";

const Business = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };



  return (
    <div className="Business" id="Intro">
        <div className="line"></div>
        <div className="i-lefts-2">
            <div className="i-names-2">
                <span>Cooperates & Investors</span>
                <span>Interested in partnering to tackle hard climate problems?</span>
            </div>
        </div>


      {/* left name side */}
      <div className="i-right-s-2">
        <Link to="contact" smooth={true} spy={true}>
          <button className="button s-button">lets talk business<img  src={arrowWhite}/></button>
        </Link>

      </div>
    </div>
  );
};

export default Business;
