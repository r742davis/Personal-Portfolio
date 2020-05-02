import React from "react";
import "./Home.css";

const Home = (props) => (
  <section id="home" onScroll={props.handleScroll}>
    <div className="home-container">
      <div className="tagline-container">
        <h2>Hello! My name is</h2>
        <h2>Richard</h2>
        <h2>Davis</h2>
        <a href="#contact">Contact</a>
        <a href={props.resumeLink} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </div>
    </div>
  </section>
);

export default Home;
