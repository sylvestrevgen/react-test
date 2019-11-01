import React from 'react';
import PropTypes from 'prop-types';
import styles from './appBar.module.css';

const AppBar = ({ children }) => (
  <header className={styles.header}>{children}</header>
);

AppBar.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppBar;
