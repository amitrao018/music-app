import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button'; // Ensure Button is correctly imported
import Logo from './Logo'; // Ensure Logo is correctly imported
import Search from './Search'; // Ensure Search is correctly imported
import styles from './Navbar.module.css'; // Ensure styles are correctly imported

function Navbar({ searchData }) { // Accept searchData as a prop
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <Search // Include the Search component
        placeholder="Search a song of your choice"
        searchData={searchData} // Pass the searchData function to Search
      />
      <Button>Give Feedback</Button>
    </nav>
  );
}

export default Navbar;



