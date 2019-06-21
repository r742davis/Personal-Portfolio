import React, { Component } from 'react';
import './modal.css';
import project_6 from '../../images/retro-computers.jpg';

class Project_6 extends Component {
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
                <img src={project_6} alt="portfolio" />
              </div>
              <div className="project-title">
                <h2>Portfolio Site</h2>
              </div>
              <div className="project-description">
                <p>I wanted to challenge myself to build a portfolio website using more than vanilla JS, HTML, and CSS. I used React and Sass to build this portfolio site</p>
              </div>
              <div className="project-tech">
                <h4>Tech:</h4>
              </div>
              <div className="project-tech-description">
                <p>React, Sass</p>
              </div>
              <div className="project-links">
                <h4>Links:</h4>
              </div>
              <div className="project-links-description">
                <p><a href="https://github.com/r742davis/portfolio_1">Project Code</a></p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Project_6;
