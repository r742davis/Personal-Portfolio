import React from 'react';

const modal = (props) => {
  return (
    <div className="backdrop">
      <div className="modal">
        <div className="modal-grid">
          <div className="close-modal">
            <i onClick={props.closeModal} className="fas fa-times"></i>
          </div>
          <div className="project-picture">
            <img src={props.image} alt={props.alt} />
          </div>
          <div className="project-title">
            <h2>{props.name}</h2>
          </div>
          <div className="project-description">
            <p>{props.description}</p>
          </div>
          <div className="project-tech">
            <h4>Tech:</h4>
          </div>
          <div className="project-tech-description">
            <p>{props.tech}</p>
          </div>
          <div className="project-links">
            <h4>Links:</h4>
          </div>
          <div className="project-links-description">
            <p><a href={props.link}>{props.linkName}</a></p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default modal;