import React, { Component } from 'react';
import project_1 from '../images/bear.jpg';


class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen1: false,
      isOpen2: false,
      isOpen3: false,
      isOpen4: false,
      isOpen5: false,
      isOpen6: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    console.log("Hi");
  }
  toggleModal1 = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
    console.log(this.state.isOpen);
  }
  toggleModal2 = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
    console.log(this.state.isOpen);
  }
  toggleModal3 = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
    console.log(this.state.isOpen);
  }
  toggleModal4 = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
    console.log(this.state.isOpen);
  }
  toggleModal5 = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
    console.log(this.state.isOpen);
  }
  toggleModal6 = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
    console.log(this.state.isOpen);
  }

  render() {
    return (
      <>
      <section id="projects">
        <div className="title-container">
          <h1 data-aos="fade-up">My Projects</h1>
        </div>
        <div className="projects-container" data-aos="fade-up">
          <img
          src={project_1}
          className="project-grid"
          id="project-grid-1"
          onClick={this.toggleModal1}
          />
          <div
          className="project-grid"
          id="project-grid-2" onClick={this.toggleModal2}></div>
          <div
          className="project-grid"
          id="project-grid-3" onClick={this.toggleModal3}></div>
          <div
          className="project-grid"
          id="project-grid-4"
          onClick={this.toggleModal4}></div>
          <div
          className="project-grid"
          id="project-grid-5"
          onClick={this.toggleModal5}></div>
          <div
          className="project-grid"
          id="project-grid-6"
          onClick={this.toggleModal6}></div>
        </div>
      </section>
      </>
    )
  }
}

export default Projects;
