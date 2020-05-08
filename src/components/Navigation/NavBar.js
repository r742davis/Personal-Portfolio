import React from "react";
import "./Navigation.css";
import Animation from "./Animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faBriefcase,
  faPaperclip,
  faAt,
} from "@fortawesome/free-solid-svg-icons";

const renderNav = (props) => (
  <nav
    onClick={() => props.toggleNav()}
    className="nav__container nav__animation"
  >
    <li>
      <a href="#about" className="nav__link" id="nav__link-about">
        <div>
          <FontAwesomeIcon icon={faAddressCard} />
        </div>
        <span>About</span>
      </a>
    </li>
    <li>
      <a href="#projects" className="nav__link" id="nav__link-projects">
        <div>
          <FontAwesomeIcon icon={faBriefcase} />
        </div>
        <span>Projects</span>
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
        <div>
          <FontAwesomeIcon icon={faPaperclip} />
        </div>
        <span>Resume</span>
      </a>
    </li>
    <li>
      <a href="#contact" className="nav__link" id="nav__link-contact">
        <div>
          <FontAwesomeIcon icon={faAt} />
        </div>
        <span>Contact</span>
      </a>
    </li>
  </nav>
);

const NavBar = (props) => (
  <Animation 
    show={props.navOpen} 
    enter=""
    exit="fadeOut 0.25s">
    {renderNav(props)}
  </Animation>
);

export default NavBar;