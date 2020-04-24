import React from 'react';
import Title from '../Title';
import styles from '../../css/about.module.css';
import img from '../../images/our-team.jpg';
const About = () => {
  return (
    <div>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about company" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4> Background of our company</h4>
          <p>
            Duis sit amet nibh non sapien tincidunt bibendum. Curabitur rutrum justo id leo ornare,
            suscipit lobortis augue volutpat. Sed ligula arcu, interdum eu magna eget, tristique
            aliquet nibh.
          </p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, earum.</p>
          <button type="button" className="btn-primary">
            Read More
          </button>
        </article>
      </div>
    </div>
  );
};

export default About;
