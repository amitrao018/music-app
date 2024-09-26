import React from "react";
import styles from "./Hero.module.css"; // Ensure this path is correct
import headphoneImage from "./assets/hero_headphones.png"; // Ensure the filename and path are correct

function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img
          src={headphoneImage}
          width={212}
          alt="headphones"
        />
      </div>
    </div>
  );
}

export default Hero;
