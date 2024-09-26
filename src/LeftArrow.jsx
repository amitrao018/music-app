import React from 'react';
import leftArrowIcon from './assets/left-arrow.svg'; // Update the path accordingly

function LeftArrow({ onClick }) {
  return (
    <img src={leftArrowIcon} alt="Left Arrow" onClick={onClick} style={{ cursor: 'pointer' }} />
  );
}

export default LeftArrow;