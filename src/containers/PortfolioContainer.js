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
import profile from '../images/Richard-cropped.jpeg';

//---Project Photos---//
import project_1 from '../images/bear.jpg';
import project_2 from '../images/retro-computers.jpg';
import project_3 from '../images/wine.jpg';
import project_4 from '../images/traveleritis.jpg';
import project_5 from '../images/bakersdozen.jpg';
import project_6 from '../images/pokemon.png';

class PortfolioContainer extends Component {
  state = {
    modalOpen: false,
    modalNumber: 0,
    showBackdrop: true,
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

  closeModal = () => {
    this.setState({ modalOpen: false })
  }

  openModal = (number) => {
    this.setState({ modalNumber: number, modalOpen: true })
  }

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
