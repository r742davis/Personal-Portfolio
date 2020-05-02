import React from "react";
import "./Navigation.css";

const renderNav = (props) => {
  return (
    <nav
      onClick={() => props.toggleNav()}
      className="nav__container nav__animation box-shadow"
    >
      <a href="#about" className="nav__link">
        About
      </a>
      <a href="#projects" className="nav__link">
        Projects
      </a>
      <a
        href={props.resumeLink}
        className="nav__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
      <a href="#contact" className="nav__link">
        Contact
      </a>
    </nav>
  );
};

const NavBar = (props) => {
  return props.navOpen && renderNav(props);
};

export default NavBar;
