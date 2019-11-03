import React from 'react';
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

const navigation = (props) => {
    const navClass = props.scrolled ? 'nav-link section' : 'nav-link-recolored section'
    const navBar = props.scrolled ? "navbar" : "navbar-recolored";
    const navBrand = props.scrolled ? "navbar-brand text-white" : "navbar-brand-recolored"

    return (
      <>
        <Navbar
          light
          expand="md"
          className={navBar}
        >
          <NavbarBrand
            className={navBrand}>R</NavbarBrand>
          <NavbarToggler onClick={props.toggle} />
          <Collapse isOpen={props.isOpen} navbar>
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

export default navigation;
