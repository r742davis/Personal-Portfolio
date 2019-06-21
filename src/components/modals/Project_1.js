import React, { Component } from 'react';
import './Modal.css';
import project_1 from '../../images/bear.jpg';

class Project_1 extends Component {
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
                <img src={project_1} alt="mug club bear" />
              </div>
              <div className="project-title">
                <h2>Mug Club App</h2>
              </div>
              <div className="project-description">
                <p>The Madison Bear Garden needs a better way to track their Mug Club members aside from their laptop and a spreadsheet. I am developing a mobile and desktop application that will help them track their members using a remote hosted database. </p>
              </div>
              <div className="project-tech">
                <h4>Tech:</h4>
              </div>
              <div className="project-tech-description">
                <p>React, MongoDB, Express, Node.js</p>
              </div>
              <div className="project-links">
                <h4>Links:</h4>
              </div>
              <div className="project-links-description">
                <p><a href="https://github.com/r742davis/mug_club">Mug Club GitHub Page</a></p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Project_1;
