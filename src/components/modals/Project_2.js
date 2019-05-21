import React, { Component } from 'react';
import wine from '../../images/wine.jpg';

class Project_2 extends Component {
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
                <img src={wine} alt="vie du vin" />
              </div>
              <div className="project-title">
                <h2>Vie du Vin</h2>
              </div>
              <div className="project-description">
                <p>This was my final project for the General Assembly immersive web development program. I built a wine tracker that saves your wine lists according to the user who signs up and logs in. </p>
              </div>
              <div className="project-tech">
                <h4>Tech:</h4>
              </div>
              <div className="project-tech-description">
                <p>React, Redux, JWTs, MongoDB, ExpressJS, NodeJS</p>
              </div>
              <div className="project-links">
                <h4>Links:</h4>
              </div>
              <div className="project-links-description">
                <p><a href="https://arcane-brushlands-71780.herokuapp.com/wines">Vie Du Vin</a></p>
                <p><a href="https://github.com/r742davis/vie_du_vin_frontend">Frontend Code</a></p>
                <p><a href="https://github.com/r742davis/vie_du_vin_backend">Backend Code</a></p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Project_2;
