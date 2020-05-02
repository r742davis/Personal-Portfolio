import React from "react";
import "./Navigation.css";

const NavBar = (props) => {
  return (
    props.navOpen && (
      <nav onClick={() => props.toggleNav()} className="nav__container nav__animation">
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
    )
  );
};

export default NavBar;
