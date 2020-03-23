import React from "react";

import "./About.css";
import Description from "./Description/Description";
import ProfilePicture from "./ProfilePicture/ProfilePicture";

//Skill components
import Backend from "./Skills/BackendDisplay/Backend";
import Frontend from "./Skills/FrontendDisplay/Frontend";
import ResumeButton from "./ResumeButton/ResumeButton";

const about = props => {
  return (
    <section id="about">
      <div className="title-container about-title">
        <h1>About</h1>
      </div>
      <div className="about__container box-shadow">
        <h1 className="about__name">
          <ProfilePicture profile={props.profile} />
          Richard Davis
        </h1>
        <div className="about__description-container">
          <h4>Full Stack Software Developer</h4>
          <ResumeButton resumeLink={props.resumeLink} />
          <Description />
          <div className="skills-display-container">
            <Frontend />
            <Backend />
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
