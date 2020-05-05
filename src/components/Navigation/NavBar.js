import React from "react";
import "./Navigation.css";

const renderNav = (props) => (
  <nav
    onClick={() => props.toggleNav()}
    className="nav__container nav__animation"
  >
    <li>
      <a href="#about" className="nav__link" id="nav__link-about">
        About
      </a>
    </li>
    <li>
      <a href="#projects" className="nav__link" id="nav__link-projects">
        Projects
      </a>
    </li>
    <li>
      <a
        href={props.resumeLink}
        className="nav__link"
        id="nav__link-resume"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
    </li>
    <li>
      <a href="#contact" className="nav__link" id="nav__link-contact">
        Contact
      </a>
    </li>
  </nav>
);

const NavBar = (props) => props.navOpen && renderNav(props);

export default NavBar;
