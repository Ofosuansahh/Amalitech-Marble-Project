import React, { useContext } from "react";
import "./Contacts.css";
import arrowRight from "../../img/arrowRight.svg";

const Contacts = () => {
  // Transition
  const transition = { duration: 2, type: "spring" }

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
