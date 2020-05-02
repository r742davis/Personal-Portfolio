import React from "react";
import "./Projects.css";
import Backdrop from "./Modal/Backdrop/Backdrop";
import Modal from "./Modal/Modal";
const uniqid = require("uniqid");

const renderProjects = ({ projects, modalOpen, closeModal, modalNumber }) =>
  projects.map(
    (project) =>
      project.id === modalNumber &&
      modalOpen && (
        <Modal
          key={uniqid()}
          name={project.name}
          image={project.image}
          alt={project.alt}
          description={project.description}
          tech={project.tech}
          linkOne={project.link1}
          linkTwo={project.link2}
          nameOne={project.linkName1}
          nameTwo={project.linkName2}
          closeModal={closeModal}
        />
      )
  );

const renderProjectImages = ({ projects, openModal }) =>
  projects.map((project) => {
    return (
      <div
        key={uniqid()}
        onClick={() => openModal(project.id)}
        className="projects__grid-wrap"
      >
        <img
          src={project.image}
          className="projects__grid-item box-shadow"
          alt={`project_${project.id}`}
        />
        <h1 className="projects__grid-title">{project.name}</h1>
      </div>
    );
  });

function Projects(props) {
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
          {renderProjectImages(props)}
        </div>
      </section>
      {renderProjects(props)}
    </>
  );
}

export default Projects;
