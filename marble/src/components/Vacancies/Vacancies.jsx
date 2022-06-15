import React, { useContext } from "react";
import "./Vacancies.css";
import arrowWhite from "../../img/arrowWhite.svg";
import { Link } from "react-scroll";

const Vacancies = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  return (
    <div className="Vacancy" id="Intro">
        <div className="line"></div>
        <div className="i-lefts-2">
            <div className="i-names-2">
                <span>Dream Job Seekers</span>
                <span>Looking for a role at Marble on the programme side?</span>
            </div>
        </div>


      {/* left name side */}
      <div className="i-right-s-2">
        <Link to="contact" smooth={true} spy={true}>
          <button className="button s-button">see open Vacancies<img  src={arrowWhite}/></button>
        </Link>

      </div>
    </div>
  );
};

export default Vacancies;
