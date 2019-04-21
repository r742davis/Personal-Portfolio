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
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const scrolled = window.scrollY < window.innerHeight;
      if (scrolled !== this.state.scrolled) {
        this.setState({ scrolled })
      }
    })
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false)
  }

  handleClick = e => {
    if (this.node.contains(e.target)) {
      return;
    }

    this.handleClickOutside();
  }

  handleClickOutside() {
    this.setState({ isOpen: false })
  }



  render() {
    return (
      <>
        <Navbar
        light
        expand="md"
        ref={node => this.node = node}
        className={this.state.scrolled ? "navbar" : "navbar-recolored"}
        >
          <NavbarBrand
          className={this.state.scrolled ? "navbar-brand text-white" : "navbar-brand-recolored"}
          href="/"
          >R
          </NavbarBrand>
          <NavbarToggler
            onClick={this.toggle} />
          <Collapse
            isOpen={this.state.isOpen}
            navbar
          >
            <Nav
            className="ml-auto navbar-center"
            navbar
            >
              <NavItem>
                <NavLink href="#home" className={this.state.scrolled ? "nav-link section" : "nav-link-recolored section"}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#about" className={this.state.scrolled ? "nav-link section" : "nav-link-recolored section"}>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#projects" className={this.state.scrolled ? "nav-link section" : "nav-link-recolored section"}>Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact" className={this.state.scrolled ? "nav-link section" : "nav-link-recolored section"}>Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </>
    );
  }
}

export default Navigation;
