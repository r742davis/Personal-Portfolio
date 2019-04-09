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
      isOpen: false,
      scrolled: true
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const scrolled = window.scrollY < window.innerHeight+70;
      if (scrolled !== this.state.scrolled) {
        this.setState({ scrolled })
      }
    })
  }

  render() {
    return (
      <>
        <Navbar
        light
        expand="md"
        className={this.state.scrolled ? "navbar fixed-top sticky-top shadow p-3 mb-5" : "navbar-recolored fixed-top sticky-top shadow p-3 mb-5"}
        >
          <NavbarBrand
          className={this.state.scrolled ? "brand text-white" : "brand-recolored"}
          href="/"
          >Richard
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse
          isOpen={this.state.isOpen}
          navbar
          >
            <Nav
            className="ml-auto navbar-center"
            navbar
            >
              <NavItem>
                <NavLink href="#home" className={this.state.scrolled ? "nav-link" : "nav-link-recolored"}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#about" className={this.state.scrolled ? "nav-link" : "nav-link-recolored"}>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#projects" className={this.state.scrolled ? "nav-link" : "nav-link-recolored"}>Project</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact" className={this.state.scrolled ? "nav-link" : "nav-link-recolored"}>Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </>
    );
  }
}

export default Navigation;
