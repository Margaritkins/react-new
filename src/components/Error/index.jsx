import React from 'react';
import errorPict from './error.png'
import styles from './Error.module.scss'

const Error = () => {
  return (
    <div className={styles.error}>
      <img src={errorPict} alt = 'error' />
      {/* <img src='./images/error.png' alt='error' /> */}
    </div>
  );
}

export default Error;
