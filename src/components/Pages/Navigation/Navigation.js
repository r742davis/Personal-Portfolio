import React, { Component } from "react";
import "./Navigation.css";
import Burger from "@animated-burgers/burger-squeeze";
import "./Burger.css";

// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink
// } from "reactstrap";

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
      : "nav__container nav__slide-in-left nav__container--scrolled";

    const burgerScrolled = this.props.scrolled
      ? "burger burger-lines"
      : "burger burger-lines scrolled"
    // const navBar = this.props.scrolled ? "navbar" : "navbar-recolored";
    // const navBrand = this.props.scrolled
    //   ? "navbar-brand text-white"
    //   : "navbar-brand-recolored";
    return (
      <>
        {this.state.burgerOpen && (
          <nav 
            onClick={() => this.toggleBurger()}
            className={navClass}>
            <a href="#about" className="nav__link">
              About
            </a>
            <a href="#projects" className="nav__link">
              Projects
            </a>
            <a href="#" className="nav__link">
              Resume
            </a>
            <a href="#contact" className="nav__link">
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
          {/* <Nav className="ml-auto navbar-center" navbar>
              <NavItem>
                <NavLink href="#about" className={`${navClass} slide-in`}>
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#projects" className={`${navClass} slide-in`}>
                  Projects
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className={`${navClass} slide-in`}>
                  Resume
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact" className={`${navClass} slide-in`}>
                  Contact
                </NavLink>
              </NavItem>
            </Nav> */}
      </>
    );
  }
}

export default Navigation;
