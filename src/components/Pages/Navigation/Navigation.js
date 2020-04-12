import React, { Component } from "react";
import "./Navigation.css";
import "./Burger.css";
import Backdrop from "../Projects/Modal/Backdrop/Backdrop";
import Burger from "@animated-burgers/burger-squeeze";

class Navigation extends Component {
  state = {
    navOpen: false
  };

  toggleNav = () => {
    this.setState({
      navOpen: !this.state.navOpen
    });
  };

  render() {
    const navClass = this.props.scrolled
      ? "nav__container nav__slide-in-left"
      : "nav__container nav__slide-in-left nav__container--scrolled box-shadow";
    const navLink = this.props.scrolled
      ? "nav__link"
      : "nav__link nav__link--scrolled";

    return (
      <>
        <Backdrop 
            navOpen={this.state.navOpen}
            toggleNav={this.toggleNav}/>
        {this.state.navOpen && (
          <nav onClick={() => this.toggleNav()} className={navClass}>
            <a href="#about" className={navLink}>
              About
            </a>
            <a href="#projects" className={navLink}>
              Projects
            </a>
            <a
              href={this.props.resumeLink}
              className={navLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <a href="#contact" className={navLink}>
              Contact
            </a>
          </nav>
        )}

        <nav className="nav__navbar">
          <Burger
            isOpen={this.state.navOpen}
            onClick={() => this.toggleNav()}
          />
        </nav>
      </>
    );
  }
}

export default Navigation;
