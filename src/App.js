import React, { Component } from 'react';
import './App.scss';

//---Component Imports---//
import Introduction from './components/Introduction';
import Navigation from './components/Navigation';
import ParallaxBackground from './components/ParallaxBackground';

class App extends Component {
  render() {
    return (
      <>
        <div className="main-container">
          <ParallaxBackground />
          <Introduction />
        </div>
      </>
    );
  }
}

export default App;
