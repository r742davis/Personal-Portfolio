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
        <div className="title-container about-title">
          <h1 data-aos="fade-up">About Me</h1>
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
                  href="https://drive.google.com/file/d/1QVdSpdP-JZ20GrZu0ApqVp-Mx-urqGHW/view?usp=sharing"
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
            <div className="skills-container">
              <div className="frontend-skills-container">
                <div className="frontend-skills-title">
                  <h4>Frontend Skills</h4>
                </div>
                <ul>
                  <li><img src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png" className="skill-icon" alt="html/css"/>HTML/CSS</li>
                  <li><img src="https://sdtimes.com/wp-content/uploads/2018/01/bootstrap-stack.png" className="skill-icon" alt="bootstrap"/>Bootstrap</li>
                  <li><img src="https://cdn.worldvectorlogo.com/logos/sass-1.svg" className="skill-icon" alt="sass"/>Sass</li>
                  <li><img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" className="skill-icon" alt="react"/>React</li>
                  <li><img src="https://cdn.freebiesupply.com/logos/large/2x/redux-logo-png-transparent.png" className="skill-icon" alt="redux"/>Redux</li>
                  <li><img src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/300/thumb/angular2.png" className="skill-icon" alt="angular js"/>AngularJS</li>
                  <li><img src="https://img.icons8.com/color/48/000000/ruby-gemstone.png" className="skill-icon" alt="ruby"/>Ruby</li>
                  <li><img src="http://pluspng.com/img-png/jquery-logo-png-kategoriedateilogo-software-wikipedia-256.png" className="skill-icon" alt="j query"/>jQuery</li>
                </ul>
              </div>
              <div className="backend-skills-container">
                <div className="backend-skills-title">
                  <h4>Backend Skills</h4>
                </div>
                <ul>
                  <li><img src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/thumb/expressjslogo.png" className="skill-icon" alt="express"/>Express</li>
                  <li><img src="https://cdn-images-1.medium.com/max/449/1*NRCOyVBY6Jiqr4Q9A1zoaQ.png" className="skill-icon" alt="mongo db"/>MongoDB</li>
                  <li><img src="https://www.balena.io/docs//img/language/nodejs.svg" className="skill-icon" alt="node js"/>Node.js</li>
                  <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/540px-Postgresql_elephant.svg.png" className="skill-icon" alt="Postgre SQL"/>PostgreSQL</li>
                  <li><img src="https://s3-eu-west-1.amazonaws.com/devinterface-web/production/technologies/40/medium/rubylogo111.png?1444285834" className="skill-icon" alt="ruby on rails"/>Ruby on Rails</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    )
  }
}

export default About;
