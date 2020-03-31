import React, { Component } from "react";
import "./Navigation.css";
import Burger from "@animated-burgers/burger-squeeze";
import "@animated-burgers/burger-squeeze/dist/styles.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

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
      ? "nav-link section"
      : "nav-link-recolored section";
    const navBar = this.props.scrolled ? "navbar" : "navbar-recolored";
    const navBrand = this.props.scrolled
      ? "navbar-brand text-white"
      : "navbar-brand-recolored";
    return (
      <>
        <Navbar light expand="md" className={navBar}>
          <NavbarBrand className={navBrand}>
            <Burger
              isOpen={this.state.burgerOpen}
              onClick={() => this.toggleBurger()}
            />
          </NavbarBrand>
          {this.state.burgerOpen &&
            <Nav className="ml-auto navbar-center" navbar>
            <NavItem>
              <NavLink 
                href="#about" 
                className={`${navClass} slide-in`}>
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
                href="#projects" 
                className={`${navClass} slide-in`}>
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
                href="#contact" 
                className={`${navClass} slide-in`}>
                Contact
              </NavLink>
            </NavItem>
          </Nav>
          }
          
        </Navbar>
      </>
    );
  }
}

export default Navigation;
