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
          <h1 data-aos="fade-up">My Story</h1>
        </div>
        <div className="about-container">
          <div className="picture-cv-container" data-aos="fade-up">
            <img
              src={profile}
              className="profile-picture"
              alt="profile of richard"
            />
            <div className="cv-button-container">
              <MDBBtn className="cv-button">
                <a
                  href="https://drive.google.com/open?id=1XL9bvtIZfgzgDIp401hvK6Y-RZ6N70GK"
                  target="_blank"
                  rel="noopener noreferrer">Download CV
                </a>
              </MDBBtn>
            </div>
          </div>
          <div className="description-container" data-aos="fade-up">
            <h1>Richard Davis</h1>
            <hr />
            <h4>Full-Stack Web Developer</h4>
            <p>
            I am passionate coder who relishes diving into both structures and the UI experience. I specialize in React, MongoDB, and Ruby on Rails. I am always looking to learn something new and challenge myself as a coder everyday.
            </p>

          </div>

        </div>
      </section>
      </>
    )
  }
}

export default About;
