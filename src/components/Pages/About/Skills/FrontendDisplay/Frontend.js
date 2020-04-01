import React, { useState } from "react";
import "../Skills.css";

import angular from "../../../../../images/Icons/angular.png";
import bootstrap from "../../../../../images/Icons/bootstrap.png";
import javascript from "../../../../../images/Icons/javascript.png";
import jquery from "../../../../../images/Icons/jquery.png";
import react from "../../../../../images/Icons/react.png";
import redux from "../../../../../images/Icons/redux.png";
import sass from "../../../../../images/Icons/sass.svg";

const frontend = () => {
  const [skillState] = useState({
    skills: [
      {
        name: "JavaScript",
        link: `${javascript}`,
        alt: "JavaScript"
      },
      {
        name: "React.js",
        link: `${react}`,
        alt: "React JS"
      },
      {
        name: "Redux",
        link: `${redux}`,
        alt: "Redux"
      },
      {
        name: "Sass",
        link: `${sass}`,
        alt: "Sass"
      },
      {
        name: "AngularJS",
        link: `${angular}`,
        alt: "angular js"
      },
      {
        name: "Bootstrap 4",
        link: `${bootstrap}`,
        alt: "Bootstrap 4"
      },
      {
        name: "jQuery",
        link: `${jquery}`,
        alt: "jQuery"
      }
    ]
  });
  const skillList = skillState.skills.map((skill, index) => {
    return (
      <li key={index}>
        <img src={skill.link} className="skill__icon" alt={skill.alt} />
      </li>
    );
  });
  return (
    <div className="skills__container box-shadow">
      <div className="skills__title">
        <h4>Frontend</h4>
      </div>
      <ul className="skills__list">{skillList}</ul>
    </div>
  );
};

export default frontend;
