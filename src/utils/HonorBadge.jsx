import React from 'react';
import shield from '../assets/images/icons/shield.png';
import stars from '../assets/images/icons/stars.png';

const HonorBadge = ({ order, customClass = '' }) => {
  return (
    <div className={`honor-badge ${customClass}`}>
      <div className='honor-badge-container'>
        <div className='honor-badge-shield'>
          <img src={shield} alt='' />
        </div>
        <span className='honor-badge-content'>{order}</span>
        <div className='honor-badge-stars'>
          <img src={stars} alt='' />
        </div>
      </div>
    </div>
  );
};

export default HonorBadge;
