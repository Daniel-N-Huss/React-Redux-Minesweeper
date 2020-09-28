import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementTimer, victory } from '../helpers/redux/actions';
import flagIcon from './flagIcon.png';
import stopwatchIcon from './stopwatch.png';
import './StatDisplay.scss';

const StatDisplay = function () {
  const dispatch = useDispatch();
  let timer = useSelector((state) => state.timer);
  let flagCount = useSelector((state) => state.flagCount);
  let gameState = useSelector((state) => state.gameState);
  let victoryCheck = useSelector((state) => state.gameData.victoryTracker);

  useEffect(() => {
    let interval;

    if (gameState === 'active') {
      interval = setInterval(() => {
        dispatch(incrementTimer());

        if (victoryCheck.length === 0) {
          dispatch(victory());
        }
      }, 1000);
    } else if (gameState !== 'active' && timer !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [gameState, timer, dispatch]);

  return (
    <span className='stats'>
      <div>
        <img src={flagIcon} alt='Flag Count' />
        <p>{flagCount}</p>
      </div>
      <div>
        <img src={stopwatchIcon} alt='Timer' />
        <p>{timer}</p>
      </div>
    </span>
  );
};

export default StatDisplay;
