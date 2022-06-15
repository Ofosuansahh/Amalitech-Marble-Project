import React, { useContext } from "react";
import "./ReachUs.css";
import arrowWhite from "../../img/arrowWhite.svg";
import { Link } from "react-scroll";

const ReachUs = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  return (
    <div className="ReachUs" id="Intro">
        <div className="line"></div>
        <div className="i-lefts-2">
            <div className="i-names-2">
                <span>Stay In touch</span>
                <span>Want to keep up to date with our work?</span>
            </div>
        </div>


      {/* left name side */}
      <div className="i-right-s-2-1">
        <Link to="contact" smooth={true} spy={true}>
          <button className="button s-button">signup to our newsletter<img  src={arrowWhite}/></button>
        </Link>

      </div>
    </div>
  );
};

export default ReachUs;
