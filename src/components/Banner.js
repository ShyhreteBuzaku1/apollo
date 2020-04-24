import React from 'react';
import styles from '../css/banner.module.css';
const Banner = ({ title, info, children }) => {
  return (
    <div className={styles.banner}>
      <h2>{title}</h2>
      <p>{info}</p>

      {children}
    </div>
  );
};

export default Banner;
