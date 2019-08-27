import React, { Component } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

//---Component Imports---//
import About from '../components/Pages/About/About';
import Contact from '../components/Pages/Contact/Contact';
import Home from '../components/Pages/Home/Home';
import Navigation from '../components/Pages/Navigation/Navigation';
import Projects from '../components/Pages/Projects/Projects';

//---Profile Picture---//
import profile from '../images/richard-davis.jpeg';

class PortfolioContainer extends Component {
  state = {
    isOpen: false,
    scrolled: true,
    profilePicture: `${profile}`,
    resumeLink: "https://drive.google.com/open?id=1uBbQxXBs0_efXux_Xy8g-pnKeVqlv8Bn"
  };

  //---Page Animation---//
  componentDidMount() {
    AOS.init({
      duration: 500
    });

    document.addEventListener('scroll', () => {
      const scrolled = window.scrollY < 100;
      if (scrolled !== this.state.scrolled) {
        this.setState({ scrolled })
      }
    })
  };

  toggleMenu = () => {
    this.setState({isOpen: !this.state.isOpen});
  };

  render() {
    return (
      <>
        <Navigation
          isOpen={this.state.isOpen}
          scrolled={this.state.scrolled}
          toggle={this.toggleMenu} />
        <Home />
        <About
          profile={this.state.profilePicture} resumeLink={this.state.resumeLink} />
        <Projects />
        <Contact />
      </>
    );
  };
};

export default PortfolioContainer;
