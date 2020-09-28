import React from 'react';
import './App.scss';
import Board from './components/Board';
import Nav from './components/Nav';
import { useSelector } from 'react-redux';

function App() {
  const gameData = useSelector((state) => state.gameData);

  return (
    <div className='App'>
      <p>Welcome to Daniel's React/Redux-Sweeper</p>
      <header className='minesweeper-box'>
        <Nav />
        <table className='board'>
          <Board gameBoard={gameData.gameBoard} />
        </table>
      </header>
    </div>
  );
}

export default App;
