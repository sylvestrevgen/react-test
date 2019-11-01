import React from 'react';
import PropTypes from 'prop-types';
import styles from './infoText.module.css';

const InfoText = ({ label }) => <p className={styles.info}>{label}</p>;

InfoText.propTypes = {
  label: PropTypes.string.isRequired,
};

export default InfoText;
