import React, { Component } from 'react';
import { bubble as Menu } from 'react-burger-menu';

class NavBar extends Component {
  render() {
    return (
      <>
      <div id="outer-container" style={{height: '100%'}}>
        <Menu width={ '20%' } disableAutoFocus>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
        </Menu>
      </div>
      </>
    )
  }
}

export default NavBar
