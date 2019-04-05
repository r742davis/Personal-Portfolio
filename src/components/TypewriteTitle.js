import React, { Component } from 'react';
const ReactRotatingText = require('react-rotating-text');

class TypewriteTitle extends Component {


  render() {
    return (
      <div className="display-text">
        <ReactRotatingText items={['First', 'Second']} />
      </div>
    )
  }
}

export default TypewriteTitle;
