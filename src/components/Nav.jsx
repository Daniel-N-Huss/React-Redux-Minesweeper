import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../helpers/redux/actions';
import './Nav.scss'

const Nav = function () {
  const dispatch = useDispatch();
  const gameState = useSelector((state) => state.gameState);


  const emoji = gameState === 'gameOver' ? '😵' : gameState === 'victory' ? '😎' : '😃'

  return (
    <thead>
      <tr>
      <th className={'reset'} onClick={() => dispatch(reset())}>{emoji}</th>
      </tr>
    </thead>
  );
};

export default Nav;
