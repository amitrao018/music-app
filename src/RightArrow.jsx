import React from 'react';
import rightArrowIcon from './assets/right-arrow.svg'; // Update the path accordingly

function RightArrow({ onClick }) {
  return (
    <img src={rightArrowIcon} alt="Right Arrow" onClick={onClick} style={{ cursor: 'pointer' }} />
  );
}

export default RightArrow;
