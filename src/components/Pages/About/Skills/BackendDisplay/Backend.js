import React, { useState } from 'react';

import '../Skills.css';

import express from '../../../../../images/Icons/express.png';
import mongo from '../../../../../images/Icons/mongo.jpg';
import node from '../../../../../images/Icons/node.svg';
import postgresql from '../../../../../images/Icons/postgresql.png';
import api from '../../../../../images/Icons/restful_api.png';
import rails from '../../../../../images/Icons/ruby_on_rails.png';


const backend = () => {
  const [ skillState ] = useState({
    skills: [
      {
        name: 'Express.js',
        link: `${express}`,
        alt: 'express'
      },
      {
        name: 'MongoDB',
        link: `${mongo}`,
        alt: 'mongoDB'
      },
      {
        name: 'Node.js',
        link: `${node}`,
        alt: 'node js'
      },
      {
        name: 'PostgreSQL',
        link: `${postgresql}`,
        alt: 'postgreSQL'
      },
      {
        name: 'RESTful APIs',
        link: `${api}`,
        alt: 'restful a p i'
      },
      {
        name: 'Ruby on Rails',
        link: `${rails}`,
        alt: 'ruby on rails'
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
        <h4>Backend Skills</h4>
      </div>
      <ul>
        {skillList}
      </ul>
    </div>
  )
};

export default backend;
