import React from 'react';
import styles from './Navbar.module.css';
import Logo from './assets/logo.png';
import Button from './Button'; // Import the reusable Button component

const Navbar = () => {
  const handleFeedbackClick = () => {
    alert("Feedback button clicked!");
  };

  return (
    <nav className={styles.navbar}>
      <img src={Logo} alt="Logo" className={styles.logo} />
      <input
        type="text"
        placeholder="Search an album of your choice"
        className={styles.searchBar}
      />
      <Button onClick={handleFeedbackClick}>Give Feedback</Button>
    </nav>
  );
};

export default Navbar;



