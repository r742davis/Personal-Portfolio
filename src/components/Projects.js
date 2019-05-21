import React, { Component } from 'react';

//Imported Pictures
import project_1 from '../images/bear.jpg';

import project_3 from '../images/traveleritis.png';
import project_4 from '../images/bakersdozen.png';
import project_5 from '../images/pokemon.png';
import project_6 from '../images/retro-computers.jpg';
import wine from '../images/wine.jpg';

//Imported Modal Components
import Project_1 from './modals/Project_1';
import Project_2 from './modals/Project_2';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen1: false,
      isOpen2: false,
      isOpen3: false,
      isOpen4: false,
      isOpen5: false,
      isOpen6: false
    }
    this.closeModal = this.closeModal.bind(this)
  }
  closeModal() {
    this.setState({
      isOpen1: false,
      isOpen2: false,
      isOpen3: false,
      isOpen4: false,
      isOpen5: false,
      isOpen6: false
    })
  }
  toggleModal1 = () => {
    this.setState({
      isOpen1: !this.state.isOpen1
    })
  }
  toggleModal2 = () => {
    this.setState({
      isOpen2: !this.state.isOpen2
    })
  }
  toggleModal3 = () => {
    this.setState({
      isOpen3: !this.state.isOpen3
    })
  }
  toggleModal4 = () => {
    this.setState({
      isOpen4: !this.state.isOpen4
    })
  }
  toggleModal5 = () => {
    this.setState({
      isOpen5: !this.state.isOpen5
    })
  }
  toggleModal6 = () => {
    this.setState({
      isOpen6: !this.state.isOpen6
    })
  }

  render() {
    return (
      <>
      {this.state.isOpen1
      ? <Project_1 closeModal={this.closeModal}/>
      : null
      }
      {this.state.isOpen2
      ? <Project_2 closeModal={this.closeModal}/>
      : null
      }
      {this.state.isOpen3 ?
        <div className="backdrop">
          <div className="modal">
            <div className="modal-grid">
              <div className="close-modal">
                <i onClick={this.closeModal} className="fas fa-times"></i>
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
      : null
      }
      {this.state.isOpen4 ?
        <div className="backdrop">
          <div className="modal">
            <div className="modal-grid">
              <div className="close-modal">
                <i onClick={this.closeModal} className="fas fa-times"></i>
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
      : null
      }
      {this.state.isOpen5 ?
        <div className="backdrop">
          <div className="modal">
            <div className="modal-grid">
              <div className="close-modal">
                <i onClick={this.closeModal} className="fas fa-times"></i>
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
      : null
      }
      {this.state.isOpen6 ?
        <div className="backdrop">
          <div className="modal">
            <div className="modal-grid">
              <div className="close-modal">
                <i onClick={this.closeModal} className="fas fa-times"></i>
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
      : null
      }




      <section id="projects">
        <div className="title-container">
          <h1 data-aos="fade-up">My Projects</h1>
        </div>
        <div className="projects-container" data-aos="flip-up">
          <div className="project-grid-1">
            <img
              src={project_1}
              className="project-grid"
              alt="project 1"
              onClick={this.toggleModal1}
            />
          </div>
          <img
            src={wine}
            className="project-grid"
            id="project-grid-2"
            alt="project 2"
            onClick={this.toggleModal2}
          />
          <img
            src={project_3}
            className="project-grid"
            id="project-grid-3"
            alt="project 3"
            onClick={this.toggleModal3}
          />
          <img
            src={project_4}
            className="project-grid"
            id="project-grid-4"
            alt="project 4"
            onClick={this.toggleModal4}
          />
          <img
            src={project_5}
            className="project-grid"
            id="project-grid-5"
            alt="project 5"
            onClick={this.toggleModal5}
          />
          <img
            src={project_6}
            className="project-grid"
            id="project-grid-6"
            alt="project 6"
            onClick={this.toggleModal6}
          />
        </div>
      </section>
      </>
    )
  }
}

export default Projects;
