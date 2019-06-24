import React, { useState } from 'react';
import './Skills.css';

const backend = () => {
  const [ skillState, setSkillState ] = useState({
    skills: [
      {
        name: 'Express.js',
        link: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/thumb/expressjslogo.png',
        alt: 'express'
      },
      {
        name: 'Express.js',
        link: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/thumb/expressjslogo.png',
        alt: 'express'
      },
      {
        name: 'Express.js',
        link: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/thumb/expressjslogo.png',
        alt: 'express'
      },
      {
        name: 'Express.js',
        link: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/thumb/expressjslogo.png',
        alt: 'express'
      },
      {
        name: 'Express.js',
        link: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/thumb/expressjslogo.png',
        alt: 'express'
      }
    ]
  });

  const skillList = skillState.skills.map(skill => {
    return <li><img
      src={skill.link}
      className='skill-icon'
      alt={skill.alt}
      />{skill.name}</li>
  })

  return (
    <>
      <div className="backend-skills-container">
        <div className="backend-skills-title">
          <h4>Backend Skills</h4>
        </div>
        <ul>
        {skillList}

          <li><img
            src="https://cdn-images-1.medium.com/max/449/1*NRCOyVBY6Jiqr4Q9A1zoaQ.png"
            className="skill-icon"
            alt="mongo db"/>MongoDB</li>
          <li><img
            src="https://www.balena.io/docs//img/language/nodejs.svg"
            className="skill-icon"
            alt="node js"/>Node.js</li>
          <li><img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/540px-Postgresql_elephant.svg.png"
            className="skill-icon"
            alt="Postgre SQL"/>PostgreSQL</li>
          <li><img
            src="https://s3-eu-west-1.amazonaws.com/devinterface-web/production/technologies/40/medium/rubylogo111.png?1444285834"
            className="skill-icon"
            alt="ruby on rails"/>Ruby on Rails</li>
        </ul>
      </div>
    </>
  )
};

export default backend;
