import React, { Component } from 'react';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    console.log("Hi");
  }

  render() {
    return (
      <>
      <section id="projects">
        <div className="title-container">
          <h1 data-aos="fade-up">My Projects</h1>
        </div>
        <div className="projects-container" data-aos="fade-up">
          <div
          className="project-grid"
          id="project-grid-1"
          onClick={() => this.handleClick()}
          ></div>
          <div className="project-grid" id="project-grid-2"><div className="grid-overlay"></div></div>
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
