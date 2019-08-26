import React, { useState } from 'react';
import '../Skills.css';

const frontend = () => {
  const [ skillState ] = useState({
    skills: [
      {
        name: 'AngularJS',
        link: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/300/thumb/angular2.png',
        alt: 'angular js'
      },
      {
        name: 'Bootstrap 4',
        link: 'https://sdtimes.com/wp-content/uploads/2018/01/bootstrap-stack.png',
        alt: 'Bootstrap 4'
      },
      {
        name: 'CSS3',
        link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl_F-GgXnRsNYBTfuA-e9l84ZIz46UjUkgw3jufMIMrdS2QaemQg',
        alt: 'CSS 3'
      },
      {
        name: 'HTML5',
        link: 'https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png',
        alt: 'HTML 5'
      },
      {
        name: 'JavaScript',
        link: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
        alt: 'JavaScript'
      },
      {
        name: 'Jest',
        link: 'https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png',
        alt: 'Jest'
      },
      {
        name: 'jQuery',
        link: 'http://pluspng.com/img-png/jquery-logo-png-kategoriedateilogo-software-wikipedia-256.png',
        alt: 'jQuery'
      },
      {
        name: 'ReactJS',
        link: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
        alt: 'React JS'
      },
      {
        name: 'Redux',
        link: 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png',
        alt: 'Redux'
      },
      {
        name: 'Ruby',
        link: 'https://img.icons8.com/color/48/000000/ruby-gemstone.png',
        alt: 'Ruby'
      },
      {
        name: 'SASS',
        link: 'https://cdn.worldvectorlogo.com/logos/sass-1.svg',
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
