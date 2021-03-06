import React, { useState } from 'react';
import { Link } from 'gatsby';
import styles from '../css/navbar.module.css';
import { FaAlignRight } from 'react-icons/fa';
import links from '../constants/links';
import socialIcons from '../constants/social-icons';
import logo from '../images/apollo-icon.svg';

const Navbar = () => {
  const [isOpen, setNav] = useState(false);
  const toogleNav = () => {
    setNav((isOpen) => !isOpen);
  };
  console.log(isOpen);
  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="backroads logo" />
          <button type="button" className={styles.logoBtn} onClick={toogleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul className={isOpen ? `${styles.navLinks} ${styles.showNav}` : `${styles.navLinks}`}>
          {links.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            );
          })}
        </ul>
        <div className={styles.navSocialLinks}>
          {socialIcons.map((item, index) => {
            return (
              <a key={index} href={item.url} target="_blank">
                {item.icon}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
