import React from 'react';

const Description = (props) => {
  return (
    <div className={`${props.name}__description`}>
      {props.children}
    </div>
  )
};

export default Description;
