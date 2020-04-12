import React from 'react';

import classes from './Backdrop.module.css';

const Backdrop = (props) => {
  return (
    <>
      {props.modalOpen && (
        <div className={`${classes.Backdrop} ${classes.Modal}`} onClick={props.clicked}></div>
      )}

      {props.navOpen && (
        <div className={`${classes.Backdrop} ${classes.Nav}`} onClick={props.clicked}></div>
      )}
    </>
  ) 
};

export default Backdrop;
