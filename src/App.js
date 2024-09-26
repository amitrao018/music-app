import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'; // Import the Navbar component
import Section from './Section'; // Import the Section component

function App() {
  return (
    <Router>
      <Navbar searchData={[]} /> {/* Pass searchData to Navbar */}
      <Routes>
        <Route path="/" element={<Section />} /> {/* Render Section for the root path */}
        {/* Additional routes can be added here */}
      </Routes>
    </Router>
  );
}

export default App;






