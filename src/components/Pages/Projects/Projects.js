import React from "react";

import "./Projects.css";
import Backdrop from "./Modal/Backdrop/Backdrop";
import Modal from "./Modal/Modal";

const projects = props => {
  const projectModal = props.projects.map(project => {
    if (project.id === props.modalNumber && props.modalOpen) {
      return (
        <Modal
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
          closeModal={props.closeModal}
        />
      );
    }
  });

  const projectImages = props.projects.map(project => {
    return (
      <>
        <div 
          onClick={() => props.openModal(project.id)}className="projects__grid-wrap">
          <img
            key={project.id}
            src={project.image}
            className="projects__grid-item box-shadow"
            alt={`project_${project.id}`}
          />
          <h1 className="projects__grid-description">{project.name}</h1>
        </div>
      </>
    );
  });

  return (
    <>
      <Backdrop
        show={props.showBackdrop}
        modalOpen={props.modalOpen}
        clicked={props.closeModal}
      />
      <section id="projects">
        <h1 className="projects__title">My Recent Projects</h1>
        <div className="projects__projects-container" data-aos="fade-up">
          {projectImages}
        </div>
      </section>
      {projectModal}
    </>
  );
};

export default projects;
