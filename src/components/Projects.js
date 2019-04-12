import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <>
      <section id="projects">
        <div className="title-container">
          <h1 data-aos="fade-up">Projects Page</h1>
        </div>
        <div className="projects-container">
          <div className="project-grid" id="project-grid-1"></div>
          <div className="project-grid" id="project-grid-2"></div>
          <div className="project-grid" id="project-grid-3"></div>
          <div className="project-grid" id="project-grid-4"></div>
          <div className="project-grid" id="project-grid-5"></div>
          <div className="project-grid" id="project-grid-6"></div>
        </div>
      </section>
      </>
    )
  }
}

export default Projects;
