import React from 'react';
import './App.scss';
import Board from './components/Board';
import Nav from './components/Nav';
import { useSelector } from 'react-redux';

function App() {
  const gameBoard = useSelector((state) => state.gameBoard);

  return (
    <div className='App'>
      <header className='App-header'>
        <p>A Minesweeper Game Will Appear</p>
        <table className='board'>
          <Nav />
          <Board gameData={gameBoard} />
        </table>
      </header>
    </div>
  );
}

export default App;
