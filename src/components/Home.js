import React, { Component } from 'react';
import './Styling/Home.css';
const ReactRotatingText = require('react-rotating-text');

const home = (props) => {
  return (
    <section id="home" onScroll={props.handleScroll}>
      <div className="home-container">
        <div className='tagline-container'>
          <h2>Hello, my name is</h2>
          <h2>Richard</h2>
        </div>
        <h1>
          <ReactRotatingText
            items={['Full-Stack Web Developer', 'UX Designer', 'Creative Writer', 'CSS Aficionado' 'Traveler', 'Doggo Enthusiast', 'Excessive Coffee Drinker', 'Wine Lover', 'Coder', 'Lifelong Learner', 'Obsessive Git Committer', 'React Reveler']}
            pause={3000}
            typingInterval={120}
            deletingInterval={30} />
        </h1>
      </div>
    </section>
  )
};

export default home;
