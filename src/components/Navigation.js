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
  DropdownItem } from 'reactstrap';

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
          sticky="top"
          className="navbar shadow p-3 mb-5"
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
              className="ml-auto"
              navbar>
              <NavItem>
                <NavLink className="text-white" href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" href="/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" href="/">Project</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="text-white"
                nav
                caret>
                  Contact
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="mailto:richard.trow.davis@gmail.com">
                    Email
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Contact Page
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>

        </Navbar>
      </>
    );
  }
}

export default Navigation;
