import React, { useContext } from "react";
import "./Contacts.css";
import arrowRight from "../../img/arrowRight.svg";
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

const Contacts = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;



  return (
    <div className="Contact" id="Intro">
        <div className="i-lefts-up">
        <div className="i-names-up">
          <span>signup to our news letter:</span>
          <form action="#">
            <input type="email" placeholder="ofosuansahh@gmail.com" required/><button><img  src={arrowRight}/></button><br />
            <input type="checkbox" /><span>I have read and accept the <a href="#">Terms</a> & <a href="#">Privacy</a></span>
          </form>
        </div>
      
      </div>
    </div>
  );
};

export default Contacts;
