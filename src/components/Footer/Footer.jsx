import React from "react";
import "./Footer.css";
import { Link } from "react-scroll";

const Footer = () => {

  return (
    <div className="n-wrappers" id="Navbar">
      {/* left */}
      <div className="n-left-1">
        <div className="n-name-1">marble</div>
      </div>

      {/* right */}
      <div className="n-right-1">
        <div className="n-list-1">
          <ul style={{ listStyleType: "none", }}>
            <li>
              <Link activeClass="" to="#" spy={true} smooth={true}>
                About
              </Link><br /><br />
              <Link activeClass="" to="#" spy={true} smooth={true} className="link">
                About Us
              </Link><br />
              <Link activeClass="" to="#" spy={true} smooth={true} className="link">
                How it works
              </Link><br />
              <Link activeClass="" to="#" spy={true} smooth={true} className="link">
                What we look for
              </Link><br />
              <Link activeClass="" to="#" spy={true} smooth={true} className="link">
                Contact Us
              </Link><br />
              <Link activeClass="" to="#" spy={true} smooth={true} className="link">
                Careers
              </Link><br />
              <Link activeClass="" to="#" spy={true} smooth={true} className="link">
                FAQS
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Connect
              </Link><br /><br />
              <Link to="services" spy={true} smooth={true} className="link">
                KNUST
              </Link><br />
              <Link to="services" spy={true} smooth={true} className="link">
                Kumasi, Ghana
              </Link><br /><br />
              <Link to="services" spy={true} smooth={true} className="link">
                LinkedIn
              </Link><br />
              <Link to="services" spy={true} smooth={true} className="link">
                Twitter
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
