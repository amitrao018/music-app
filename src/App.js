import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Section from "./Section"; // Import Section for Top Albums
import styles from "./App.css"; // Your app styles

function App() {
  return (
    <div className={styles.appContainer}>
      <Navbar />
      <Hero />
      <Section title="Top Albums" /> {/* Render Section for Top Albums */}
    </div>
  );
}

export default App;









