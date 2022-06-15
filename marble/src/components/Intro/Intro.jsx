import React, { useContext } from "react";
import "./Intro.css";
import arrowRight from "../../img/arrowRight.svg";
import downChevron from "../../img/downChevron.svg";
import { Link } from "react-scroll";
const Intro = () => {


  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
        
          <span>Solve hard</span>
          <span>Climate problems</span>
          <span>
            <p>we partner with scientits, engineers and operators to build deeptech</p>
            <p className="start">startups that slash emisions, remove carbon and cool the planet.</p>
          </span>
        </div>

        <div className="btn-1">
          <Link to="contact" smooth={true} spy={true}>
            <button className="button n-button">Apply Now<img  src={arrowRight}/></button>
          </Link>

          <Link to="Works" smooth={true} spy={true}>
            <button className="button r-button"><img  src={downChevron} width="10px" height={"20px"}/></button>
          </Link>
        </div>
        

      
      </div>
     
    </div>
  );
};

export default Intro;
