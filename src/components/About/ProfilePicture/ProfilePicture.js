import React from "react";

const profilePicture = props => {
  return (
    <img
      src={props.profile}
      className="about__profile"
      alt="profile of richard"
    />
  );
};

export default profilePicture;
