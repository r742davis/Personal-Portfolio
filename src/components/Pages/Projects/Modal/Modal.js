import React from "react";
import "./Modal.css";

const modal = props => {
  return (
    <>
      <div className="modal">
        <div className="modal__grid">
          <div className="modal__close">
            <i onClick={props.closeModal} className="fas fa-times"></i>
          </div>
          <div className="modal__project-container">
            <div className="modal__project-picture">
              <img src={props.image} alt={props.alt} />
            </div>
            <h1 className="modal__project-title">{props.name}</h1>
            <p className="modal__project-description">{props.description}</p>
            <h2 className="modal__project-tech">Tech:</h2>
            <p className="modal__project-tech-description">{props.tech}</p>
            <div className="modal__button-container">
              <a className="modal__button" href={props.link1}>
                Website
              </a>
              <a className="modal__button" href={props.link2}>
                Project Code
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default modal;
