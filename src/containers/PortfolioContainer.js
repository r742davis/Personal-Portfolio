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
    resumeLink: "https://drive.google.com/open?id=1uBbQxXBs0_efXux_Xy8g-pnKeVqlv8Bn",
    projects: [
      {
        id: 1,
        name: 'Mug Club App',
        image: `${project_1}`,
        alt: 'mug club bear',
        description: 'The Madison Bear Garden needs a better way to track their Mug Club members aside from their laptop and a spreadsheet. I am developing a mobile and desktop application that will help them track their members using a remote hosted database.',
        tech: 'React, MongoDB, Express, Node.js',
        link1: 'https://github.com/r742davis/mug_club',
        link2: '',
        link3: '',
        linkName1: 'Project Code',
        linkName2: '',
        linkName3: ''
      },
      {
        id: 2,
        name: 'Portfolio Website',
        image: `${project_2}`,
        alt: 'computers on a desktop',
        description: 'I wanted to challenge myself to build a portfolio website using React and SASS. I built this portfolio using industry conventions, such as using functional components, separating out SCSS into component-specific files, and programmatically generating multiple components.',
        tech: 'React, SASS, Bootstrap 4',
        link1: 'https://github.com/r742davis/portfolio_1',
        link2: '',
        link3: '',
        linkName1: 'Project Code',
        linkName2: '',
        linkName3: ''
      },
      {
        id: 3,
        name: 'Vie Du Vin',
        image: `${project_3}`,
        alt: 'wines glass and bottle with cheese and grapes',
        description: 'This was my final project for the General Assembly immersive web development program. I built a full-stack personal wine tracker app that saves your wine lists according to the user who signs up and logs in.',
        tech: 'React, Redux, JWTs, MongoDB, Express.js, Node.js',
        link1: 'https://arcane-brushlands-71780.herokuapp.com/wines',
        link2: 'https://github.com/r742davis/vie_du_vin_frontend',
        link3: 'https://github.com/r742davis/vie_du_vin_backend',
        linkName1: 'Vie Du Vin Website',
        linkName2: 'Frontend Project Code',
        linkName3: 'Backend Project Code'
      },
      {
        id: 4,
        name: 'Traveleritis',
        image: `${project_4}`,
        alt: 'travel website',
        description: 'This was a collaborative project at General Assembly where we built a travel planning site based around a custom API. The app is designed to help you plan trips and save them depending on the user authentication.',
        tech: 'MEAN Stack (Mongoose, ExpressJS, AngularJS, NodeJS), MVVM Method',
        link1: 'https://traveleritis.herokuapp.com',
        link2: 'https://github.com/sharonmertens/branchforce',
        link3: '',
        linkName1: 'Traveleritis Website',
        linkName2: 'Project Code',
        linkName3: ''
      },
      {
        id: 5,
        name: 'Baker\'s Dozen',
        image: `${project_5}`,
        alt: 'baker\'s dozen website',
        description: 'Baker\'s Dozen is an app where you can keep your favorite bakedgoods recipes and have them displayed beautifully. I created this project during my time at General Assembly and built in full authentication into the app.',
        tech: 'JavaScript, Express, Mongoose, MongoDB, NodeJS, EJS, HTML5, CSS3',
        link1: 'https://bakersdozen-project.herokuapp.com/bakersdozen',
        link2: 'https://github.com/r742davis/Project_2',
        link3: '',
        linkName1: 'Baker\'s Dozen Website',
        linkName2: 'Project Code',
        linkName3: ''
      },
      {
        id: 6,
        name: 'Pokedex',
        image: `${project_6}`,
        alt: 'pokemon',
        description: 'This was my first project where we had to do API calls using AJAX and Promises. I used the PokeAPI and built a fully functioning Pokedex with a random Pokemon generator as well.',
        tech: 'JavaScript, AJAX/Promises, HTML5, CSS3, Node.js',
        link1: 'https://r742davis.github.io/',
        link2: 'https://github.com/r742davis/r742davis.github.io',
        link3: '',
        linkName1: 'Pokedex Website',
        linkName2: 'Project Code',
        linkName3: ''
      }
    ]
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
        <Projects
          modalOpen={this.state.modalOpen}
          modalNumber={this.state.modalNumber}
          showBackdrop={this.state.showBackdrop}
          projects={this.state.projects}
          closeModal={this.closeModal}
          openModal={this.openModal} />
        <Contact />
      </>
    );
  };
};

export default PortfolioContainer;
