import React, { useContext } from "react";
import "./Newsletter.css";
import arrowWhite from "../../img/arrowWhite.svg";
// import boy from "../../img/boy.png";
// import glassesimoji from "../../img/glassesimoji.png";
// import thumbup from "../../img/thumbup.png";
// import crown from "../../img/crown.png";
// import FloatinDiv from "../FloatingDiv/FloatingDiv";
// import Github from "../../img/github.png";
// import LinkedIn from "../../img/linkedin.png";
// import Instagram from "../../img/instagram.png";
// import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

// constructor(props) {
//   super(props);
//   this.state = {
//    speed: 3
//   }
// }

const Newsletter = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;



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