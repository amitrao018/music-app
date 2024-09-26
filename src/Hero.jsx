import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.textContainer}>
        <h1>100 Thousand Songs, ad-free <br />Over thousands podcast episodes</h1>
      </div>
      <div className={styles.imageContainer}>
        <img
          src={require("./assets/vibrating-headphone 1.png")}
          width={212}
          alt="headphones"
        />
      </div>
    </div>
  );
}

export default Hero;


