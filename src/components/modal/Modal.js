import React from 'react';
import PropTypes from 'prop-types';

import './Modal.css';

const Modal = ({ children, customClass, show, closeCallback }) => (
  
)

Modal.propTypes = {
  children: PropTypes.element,
  customClass: PropTypes.string,
  show: PropTypes.bool,
  closeCallback: PropTypes.func
}

Modal.defaultProps = {
  children: <div>Empty Modal</div>,
  customClass: '',
  show: false,
  closeCallback: () => (false)
};

export default Modal;
