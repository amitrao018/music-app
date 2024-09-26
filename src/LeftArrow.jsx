import React from 'react';
import LeftArrowIcon from './assets/left-arrow.svg'; // Adjust the path if necessary

function LeftArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        position: 'absolute',
        left: '10px', // Adjust the positioning
        top: '50%',
        transform: 'translateY(-50%)',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '10px', // Add some padding for a larger clickable area
        zIndex: 10,
      }}
    >
      <img 
        src={LeftArrowIcon} 
        alt="Left Arrow" 
        style={{ width: '40px', height: '40px' }} // Adjust the size as needed
      />
    </button>
  );
}

export default LeftArrow;



