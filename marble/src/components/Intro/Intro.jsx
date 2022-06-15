import React, { useContext } from "react";
import "./Intro.css";
import arrowRight from "../../img/arrowRight.svg";
import downChevron from "../../img/downChevron.svg";
// import glassesimoji from "../../img/glassesimoji.png";
// import thumbup from "../../img/thumbup.png";
// import crown from "../../img/crown.png";
// import FloatinDiv from "../FloatingDiv/FloatingDiv";
// import { themeContext } from "../../Context";
// import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
//   const transition = { duration: 2, type: "spring" };

  // context
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
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

          <Link to="contact" smooth={true} spy={true}>
            <button className="button r-button"><img  src={downChevron} width="10px" height={"20px"}/></button>
          </Link>
        </div>
        

      
      </div>
     
    </div>
  );
};

export default Intro;
