import React, { Component } from 'react';

//Imported Pictures
import project_1 from '../images/bear.jpg';
import project_2 from '../images/wine.jpg';
import project_3 from '../images/traveleritis.png';
import project_4 from '../images/bakersdozen.png';
import project_5 from '../images/pokemon.png';
import project_6 from '../images/retro-computers.jpg';

//Imported Modal Components
import Project1 from './modals/Project_1';
import Project2 from './modals/Project_2';
import Project3 from './modals/Project_3';
import Project4 from './modals/Project_4';
import Project5 from './modals/Project_5';
import Project6 from './modals/Project_6';

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
    this.setState({ isOpen1: !this.state.isOpen1 })
  }
  toggleModal2 = () => {
    this.setState({ isOpen2: !this.state.isOpen2 })
  }
  toggleModal3 = () => {
    this.setState({ isOpen3: !this.state.isOpen3 })
  }
  toggleModal4 = () => {
    this.setState({ isOpen4: !this.state.isOpen4 })
  }
  toggleModal5 = () => {
    this.setState({ isOpen5: !this.state.isOpen5 })
  }
  toggleModal6 = () => {
    this.setState({ isOpen6: !this.state.isOpen6 })
  }

  render() {
    return (
      <>
      {this.state.isOpen1
        ? <Project1 closeModal={this.closeModal} />
        : null
      }
      {this.state.isOpen2
        ? <Project2 closeModal={this.closeModal} />
        : null
      }
      {this.state.isOpen3
        ? <Project3 closeModal={this.closeModal} />
        : null
      }
      {this.state.isOpen4
        ? <Project4 closeModal={this.closeModal} />
        : null
      }
      {this.state.isOpen5
        ? <Project5 closeModal={this.closeModal} />
        : null
      }
      {this.state.isOpen6
        ? <Project6 closeModal={this.closeModal} />
        : null
      }

      <section id="projects">
        <div className="title-container">
          <h1 data-aos="fade-up">Recent Projects</h1>
        </div>
        <div className="projects-container" data-aos="flip-up">
            <img
              src={project_1}
              className="project-grid"
              alt="project 1"
              onClick={this.toggleModal1}
            />
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
