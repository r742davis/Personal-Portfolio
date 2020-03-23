import React from 'react';

const profilePicture = (props) => {
  return (
    <div className="picture-cv-container">
      <img
        src={props.profile}
        className="about__profile"
        alt="profile of richard"
      />
    </div>
  )
};

export default profilePicture;
