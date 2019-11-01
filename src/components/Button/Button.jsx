import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.css';

const Button = ({ type, label, onClick, customStyles }) => (
  <button
    type={type}
    onClick={onClick}
    className={styles.button}
    style={customStyles}
  >
    {label}
  </button>
);

Button.defaultProps = {
  label: '',
  type: 'button',
  customStyles: {},
  onClick: () => null,
};

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  customStyles: PropTypes.shape({}),
  onClick: PropTypes.func,
};

export default Button;
