import React, { Component } from "react";
import "./Navigation.css";
import "./Burger.css";
import Backdrop from "../Projects/Modal/Backdrop/Backdrop";
import NavBar from "./NavBar";
import Burger from "@animated-burgers/burger-squeeze";

class Navigation extends Component {
  state = {
    navOpen: false,
  };

  toggleNav = () => {
    this.setState({
      navOpen: !this.state.navOpen,
    });
  };

  render() {
    const { navOpen } = this.state;
    return (
      <>
        <Backdrop navOpen={navOpen} toggleNav={this.toggleNav} />
        <NavBar
          scrolled={this.props.scrolled}
          toggleNav={this.toggleNav}
          navOpen={navOpen}
          resumeLink={this.props.resumeLink}
        />
        <nav className="nav__navbar">
          <Burger isOpen={navOpen} onClick={() => this.toggleNav()} />
        </nav>
      </>
    );
  }
}

export default Navigation;
