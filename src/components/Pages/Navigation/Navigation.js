import React, { Component } from "react";
import "./Navigation.css";
import "./Burger.css";
import Burger from "@animated-burgers/burger-squeeze";

class Navigation extends Component {
  state = {
    burgerOpen: false
  };

  toggleBurger = () => {
    this.setState({
      burgerOpen: !this.state.burgerOpen
    });
  };

  render() {
    const navClass = this.props.scrolled
      ? "nav__container nav__slide-in-left"
      : "nav__container nav__slide-in-left nav__container--scrolled box-shadow";
    // const burgerScrolled = this.props.scrolled
    //   ? "burger burger-lines"
    //   : "burger burger-lines scrolled";
    const navLink = this.props.scrolled
      ? "nav__link"
      : "nav__link nav__link--scrolled";

    return (
      <>
        {this.state.burgerOpen && (
          <nav onClick={() => this.toggleBurger()} className={navClass}>
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
            isOpen={this.state.burgerOpen}
            onClick={() => this.toggleBurger()}
          />
        </nav>
      </>
    );
  }
}

export default Navigation;
