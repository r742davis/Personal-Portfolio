import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
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
                <NavLink className="nav-item" href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-item" href="/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-item" href="/">Project</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-item" href="/">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>

        </Navbar>
      </>
    );
  }
}

export default Navigation;
