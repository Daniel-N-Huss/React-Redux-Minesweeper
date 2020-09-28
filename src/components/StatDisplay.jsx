import React from 'react';
import flagIcon from './flagIcon.png';
import stopwatchIcon from './stopwatch.png'
import './StatDisplay.scss';

const StatDisplay = function () {
  return (
    <span className='stats'>
      <div>
        <img src={flagIcon} alt='Flag Count' />
        <p>40</p>
      </div>
      <div>
        <img src={stopwatchIcon} alt='Timer' />
        <p>0</p>
      </div>
    </span>
  );
};

export default StatDisplay;
