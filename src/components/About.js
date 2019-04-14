import React, { Component } from 'react';
import {
  MDBBtn
} from 'mdbreact';
import profile from '../images/richard-davis.jpeg';

class About extends Component {
  render() {
    return (
      <>
      <section id="about">
        <div className="title-container">
          <h1 data-aos="fade-up">A little about me</h1>
        </div>
        <div className="about-container" data-aos="fade-up">
          <img src={profile} className="profile-picture" alt="profile of richard"/>
          <div className="description-container">
            <h1>Richard Davis</h1>
            <h4>Full-Stack Web Developer</h4>
            <p>I am passionate coder who relishes diving into both structures and the UI experience. I specialize in React, MongoDB, and Ruby on Rails. I am always looking to learn something new and challenge myself as a coder everyday. </p>
            <div className="cv-button-container">
              <MDBBtn className="cv-button" data-aos="fade-up"><a href="https://drive.google.com/open?id=1XL9bvtIZfgzgDIp401hvK6Y-RZ6N70GK" target="_blank">Download CV</a></MDBBtn>
            </div>
          </div>
          <div className="skills-list-container">
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
