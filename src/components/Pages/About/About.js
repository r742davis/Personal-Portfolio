import React from 'react';

import './About.css';
import Description from './Description/Description';
import ProfilePicture from './ProfilePicture/ProfilePicture';


//Skill components
import Backend from './Skills/BackendDisplay/Backend';
import Frontend from './Skills/FrontendDisplay/Frontend';
import ResumeButton from './ResumeButton/ResumeButton';

const about = (props) => {
  return (
    <section id="about">
      <div className="title-container about-title">
        <h1 data-aos="fade-up">About Me</h1>
      </div>
      <div className="about-container">
        <ProfilePicture profile={props.profile}/>
        <div className="description-container" data-aos="fade-up">
          <h1>Richard Davis</h1>
          <h4>Full Stack Software Developer</h4>
          <ResumeButton resumeLink={props.resumeLink}/>
          <Description />
          <div className="skills-display-container">
            <Frontend />
            <Backend />
          </div>
        </div>
      </div>
    </section>
  )
}

export default about;
