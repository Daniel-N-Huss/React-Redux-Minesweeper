import React from 'react';
import './App.scss';
import Board from './components/Board';
import { useSelector, useDispatch } from 'react-redux';
import { reset } from './helpers/redux/actions';

function App() {
  const gameBoard = useSelector((state) => state.gameBoard);
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <header className='App-header'>
        <p>A Minesweeper Game Will Appear</p>
        <button onClick={() => dispatch(reset())}>Reset The Game!</button>
        <Board gameData={gameBoard} />
      </header>
    </div>
  );
}

export default App;
