import React from "react";
import "./Projects.css";
import Backdrop from "./Modal/Backdrop/Backdrop";
import Modal from "./Modal/Modal";

const renderProjects = ({ projects, modalOpen, closeModal, modalNumber }) =>
  projects.map(
    (project) =>
      project.id === modalNumber &&
      modalOpen && (
        <Modal key={project.id} closeModal={closeModal} {...project} />
      )
  );

const renderProjectImages = ({ projects, openModal }) =>
  projects.map((project) => {
    return (
      <div
        key={project.id}
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

const Projects = (props) => (
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

export default Projects;
