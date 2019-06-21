import React, { Component } from 'react';
import './Modal.css';
import project_5 from '../../images/pokemon.png';

class Project_5 extends Component {
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
                <img src={project_5} alt="pokedex" />
              </div>
              <div className="project-title">
                <h2>Pokedex</h2>
              </div>
              <div className="project-description">
                <p>This was one of my first projects where we had to do API calls. I choose to use the PokeAPI and build a fully functioning Pokedex with a random Pokemon generator as well.</p>
              </div>
              <div className="project-tech">
                <h4>Tech:</h4>
              </div>
              <div className="project-tech-description">
                <p>JavaScript, AJAX/JSON, HTML, CSS</p>
              </div>
              <div className="project-links">
                <h4>Links:</h4>
              </div>
              <div className="project-links-description">
                <p><a href="https://r742davis.github.io/">Pokedex</a></p>
                <p><a href="https://github.com/r742davis/r742davis.github.io">Project Code</a></p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Project_5;
