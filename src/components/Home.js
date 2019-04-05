import React, { Component } from 'react';
import { Button } from 'reactstrap';
const ReactRotatingText = require('react-rotating-text');

class Home extends Component {
  render() {
    return (
      <>
        <div className="home-container">
          <h1>
            <ReactRotatingText
              items={['Full-Stack Web Developer', 'UX Designer', 'Creative Writer', 'Traveler', 'Doggo Enthusiast']}
              pause={2500}
              typingInterval={120}
              deletingInterval={70}
            />
          </h1>
          <h2>Let's make something beautiful</h2>
          <Button
            className="contact-button"
            color="primary"
            href="/"
          >Contact Me</Button>
        </div>
      </>
    )
  }
}

export default Home
