import React from 'react';

import './About.css';


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
        <div className="picture-cv-container" data-aos="fade-up">
          <img
            src={props.profile}
            className="profile-picture"
            alt="profile of richard"
          />
        </div>
        <div className="description-container" data-aos="fade-up">
          <h1>Richard Davis</h1>
          <h4>Full Stack Software Developer</h4>
          <ResumeButton resumeLink={props.resumeLink}/>
          <hr />
          <div className="skills-display-container">
            <Frontend />
            <Backend />
          </div>
          <div className='paragraph-container'>
            <p>
            It can take a long time to figure out what you truly are passionate about. I entered college thinking I wanted to go into politics and become a lawyer. After deciding politics would destroy my sanity, I reached into the mental void by studying psychology. I eventually landed on cellular and molecular and wanted to pursue my medical doctorate as a psychiatrist. I was never truly passionate about any of these paths. I wanted to work with people but also be mentally challenged with puzzles and thought-experiments.
            </p>
            <p>
            The day I found coding was the day I found my passion.
            </p>
            <p>
            What drew me to coding as a career was the idea of constantly growing. The entire industry, from tech giants all the way down to the individual, is constantly evolving. There's always some new tech to learn. That journey is what excites me!
            </p>
            <p>
            One of my personal strengths is my ability to communicate effectively and help people understand each other's perspectives. I have worked as a grade school science teaching assistant, run community meetings, planned large-scale county events, and worked as a counselor. I can connect people and have knack for talking to anyone.
            </p>
            <p>
            I feel that effective communication is the cornerstone of any good programming team. I aim to work with my fellow programmers and figure out solutions together.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default about;
