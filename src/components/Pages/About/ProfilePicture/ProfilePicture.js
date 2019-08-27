import React from 'react';

const profilePicture = (props) => {
  return (
    <div className="picture-cv-container" data-aos="fade-up">
      <img
        src={props.profile}
        className="profile-picture"
        alt="profile of richard"
      />
    </div>
  )
};

export default profilePicture;
