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
          <div className="modal__project-picture">
            <img src={props.image} alt={props.alt} />
          </div>
          <div className="modal__project-title">
            <h2>{props.name}</h2>
          </div>
          <div className="modal__project-description">
            <p>{props.description}</p>
          </div>
          <div className="modal__project-tech">
            <h4>Tech:</h4>
          </div>
          <div className="modal__project-tech-description">
            <p>{props.tech}</p>
          </div>
          <div className="modal__project-links">
            <h4>Links:</h4>
          </div>
          <div className="modal__project-links-description">
            <a href={props.link1}>{props.linkName1}</a>
            <a href={props.link2}>{props.linkName2}</a>
            <a href={props.link3}>{props.linkName3}</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default modal;
