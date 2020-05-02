import React from "react";

import "./About.css";
import ProfilePicture from "./ProfilePicture/ProfilePicture";
import Description from "./Description/Description";

//Skill components
import Backend from "./Skills/BackendDisplay/Backend";
import Frontend from "./Skills/FrontendDisplay/Frontend";

const About = props => {
  return (
    <section id="about">
      <div className="about__container" data-aos="fade-up">
        <ProfilePicture profile={props.profile} />
        <h1>I'm a Full Stack Developer!</h1>
        <Description name="about">
          <p>
          I specialize in React and MongoDB stacks, but I am excited to branch
          out into other languages and frameworks. I'm currently looking for
          full-time opportunities alongside current freelance projects.
          </p>
        </Description>
        <div className="about__skills-container">
          <Frontend />
          <Backend />
        </div>
      </div>
    </section>
  );
};

export default About;
