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
      <div className="about__container">
        <h1>Full Stack Developer, at your service!</h1>
        <h2>I specialize in React and MongoDB stacks, but I am excited to branch out into other languages and frameworks. </h2>
        <div className="about__skills-container">
          <Frontend />
          <Backend />
        </div>
      </div>
    </section>
  );
};

export default about;

{
  /* <div className="title-container about-title">
        <h1>About</h1>
      </div> */
}

{
  /* <h1 className="about__name">
      <ProfilePicture profile={props.profile} />
      Richard Davis
    </h1> */
}
{
  /* <div className="about__description-container">
      <h4>Full Stack Software Developer</h4>
      <ResumeButton resumeLink={props.resumeLink} />
      <Description />
      <div className="skills-display-container">
        <Frontend />
        <Backend />
      </div>
    </div> */
}
