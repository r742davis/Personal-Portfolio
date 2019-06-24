import React, { useState } from 'react';
import './Skills.css';

const backend = () => {
  const [ skillState ] = useState({
    skills: [
      {
        name: 'Express.js',
        link: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/thumb/expressjslogo.png',
        alt: 'express'
      },
      {
        name: 'MongoDB',
        link: 'https://cdn-images-1.medium.com/max/449/1*NRCOyVBY6Jiqr4Q9A1zoaQ.png',
        alt: 'mongoDB'
      },
      {
        name: 'Node.js',
        link: 'https://www.balena.io/docs//img/language/nodejs.svg',
        alt: 'node js'
      },
      {
        name: 'PostgreSQL',
        link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/540px-Postgresql_elephant.svg.png',
        alt: 'postgreSQL'
      },
      {
        name: 'RESTful APIs',
        link: 'https://vitworks.com/wp-content/uploads/2017/02/consuming-restful-api.png',
        alt: 'restful a p i'
      },
      {
        name: 'Ruby on Rails',
        link: 'https://s3-eu-west-1.amazonaws.com/devinterface-web/production/technologies/40/medium/rubylogo111.png?1444285834g',
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
    <>
      <div className="backend-skills-container">
        <div className="backend-skills-title">
          <h4>Backend Skills</h4>
        </div>
        <ul>
          {skillList}
        </ul>
      </div>
    </>
  )
};

export default backend;
