import React, { useContext } from "react";
import "./Reverse.css";


const Reverse = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };


  return (
    <div className="Reverse" id="Intro">
        <div className="i-lefts-1">
            <form className="form">
            <input type="radio" id="purple" />
            <input type="radio" id="white" />
            </form>
        <div className="i-names-1">
          <span>Help us Reverse</span>
          <span>Climate change</span>
        </div>
      
      </div>


      {/* left name side */}
      <div className="i-right-s-1">
          <p>We are assembling a network of leading experts, partners</p>
          <p className="com">and top talent to support our Founders in their mission to</p>
          <p className="com">heal the planet.</p>
      </div>
    </div>
  );
};

export default Reverse;
