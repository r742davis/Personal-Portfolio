import React, { Component } from 'react';

import './Projects.css';
import Backdrop from './Modal/Backdrop/Backdrop';
import Modal from './Modal/Modal';

const projects = (props) => {

  const projectModal = props.projects
    .map(project => {
      if (project.id === props.modalNumber && props.modalOpen) {
      return <Modal
          key={project.id}
          name={project.name}
          image={project.image}
          alt={project.alt}
          description={project.description}
          tech={project.tech}
          link1={project.link1}
          link2={project.link2}
          link3={project.link3}
          linkName1={project.linkName1}
          linkName2={project.linkName2}
          linkName3={project.linkName3}
          closeModal={props.closeModal} />
    }
  });

  const projectImages = props.projects.map(project => {
    return <img
      key={project.id}
      src={project.image}
      className='project-grid'
      alt={`project_${project.id}`}
      onClick={() => props.openModal(project.id)} />
  });


    return (
      <>
        <Backdrop
          show={props.showBackdrop}
          modalOpen={props.modalOpen}
          clicked={props.closeModal} />
        <section id="projects">
          <div className="title-container">
            <h1 data-aos="fade-up">Recent Projects</h1>
          </div>
          <div className="projects-container" data-aos="fade-up">
            {projectImages}
          </div>
        </section>
        {projectModal}
      </>
    )
}

export default projects;
