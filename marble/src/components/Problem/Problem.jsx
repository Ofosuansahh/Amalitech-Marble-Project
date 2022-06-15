import React, { useContext } from "react";
import "./Problem.css";
import anim2 from "../../img/anim2.mp4";
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

const Problem = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;



  return (
    <div className="Problem" id="Intro">
        <div className="myVideo1">
            <video playsinline autoplay="true" muted loop poster width={1515}>
                <source src={anim2} type="video/mp4"/>
            </video>
        </div>
        <div className="i-lefts-3">
        <div className="i-names-3">
          <span>Ready to Work</span>
          <span>on the Biggest</span>
          <span>Problems of all</span>
          <span>Time?</span>
        </div>
        
      
      </div>


      {/* left name side */}
      <div className="i-right-s-3">
        <p>We are freaked out about climate change — but we are </p>
        <p className="com">optimists. With the right people, building the right solutions,</p>
        <p className="com">we can get to net zero in time. Reshape entire industries</p>
        <p className="com">And cool the planet.</p>
        <p>This decade is the inflection point. What are you waiting for?</p>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button n-button">apply now<img  src={arrowRight}/></button>
        </Link>
      </div>
    </div>
  );
};

export default Problem;
