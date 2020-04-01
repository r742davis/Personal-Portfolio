import React from "react";

import "./Projects.css";
import Backdrop from "./Modal/Backdrop/Backdrop";
import Modal from "./Modal/Modal";
const uniqid = require("uniqid");

const projects = props => {
  const projectModal = props.projects.map(project => {
    if (project.id === props.modalNumber && props.modalOpen) {
      return (
        <Modal
          key={uniqid()}
          name={project.name}
          image={project.image}
          alt={project.alt}
          description={project.description}
          tech={project.tech}
          link1={project.link1}
          link2={project.link2}
          linkName1={project.linkName1}
          linkName2={project.linkName2}
          closeModal={props.closeModal}
        />
      );
    }
  });

  const projectImages = props.projects.map(project => {
    return (
      <>
        <div
          key={uniqid()}
          onClick={() => props.openModal(project.id)}
          className="projects__grid-wrap"
        >
          <img
            key={uniqid()}
            src={project.image}
            className="projects__grid-item box-shadow"
            alt={`project_${project.id}`}
          />
          <h1 key={uniqid()} className="projects__grid-title">
            {project.name}
          </h1>
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