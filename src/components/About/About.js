import React from "react";
import "./About.css";
import ProfilePicture from "./ProfilePicture/ProfilePicture";
import Description from "./Description/Description";
//Skill components
import Backend from "./Skills/BackendDisplay/Backend";
import Frontend from "./Skills/FrontendDisplay/Frontend";

const About = (props) => (
  <section id="about">
    <div className="about__container" data-aos="fade-up">
      <ProfilePicture profile={props.profile} />
      <h1>I'm a Full Stack Developer!</h1>
      <Description name="about">
        <p>
          I specialize in full stack React/Node.js/MongoDB applications, <em>but</em> I am excited to branch
          out into other languages and frameworks. Really, any kind of web technology is fair game.
        </p>
        <p>
        I'm currently looking for full-time opportunities in New York City<span role="img" aria-label="Statue of Liberty, New York">🗽</span> or Los Angeles<span role="img" aria-label="Palm Tree, Los Angeles">🌴</span> :D
        </p>
      </Description>
      <div className="about__skills-container">
        <Frontend />
        <Backend />
      </div>
    </div>
  </section>
);

export default About;
