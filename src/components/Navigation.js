import React, { Component } from 'react';
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

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  // componentDidMount() {
  //   document.addEventListener("DOMContentLoaded", function() {
  //     var scrollStart = 0;
  //     var nav = document.querySelector(".nav");
  //     var offset = navbarElement.getBoundingClientRect();
  //   })
  // }

  render() {
    return (
      <>
        <Navbar
          light
          expand="md"
          className="navbar fixed-top sticky-top shadow p-3 mb-5"
        >
          <NavbarBrand
            className="text-white"
            href="/"
          >Richard
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse
            isOpen={this.state.isOpen}
            navbar>
            <Nav
              className="ml-auto navbar-center"
              navbar>
              <NavItem>
                <NavLink href="#home" className="nav-item current">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#about" className="nav-item">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#projects" className="nav-item">Project</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact" className="nav-item">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </>
    );
  }
}

export default Navigation;
