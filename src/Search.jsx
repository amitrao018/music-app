import React from 'react';
import styles from './Search.module.css';

const Search = () => {
  return (
    <input
      type="text"
      placeholder="Search for music..."
      className={styles.search}
    />
  );
};

export default Search;



