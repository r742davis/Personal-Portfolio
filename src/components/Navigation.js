import React, { Component } from 'react';
import './Styling/Navigation.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      scrolled: true
    };
  }

  toggleMenu = () => {
    this.setState({isOpen: !this.state.isOpen});
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const scrolled = window.scrollY < 100;
      console.log(scrolled)
      if (scrolled !== this.state.scrolled) {
        this.setState({ scrolled })
      }
    })
  };

  render() {
    return (
      <>
        <Navbar
          light
          expand="md"
          className={this.state.scrolled ? "navbar" : "navbar-recolored"}
        >
          <NavbarBrand
            className={this.state.scrolled ? "navbar-brand text-white" : "navbar-brand-recolored"}>R</NavbarBrand>
          <NavbarToggler onClick={this.toggleMenu} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto navbar-center" navbar>
              <NavItem>
                <NavLink
                  href="#home"
                  className={this.state.scrolled ? "nav-link section" : "nav-link-recolored section"}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#about"
                  className={this.state.scrolled ? "nav-link section" : "nav-link-recolored section"}>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#projects"
                  className={this.state.scrolled ? "nav-link section" : "nav-link-recolored section"}>Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#contact"
                  className={this.state.scrolled ? "nav-link section" : "nav-link-recolored section"}>Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </>
    );
  }
}

export default Navigation;
