import React, { Component } from 'react';
import './App.scss';

//---Component Imports---//
import Introduction from './components/Introduction';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Introduction />
      </>
    );
  }
}

export default App;
