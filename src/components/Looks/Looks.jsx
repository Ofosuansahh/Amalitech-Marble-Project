import React, { useContext } from "react";
import "./Looks.css";
import earth2 from "../../img/earth2.png";
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

const Looks = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;



  return (
    <div className="Intro" id="Intro">
        <div className="i-lefts">
            <form className="form">
            <input type="radio" id="purple" />
            <input type="radio" id="white" />
            </form>
        <div className="i-names">
          <span>Radicals</span>
          <span>Welcome</span>
          <span>
          Do you believe climate is the only problem worth working on?
          </span><br />
          <span>
          Do you want to start building instead of just publishing?
          </span><br />
          <span>
          Do you dream of founding your own company?
          </span><br />
          <span>
          Find out more about the hard climate problems we want to 
          solve and what we look for in applicants.
          </span><br />
          <span>
          No prior idea required. (but if you have one and people tell you 
          it’s crazy, we’d love to hear it)
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button n-button">What we look for<img  src={arrowRight}/></button>
        </Link>
      
      </div>


      {/* left name side */}
      <div className="i-right-s">
        {/* animation */}
        <motion.img
          initial={{ right: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={earth2}
          alt="img"
          // animate={{ rotate: [12, 0, -12, 0, 12, 0, -12, 0, 12, 0, -12, 0]}}
        />


        {/* <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div> */}

        {/* animation */}
        {/* <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        > */}
          {/* floatinDiv mein change hy dark mode ka */}
          {/* <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
        </motion.div> */}

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        {/* <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div> */}
      </div>
    </div>
  );
};

export default Looks;
