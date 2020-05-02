import React from "react";

import "./ResumeButton.css";

const ResumeButton = (props) => (
  <div className="cv-button-container">
    <a href={props.resumeLink} target="_blank" rel="noopener noreferrer">
      <button className="cv-button">Download CV</button>
    </a>
  </div>
);

export default ResumeButton;
