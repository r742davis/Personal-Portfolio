import React from 'react';

import classes from './Backdrop.module.css';

const backdrop = (props) => (
  props.modalOpen ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;
