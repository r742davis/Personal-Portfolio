import React, { Component } from 'react';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
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
          <img src={profile} className="profile-picture" />
          <div className="description-container">
            <h1>Richard Davis</h1>
            <h4>Full-Stack Web Developer</h4>
            <p>I'm just a poor boy from a poor family, babadoosh babadoosh can you do the fandango? Very very exciting, throw the maid in lightning oooooooooo MAMA MIA MAMA MIA.</p>
          </div>
          <div className="skills-list">
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>Top Skills</MDBCardTitle>
                <MDBListGroup>
                  <MDBListGroupItem>HTML/CSS</MDBListGroupItem>
                  <MDBListGroupItem>JavaScript</MDBListGroupItem>
                  <MDBListGroupItem>Ruby</MDBListGroupItem>
                  <MDBListGroupItem>Ruby on Rails</MDBListGroupItem>
                  <MDBListGroupItem>ReactJS</MDBListGroupItem>
                  <MDBListGroupItem>PostgreSQL</MDBListGroupItem>
                  <MDBListGroupItem>MongoDB</MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="cv-button-container">
            <MDBBtn className="cv-button"><a href="">Download CV</a></MDBBtn>
          </div>
        </div>
      </section>
      </>
    )
  }
}

export default About;
