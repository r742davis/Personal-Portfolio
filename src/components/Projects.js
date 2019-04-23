import React, { Component } from 'react';
import project_1 from '../images/bear.jpg';
import project_2 from '../images/wines.png';
import project_3 from '../images/traveleritis.png';
import project_4 from '../images/bakersdozen.png';
import project_5 from '../images/pokemon.png';
import project_6 from '../images/retro-computers.jpg';


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
      {this.state.isOpen1 ?
        <div className="backdrop">
          <div className="modal">
            <div className="modal-grid">
              <div className="close-modal">
                <h4 onClick={this.closeModal}>X</h4>
              </div>
              <div className="project-picture">
                <img src={project_1} alt="project picture" />
              </div>
              <div className="project-title">
                <h2>Mug Club Membership App</h2>
              </div>
              <div className="project-description">
                <p>A description of the project and why I took it on</p>
              </div>
              <div className="project-tech">
                <h4>Tech:</h4>
              </div>
              <div className="project-tech-description">
                <p>React Native, MongoDB, PostgreSQL</p>
              </div>
              <div className="project-links">
                <h4>Links:</h4>
              </div>
              <div className="project-links-description">
                <p>Github.com</p>
              </div>
            </div>
          </div>
        </div>
      : null
      }
      {this.state.isOpen2 ?
        <div className="backdrop">
          <div className="modal">
            <div className="modal-grid">
              <div className="close-modal">
                <h4 onClick={this.closeModal}>X</h4>
              </div>
              <div className="project-picture">
                <img src={project_2} alt="project picture" />
              </div>
              <div className="project-title">
                <h2>Vie du Vin</h2>
              </div>
              <div className="project-description">
                <p>A description of the project and why I took it on</p>
              </div>
              <div className="project-tech">
                <h4>Tech:</h4>
              </div>
              <div className="project-tech-description">
                <p>React Native, MongoDB, PostgreSQL</p>
              </div>
              <div className="project-links">
                <h4>Links:</h4>
              </div>
              <div className="project-links-description">
                <p>Github.com</p>
              </div>
            </div>
          </div>
        </div>
      : null
      }
      {this.state.isOpen3 ?
        <div className="backdrop">
          <div className="modal">
            <div className="modal-grid">
              <div className="close-modal">
                <h4 onClick={this.closeModal}>X</h4>
              </div>
              <div className="project-picture">
                <img src={project_3} alt="project picture" />
              </div>
              <div className="project-title">
                <h2>Traveleritis</h2>
              </div>
              <div className="project-description">
                <p>A description of the project and why I took it on</p>
              </div>
              <div className="project-tech">
                <h4>Tech:</h4>
              </div>
              <div className="project-tech-description">
                <p>React Native, MongoDB, PostgreSQL</p>
              </div>
              <div className="project-links">
                <h4>Links:</h4>
              </div>
              <div className="project-links-description">
                <p>Github.com</p>
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
                <h4 onClick={this.closeModal}>X</h4>
              </div>
              <div className="project-picture">
                <img src={project_4} alt="project picture" />
              </div>
              <div className="project-title">
                <h2>Baker's Dozen</h2>
              </div>
              <div className="project-description">
                <p>A description of the project and why I took it on</p>
              </div>
              <div className="project-tech">
                <h4>Tech:</h4>
              </div>
              <div className="project-tech-description">
                <p>React Native, MongoDB, PostgreSQL</p>
              </div>
              <div className="project-links">
                <h4>Links:</h4>
              </div>
              <div className="project-links-description">
                <p>Github.com</p>
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
                <h4 onClick={this.closeModal}>X</h4>
              </div>
              <div className="project-picture">
                <img src={project_5} alt="project picture" />
              </div>
              <div className="project-title">
                <h2>Pokedex</h2>
              </div>
              <div className="project-description">
                <p>A description of the project and why I took it on</p>
              </div>
              <div className="project-tech">
                <h4>Tech:</h4>
              </div>
              <div className="project-tech-description">
                <p>React Native, MongoDB, PostgreSQL</p>
              </div>
              <div className="project-links">
                <h4>Links:</h4>
              </div>
              <div className="project-links-description">
                <p>Github.com</p>
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
                <h4 onClick={this.closeModal}>X</h4>
              </div>
              <div className="project-picture">
                <img src={project_6} alt="project picture" />
              </div>
              <div className="project-title">
                <h2>Portfolio Site</h2>
              </div>
              <div className="project-description">
                <p>A description of the project and why I took it on</p>
              </div>
              <div className="project-tech">
                <h4>Tech:</h4>
              </div>
              <div className="project-tech-description">
                <p>React, HTML, Sass</p>
              </div>
              <div className="project-links">
                <h4>Links:</h4>
              </div>
              <div className="project-links-description">
                <p>Github.com</p>
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
            src={project_2}
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
