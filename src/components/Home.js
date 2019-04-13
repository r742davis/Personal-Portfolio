import React, { Component } from 'react';
import { Button } from 'reactstrap';
const ReactRotatingText = require('react-rotating-text');

class Home extends Component {
  render() {
    return (
      <>
      <section id="home" onScroll={this.handleScroll}>
        <div className="home-container">
          <div className='tagline-container'>
            <h2>Hello, my name is</h2>
            <h2>Richard</h2>
          </div>
          <h1>
            <ReactRotatingText
              items={['Full-Stack Web Developer', 'UX Designer', 'Creative Writer', 'Traveler', 'Doggo Enthusiast', 'Wine Lover', 'Observer']}
              pause={3000}
              typingInterval={120}
              deletingInterval={30}
            />
          </h1>

        </div>
      </section>
      </>
    )
  }
}

export default Home
