import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <>
        <div className="home-container">
          <h1>
            <a
              href=""
              class="typewrite"
              data-period="2000"
              data-type="['Full-Stack Web Developer', 'UX Designer', 'Creative Writer', 'Doggo Enthusiast']">
                <span class="wrap"></span>
              </a>
          </h1>
          <br/>
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
