import React, { useState } from 'react';
import '../Skills.css';

import angular from '../../../../../images/Icons/angular.png';
import bootstrap from '../../../../../images/Icons/bootstrap.png';
import css3 from '../../../../../images/Icons/css3.png';
import html5 from '../../../../../images/Icons/html5.png';
import javascript from '../../../../../images/Icons/javascript.png';
import jest from '../../../../../images/Icons/jest.png';
import jquery from '../../../../../images/Icons/jquery.png';
import react from '../../../../../images/Icons/react.png';
import redux from '../../../../../images/Icons/redux.png';
import sass from '../../../../../images/Icons/sass.svg';

const frontend = () => {
  const [ skillState ] = useState({
    skills: [
      {
        name: 'AngularJS',
        link: `${angular}`,
        alt: 'angular js'
      },
      {
        name: 'Bootstrap 4',
        link: `${bootstrap}`,
        alt: 'Bootstrap 4'
      },
      {
        name: 'CSS3',
        link: `${css3}`,
        alt: 'CSS 3'
      },
      {
        name: 'HTML5',
        link: `${html5}`,
        alt: 'HTML 5'
      },
      {
        name: 'JavaScript',
        link: `${javascript}`,
        alt: 'JavaScript'
      },
      {
        name: 'Jest',
        link: `${jest}`,
        alt: 'Jest'
      },
      {
        name: 'jQuery',
        link: `${jquery}`,
        alt: 'jQuery'
      },
      {
        name: 'ReactJS',
        link: `${react}`,
        alt: 'React JS'
      },
      {
        name: 'Redux',
        link: `${redux}`,
        alt: 'Redux'
      },
      {
        name: 'Sass',
        link: `${sass}`,
        alt: 'Sass'
      }
    ]
  });
  const skillList = skillState.skills.map((skill, index) => {
    return <li key={index}><img
      src={skill.link}
      className='skill-icon'
      alt={skill.alt}
    />{skill.name}</li>
  })
  return (
    <div className="skills-container">
      <div className="skills-title">
        <h4>Frontend Skills</h4>
      </div>
      <ul>
        {skillList}
      </ul>
    </div>
  )
};

export default frontend;
