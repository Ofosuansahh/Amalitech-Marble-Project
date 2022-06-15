import React from "react";
// import Toggle from "../Toggle/Toggle";
import arrowRight from "../../img/arrowRight.svg";
import "./FooterSub.css";
import { Link } from "react-scroll";

const FooterSub = () => {

  return (
    <div className="n-wrappers-1" id="Navbar">
      {/* left */}
      <div className="n-left-1">
        <div className="n-name-1">
        <Link to="contact" smooth={true} spy={true}>
          <button className="button n-button">Apply now<img  src={arrowRight}/></button>
        </Link>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button n-button" style={{marginLeft: "10px"}}>Join Our community<img  src={arrowRight}/></button>
        </Link>
        </div>
      </div>

      {/* right */}
      <div className="n-right-1">
        <div className="n-list-2">
          <ul style={{ listStyleType: "none", }}>
            <li>
              <Link activeClass="active" to="#" spy={true} smooth={true}>
                Privacy & Terms
              </Link><br /><br />
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Made by Henry
              </Link><br /><br />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterSub;
