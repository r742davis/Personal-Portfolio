import React, { Component } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

//---Component Imports---//
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

class App extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000
    })
  }
  render() {
    return (
      <>
        <Navigation />
        <Home />
        <About />
        <Projects />
        <Contact />
      </>
    );
  }
}

export default App;
