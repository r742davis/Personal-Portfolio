import React, { Component } from 'react';
import './Skills.css';

const frontend = () => {
  return (
    <div className="frontend-skills-container">
      <div className="frontend-skills-title">
        <h4>Frontend Skills</h4>
      </div>
      <ul>
        <li><img
          src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/300/thumb/angular2.png"
          className="skill-icon"
          alt="angular js"/>AngularJS</li>
        <li><img
          src="https://sdtimes.com/wp-content/uploads/2018/01/bootstrap-stack.png"
          className="skill-icon"
          alt="bootstrap"/>Bootstrap</li>
        <li><img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl_F-GgXnRsNYBTfuA-e9l84ZIz46UjUkgw3jufMIMrdS2QaemQg"
          className="skill-icon"
          alt="css"/>CSS3</li>
        <li><img
          src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png"
          className="skill-icon"
          alt="html"/>HTML5</li>
        <li><img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
          className="skill-icon"
          alt="javascript"/>JavaScript</li>
        <li><img
          src="http://pluspng.com/img-png/jquery-logo-png-kategoriedateilogo-software-wikipedia-256.png"
          className="skill-icon"
          alt="j query"/>jQuery</li>
        <li><img
          src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          className="skill-icon"
          alt="react"/>React.js</li>
        <li><img
          src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
          className="skill-icon"
          alt="redux"/>Redux</li>
        <li><img
          src="https://img.icons8.com/color/48/000000/ruby-gemstone.png"
          className="skill-icon"
          alt="ruby"/>Ruby</li>
        <li><img
          src="https://cdn.worldvectorlogo.com/logos/sass-1.svg"
          className="skill-icon"
          alt="sass"/>Sass</li>
      </ul>
    </div>
  )
};

export default frontend;
