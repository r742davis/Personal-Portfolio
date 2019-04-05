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
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

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
  render() {
    return (
      <>
        <Router>
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
                <NavLink href="#home" className="nav-item">Home</NavLink>
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
      </Router>
      </>
    );
  }
}

export default Navigation;
