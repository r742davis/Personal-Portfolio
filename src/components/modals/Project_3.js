import React, { Component } from 'react';
import './Modal.css';
import project_3 from '../../images/traveleritis.png';

class Project_3 extends Component {
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
                <img src={project_3} alt="traveleritis" />
              </div>
              <div className="project-title">
                <h2>Traveleritis</h2>
              </div>
              <div className="project-description">
                <p>This was a group project in General Assembly where we built a travel planning site based around a custom API. The app is designed to help you plan trips and save them depending on the user authentication.</p>
              </div>
              <div className="project-tech">
                <h4>Tech:</h4>
              </div>
              <div className="project-tech-description">
                <p>MEAN Stack (Mongoose, ExpressJS, AngularJS, NodeJS), MVVM Method</p>
              </div>
              <div className="project-links">
                <h4>Links:</h4>
              </div>
              <div className="project-links-description">
                <p><a href="https://traveleritis.herokuapp.com/">Traveleritis</a></p>
                <p><a href="https://github.com/sharonmertens/branchforce">Project Code</a></p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Project_3;
