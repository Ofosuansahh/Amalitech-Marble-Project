import React from "react";
// import Toggle from "../Toggle/Toggle";
import arrowRight from "../../img/arrowRight.svg";
import anim from "../../img/anim.mp4";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
       <div className="myVideo">
        <video playsinline autoplay="true"  loop poster width={1500}>
          <source src={anim} type="video/mp4"/>
        </video>
      </div>
      {/* left */}
      <div className="n-left">
        <div className="n-name">marble</div>
        {/* <Toggle /> */}
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                About
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                How it works
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                what we look for
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Apply Now<img  src={arrowRight}/></button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
