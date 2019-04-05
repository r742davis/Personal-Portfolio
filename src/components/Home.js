import React, { Component } from 'react';
import { Button } from 'reactstrap';
const ReactRotatingText = require('react-rotating-text');

class Home extends Component {
  render() {
    return (
      <>
      <section id="#home">
        <div className="home-container">
          <h1>Richard Davis</h1>
          <h1>
            <ReactRotatingText
              items={['Full-Stack Web Developer', 'UX Designer', 'Creative Writer', 'Traveler', 'Doggo Enthusiast']}
              pause={3000}
              typingInterval={120}
              deletingInterval={70}
            />
          </h1>
          <br />
          <h2>Let's make something</h2>
          <h2>Beautiful</h2>
          <Button
            className="contact-button"
            color="primary"
            href="/"
          >Contact Me</Button>
        </div>
      </section>
      </>
    )
  }
}

export default Home
