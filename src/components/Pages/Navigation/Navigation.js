import React, { Component } from "react";
import "./Navigation.css";
import "./Burger.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
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
    return (
      <>
        <Backdrop navOpen={this.state.navOpen} toggleNav={this.toggleNav} />
        <NavBar
          scrolled={this.props.scrolled}
          toggleNav={this.toggleNav}
          navOpen={this.state.navOpen}
          resumeLink={this.props.resumeLink}
        />
        <nav className="nav__navbar">
          <Burger
            isOpen={this.state.navOpen}
            onClick={() => this.toggleNav()}
          />
        </nav>
      </>
    );
  }
}

export default Navigation;
