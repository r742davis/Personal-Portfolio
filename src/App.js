import React, { Component } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

//---Component Imports---//
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

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
