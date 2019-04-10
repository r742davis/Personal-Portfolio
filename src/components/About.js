import React, { Component } from 'react';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBListGroup,
  MDBListGroupItem
} from 'mdbreact';
import profile from '../images/richard-davis.jpeg';

class About extends Component {
  render() {
    return (
      <>
      <section id="about">
        <div className="title-container">
          <h1>About</h1>
        </div>
        <div className="about-container">
          <div className="description-container">
            <h1>Richard Davis</h1>
            <h4>Full-Stack Web Developer</h4>
            <p>I'm just a poor boy from a poor family, babadoosh babadoosh can you do the fandango? Very very exciting, throw the maid in lightning oooooooooo MAMA MIA MAMA MIA.</p>
          </div>
          <img src={profile} className="profile-picture" alt="profile of richard" />
          <div className="skills-list-container">
            <ul>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>Ruby</li>
              <li>Ruby on Rails</li>
              <li>React</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>

          </div>
        </div>
      </section>
      </>
    )
  }
}

export default About;
