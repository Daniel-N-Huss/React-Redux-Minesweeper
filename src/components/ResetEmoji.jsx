import React from 'react';
import { reset } from '../helpers/redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import './ResetEmoji.scss'

const ResetEmoji = function () {
  const dispatch = useDispatch();
  const gameState = useSelector((state) => state.gameState);

  const emoji =
    gameState === 'gameOver' ? '😵' : gameState === 'victory' ? '😎' : '😃';

  return (
    <div className={'reset'} colSpan={2} onClick={() => dispatch(reset())}>
      {emoji}
    </div>
  );
};

export default ResetEmoji;
