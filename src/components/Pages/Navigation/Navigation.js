import React, { Component } from 'react';
import './Navigation.css';
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
    state = {
      isOpen: false,
      scrolled: true
    };

  toggleMenu = () => {
    this.setState({isOpen: !this.state.isOpen});
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const scrolled = window.scrollY < 100;
      if (scrolled !== this.state.scrolled) {
        this.setState({ scrolled })
      }
    })
  };

  render() {

    let navClass = 'nav-link-recolored section'
    if (this.state.scrolled) {
      navClass = 'nav-link section'
    }

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
                <NavLink href="#home" className={navClass}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#about" className={navClass}>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#projects" className={navClass}>Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact" className={navClass}>Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </>
    );
  }
}

export default Navigation;
