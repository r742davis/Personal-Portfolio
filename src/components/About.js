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
          <h1 data-aos="fade-up">About</h1>
        </div>
        <div className="about-container">
          <div className="description-container">
            <h1 data-aos="fade-up">Richard Davis</h1>
            <h4 data-aos="fade-up">Full-Stack Web Developer</h4>
            <p data-aos="fade-up">I'm just a poor boy from a poor family, babadoosh babadoosh can you do the fandango? Very very exciting, throw the maid in lightning oooooooooo MAMA MIA MAMA MIA.</p>
            <div className="cv-button-container">
              <MDBBtn className="cv-button" data-aos="fade-up"><a href="https://drive.google.com/open?id=1XL9bvtIZfgzgDIp401hvK6Y-RZ6N70GK" target="_blank">Download CV</a></MDBBtn>
            </div>
          </div>
          <img src={profile} className="profile-picture" alt="profile of richard" data-aos="fade-up"/>
          <div className="skills-list-container" data-aos="fade-up">
            <h1>Top Developer Skills</h1>
            <hr />
            <ul>
              <li><i className="fas fa-check-circle skill-icon"></i>HTML/CSS</li>
              <li><i className="fas fa-check-circle skill-icon"></i>JavaScript</li>
              <li><i className="fas fa-check-circle skill-icon"></i>Ruby</li>
              <li><i className="fas fa-check-circle skill-icon"></i>Ruby on Rails</li>
              <li><i className="fas fa-check-circle skill-icon"></i>React</li>
              <li><i className="fas fa-check-circle skill-icon"></i>PostgreSQL</li>
              <li><i className="fas fa-check-circle skill-icon"></i>MongoDB</li>
            </ul>
            <hr />

          </div>
        </div>
      </section>
      </>
    )
  }
}

export default About;
