import React, { Component } from 'react';
import './Styling/Projects.css';

//Imported Pictures
import project_1 from '../images/bear.jpg';
import project_2 from '../images/wine.jpg';
import project_3 from '../images/traveleritis.png';
import project_4 from '../images/bakersdozen.png';
import project_5 from '../images/pokemon.png';
import project_6 from '../images/retro-computers.jpg';

//Imported Modal Components
// import Project1 from './modals/Project_1';
import Project2 from './modals/Project_2';
import Project3 from './modals/Project_3';
import Project4 from './modals/Project_4';
import Project5 from './modals/Project_5';
import Project6 from './modals/Project_6';

import Modal from './modals/Modal';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      modalNumber: 0,
      projects: [
        {
          id: 1,
          name: 'Mug Club App',
          image: `${project_1}`,
          alt: 'mug club bear',
          description: 'The Madison Bear Garden needs a better way to track their Mug Club members aside from their laptop and a spreadsheet. I am developing a mobile and desktop application that will help them track their members using a remote hosted database.',
          tech: 'React, MongoDB, Express, Node.js',
          link: 'https://github.com/r742davis/mug_club',
          linkName: 'Mug Club GitHub Page'
        },
        {
          id: 2,
          name: 'Mug Club App',
          image: `${project_2}`,
          alt: 'mug club bear',
          description: 'The Madison Bear Garden needs a better way to track their Mug Club members aside from their laptop and a spreadsheet. I am developing a mobile and desktop application that will help them track their members using a remote hosted database.',
          tech: 'React, MongoDB, Express, Node.js',
          link: 'https://github.com/r742davis/mug_club',
          linkName: 'Mug Club GitHub Page'
        },
        {
          id: 3,
          name: 'Mug Club App',
          image: `${project_3}`,
          alt: 'mug club bear',
          description: 'The Madison Bear Garden needs a better way to track their Mug Club members aside from their laptop and a spreadsheet. I am developing a mobile and desktop application that will help them track their members using a remote hosted database.',
          tech: 'React, MongoDB, Express, Node.js',
          link: 'https://github.com/r742davis/mug_club',
          linkName: 'Mug Club GitHub Page'
        },
        {
          id: 4,
          name: 'Mug Club App',
          image: `${project_4}`,
          alt: 'mug club bear',
          description: 'The Madison Bear Garden needs a better way to track their Mug Club members aside from their laptop and a spreadsheet. I am developing a mobile and desktop application that will help them track their members using a remote hosted database.',
          tech: 'React, MongoDB, Express, Node.js',
          link: 'https://github.com/r742davis/mug_club',
          linkName: 'Mug Club GitHub Page'
        },
        {
          id: 5,
          name: 'Mug Club App',
          image: `${project_5}`,
          alt: 'mug club bear',
          description: 'The Madison Bear Garden needs a better way to track their Mug Club members aside from their laptop and a spreadsheet. I am developing a mobile and desktop application that will help them track their members using a remote hosted database.',
          tech: 'React, MongoDB, Express, Node.js',
          link: 'https://github.com/r742davis/mug_club',
          linkName: 'Mug Club GitHub Page'
        },
        {
          id: 6,
          name: 'Mug Club App',
          image: `${project_6}`,
          alt: 'mug club bear',
          description: 'The Madison Bear Garden needs a better way to track their Mug Club members aside from their laptop and a spreadsheet. I am developing a mobile and desktop application that will help them track their members using a remote hosted database.',
          tech: 'React, MongoDB, Express, Node.js',
          link: 'https://github.com/r742davis/mug_club',
          linkName: 'Mug Club GitHub Page'
        }
      ]
    }
  }
  closeModal = () => {
    this.setState({showModal: false})
  }

  openModal = (number) => {
    this.setState({modalNumber: number, showModal: true})
    console.log(this.state.modalNumber);
  }

  render() {

    const projectModal = this.state.projects.map(project => {
      if (project.id === this.state.modalNumber && this.state.showModal) {
        return <Modal
            key={project.id}
            name={project.name}
            image={project.image}
            alt={project.alt}
            description={project.description}
            tech={project.tech}
            link={project.link}
            linkName={project.linkName}
            closeModal={this.closeModal} />
      }
    })

    return (
      <>
      {projectModal}

      <section id="projects">
        <div className="title-container">
          <h1 data-aos="fade-up">Recent Projects</h1>
        </div>
        <div className="projects-container" data-aos="fade-up">
          <img
            src={project_1}
            className="project-grid modal-one"
            alt="project 1"
            onClick={() => this.openModal(1)}
          />
          <img
            src={project_2}
            className="project-grid modal-two"
            id="project-grid-2"
            alt="project 2"
            onClick={() => this.openModal(2)}
          />
          <img
            src={project_3}
            className="project-grid modal-three"
            id="project-grid-3"
            alt="project 3"
            onClick={() => this.openModal(3)}
          />
          <img
            src={project_4}
            className="project-grid modal-four"
            id="project-grid-4"
            alt="project 4"
            onClick={() => this.openModal(4)}
          />
          <img
            src={project_5}
            className="project-grid modal-five"
            id="project-grid-5"
            alt="project 5"
            onClick={() => this.openModal(5)}
          />
          <img
            src={project_6}
            className="project-grid modal-six"
            id="project-grid-6"
            alt="project 6"
            onClick={() => this.openModal(6)}
          />
        </div>
      </section>
      </>
    )
  }
}

export default Projects;
