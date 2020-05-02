import React from "react";

const Description = (props) => (
  <div className={`${props.name}__description`}>{props.children}</div>
);

export default Description;
