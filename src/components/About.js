import React, { Component } from 'react';

class About extends Component {
  state = {
    isTop: true
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      
    })
  }

  render() {
    return (
      <>
        <h1>Hello</h1>
        {this.state.isTop ? <h1>Top</h1> : <h1>Bottom</h1>}
      </>
    )
  }
}

export default About;
