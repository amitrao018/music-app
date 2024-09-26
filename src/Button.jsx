import React from "react";
import styles from "./Button.module.css"; // Ensure to create this file

function Button({ children, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
