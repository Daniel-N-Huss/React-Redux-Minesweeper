import React from 'react';
import './App.scss';
import Board from './components/Board';
import { useSelector } from 'react-redux';

function App() {
  const gameBoard = useSelector(state => state.gameBoard)
  return (
    <div className='App'>
      <header className='App-header'>
        <p>A Minesweeper Game Will Appear</p>
        <table>
          <tbody>
            <Board gameData={gameBoard} />
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
