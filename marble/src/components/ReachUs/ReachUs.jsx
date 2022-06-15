import React, { useContext } from "react";
import "./ReachUs.css";
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

const ReachUs = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;



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
