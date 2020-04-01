import React, { useState } from "react";

import "../Skills.css";

import express from "../../../../../images/Icons/express.png";
import mongo from "../../../../../images/Icons/mongodb.png";
import node from "../../../../../images/Icons/node.png";
import postgresql from "../../../../../images/Icons/postgresql.png";
import graphql from "../../../../../images/Icons/graphql.png";
import ruby from "../../../../../images/Icons/ruby.png";
import rails from "../../../../../images/Icons/ruby_on_rails.png";
const uniqid = require("uniqid");

const backend = () => {
  const [skillState] = useState({
    skills: [
      {
        name: "Node.js",
        link: `${node}`,
        alt: "node js"
      },
      {
        name: "MongoDB",
        link: `${mongo}`,
        alt: "mongoDB"
      },
      {
        name: "Express",
        link: `${express}`,
        alt: "express"
      },
      {
        name: "GraphQL",
        link: `${graphql}`,
        alt: "graph q l"
      },

      {
        name: "PostgreSQL",
        link: `${postgresql}`,
        alt: "postgreSQL"
      },
      {
        name: "Ruby",
        link: `${ruby}`,
        alt: "Ruby"
      },
      {
        name: "Ruby on Rails",
        link: `${rails}`,
        alt: "ruby on rails"
      }
    ]
  });

  const skillList = skillState.skills.map((skill, index) => {
    return (
      <li key={uniqid()}>
        <img src={skill.link} className="skill__icon" alt={skill.alt} />
      </li>
    );
  });

  return (
    <div className="skills__container box-shadow">
      <div className="skills__title">
        <h4>Backend</h4>
      </div>
      <ul className="skills__list">{skillList}</ul>
    </div>
  );
};

export default backend;
