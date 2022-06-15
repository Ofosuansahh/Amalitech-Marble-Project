import React, { useContext } from "react";
import "./Works.css";
import earth1 from "../../img/earth1.png";
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
const Works = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-right">
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={earth1}
          alt="earth"
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

      <div className="i-left">
        <form className="form">
          <input type="radio" id="purple" />
          <input type="radio" id="white" />
        </form>
        <div className="i-names">
          <span>Build a climate</span>
          <span>Company</span>
          <span className="com">
          Over 9 months, you will work with us to uncover high-impact opportunities 
          and shape the most promising idea into a new venture.
          </span><br />
          <span className="com">
          Receive funding, mentorship, hands-on support, access to an unparalleled 
          pool of experts, potential co-founders and advisors.
          </span><br />
          <span className="com">
          If you succeed, we become your first investor and help you raise a seed round.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button n-button">How it works<img  src={arrowRight}/></button>
        </Link>
      
      </div>
    </div>
  );
};

export default Works;
