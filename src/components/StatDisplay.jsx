import React from 'react';
import { useSelector } from 'react-redux';
import flagIcon from './flagIcon.png';
import stopwatchIcon from './stopwatch.png'
import './StatDisplay.scss';

const StatDisplay = function () {

  //let timer = useSelector((state) => {})
  let flagCount = useSelector((state) => state.flagCount);

  return (
    <span className='stats'>
      <div>
        <img src={flagIcon} alt='Flag Count' />
        <p>{flagCount}</p>
      </div>
      <div>
        <img src={stopwatchIcon} alt='Timer' />
        <p>0</p>
      </div>
    </span>
  );
};

export default StatDisplay;
