import React, { useContext } from "react";
import "./Newsletter.css";
import arrowWhite from "../../img/arrowWhite.svg";
import { Link } from "react-scroll";


const Newsletter = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };




  return (
    <div className="Newsletter" id="Intro">
        <div className="i-lefts-2">
            <div className="i-names-2">
                <span>Scientists & Professors</span>
                <span>Interested in research collaborations and to refer talent?</span>
            </div>
        </div>

      {/* left name side */}
      <div className="i-right-s-2">
        <Link to="contact" smooth={true} spy={true}>
          <button className="button s-button">lets talk science<img  src={arrowWhite}/></button>
        </Link>
      </div>
      
    </div>

    
  );
};

export default Newsletter;
