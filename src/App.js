import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';

//---Component Imports---//
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Home />
        <About />
        <Projects />
        <Contact />
      </BrowserRouter>
    );
  }
}

export default App;
