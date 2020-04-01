import React from "react";

import "./About.css";
import ProfilePicture from "./ProfilePicture/ProfilePicture";

//Skill components
import Backend from "./Skills/BackendDisplay/Backend";
import Frontend from "./Skills/FrontendDisplay/Frontend";
import ResumeButton from "./ResumeButton/ResumeButton";

const about = props => {
  return (
    <section id="about">
      <div className="about__container" data-aos="fade-up">
        <ProfilePicture profile={props.profile} />
        <h1>Full Stack Developer, at your service!</h1>
        <h2>
          I specialize in React and MongoDB stacks, but I am excited to branch
          out into other languages and frameworks. I'm currently looking for
          full-time opportunities alongside current freelance projects.
        </h2>
        <div className="about__skills-container">
          <Frontend />
          <Backend />
        </div>
      </div>
    </section>
  );
};

export default about;
