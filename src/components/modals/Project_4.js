import React, { Component } from 'react';
import './Modal.css';
import project_4 from '../../images/bakersdozen.png';

class Project_4 extends Component {
  render() {
    return (
      <>
        <div className="backdrop">
          <div className="modal">
            <div className="modal-grid">
              <div className="close-modal">
                <i onClick={this.props.closeModal} className="fas fa-times"></i>
              </div>
              <div className="project-picture">
                <img src={project_4} alt="bakers dozen" />
              </div>
              <div className="project-title">
                <h2>Baker's Dozen</h2>
              </div>
              <div className="project-description">
                <p>Baker's Dozen is an app where you can keep your favorite bakedgoods recipes and have them displayed beautifully. I created this project during my time at General Assembly and built in full authentication into the app.</p>
              </div>
              <div className="project-tech">
                <h4>Tech:</h4>
              </div>
              <div className="project-tech-description">
                <p>JavaScript, Express, Mongoose, MongoDB, NodeJS, EJS, HTML, CSS</p>
              </div>
              <div className="project-links">
                <h4>Links:</h4>
              </div>
              <div className="project-links-description">
                <p><a href="https://bakersdozen-project.herokuapp.com/bakersdozen">Baker's Dozen</a></p>
                <p><a href="https://github.com/r742davis/Project_2">Project Code</a></p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Project_4;
