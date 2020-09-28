import React from 'react';
import './App.scss';
import Board from './components/Board';
import Nav from './components/Nav';
import { useSelector, useDispatch } from 'react-redux';
import { incrementFlagCount } from './helpers/redux/actions'

function App() {
  const gameBoard = useSelector((state) => state.gameBoard);

  const dispatch = useDispatch();

  return (
    <div className='App'>
      <header className='App-header'>
        <p>A Minesweeper Game Will Appear</p>
        <button onClick={()=> dispatch(incrementFlagCount())}>+++</button>
        <Nav />
        <table className='board'>
          <Board gameData={gameBoard} />
        </table>
      </header>
    </div>
  );
}

export default App;
