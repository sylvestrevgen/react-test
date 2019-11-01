import React from 'react';
import Loader from 'react-loader-spinner';
import styles from './loadingSpinner.module.css';

const LoadingSpinner = () => (
  <div className={styles.loaderWrap}>
    <div className={styles.loader}>
      <Loader type="Oval" color="#5c68d1" height={100} width={100} />
    </div>
  </div>
);

export default LoadingSpinner;
