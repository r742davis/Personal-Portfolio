import React from "react";
import "./Home.css";
// const ReactRotatingText = require("react-rotating-text");

const home = props => {
  // const terms = [
  //   "Full-Stack Web Developer",
  //   "React Engineer",
  //   "Creative Writer",
  //   "CSS Aficionado",
  //   "Traveler",
  //   "Doggo Enthusiast",
  //   "Excessive Coffee Drinker",
  //   "Wine Lover",
  //   "Coder",
  //   "Lifelong Learner",
  // ];
  return (
    <section id="home" onScroll={props.handleScroll}>
      <div className="home-container">
        <div className="tagline-container">
          <h2>Hello! My name is</h2>
          <h2>Richard</h2>
          <h2>Davis</h2>
          <a href="#contact">Contact</a>
          <a href={props.resumeLink} target="_blank" rel="noopener noreferrer" >Resume</a>
        </div>
        {/* <h1>
          <ReactRotatingText
            items={terms}
            pause={2500}
            typingInterval={150}
            deletingInterval={50}
          />
        </h1> */}
      </div>
    </section>
  );
};

export default home;
