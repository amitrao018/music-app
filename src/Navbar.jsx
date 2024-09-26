import React from 'react';
import styles from './Navbar.module.css';
import Logo from './assets/logo.png';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img src={Logo} alt="Logo" className={styles.logo} />
      <input
        type="text"
        placeholder="Search a album of your choice"
        className={styles.searchBar}
      />
      <button className={styles.feedbackButton}>Give Feedback</button>
    </nav>
  );
};

export default Navbar;



