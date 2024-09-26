import React from 'react';
import RightArrowIcon from './assets/right-arrow.svg'; // Adjust the path if necessary

function RightArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        position: 'absolute',
        right: '10px', // Adjust the positioning
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
        src={RightArrowIcon} 
        alt="Right Arrow" 
        style={{ width: '40px', height: '40px' }} // Adjust the size as needed
      />
    </button>
  );
}

export default RightArrow;



