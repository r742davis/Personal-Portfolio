import React from 'react';

import classes from './Backdrop.module.css';

const Backdrop = (props) => {
  return (
    <>
      {props.modalOpen && (
        <div className={`${classes.Backdrop} ${classes.ModalBackdrop}`} onClick={props.clicked}></div>
      )}

      {props.navOpen && (
        <div className={`${classes.Backdrop} ${classes.NavBackdrop}`} onClick={() => props.toggleNav()}></div>
      )}
    </>
  ) 
};

export default Backdrop;
