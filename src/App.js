import React, { Component } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

//---Component Imports---//
import About from './components/Pages/About/About';
import Contact from './components/Pages/Contact/Contact';
import Home from './components/Pages/Home/Home';
import Navigation from './components/Pages/Navigation/Navigation';
import Projects from './components/Pages/Projects/Projects';

class App extends Component {
  componentDidMount() {
    AOS.init({
      duration: 500
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
