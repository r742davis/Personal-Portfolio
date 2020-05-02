import React from "react";

const ProfilePicture = (props) => (
  <img
    src={props.profile}
    className="about__profile"
    alt="profile of richard davis"
  />
);

export default ProfilePicture;
