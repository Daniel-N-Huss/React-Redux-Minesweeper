import React from 'react';
import './App.scss';
import Board from './components/Board';

const {setupGameBoard} = require('./helpers/gameData/setupGameBoard');

const gameData = setupGameBoard(16, 40)



function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>A Minesweeper Game Will Appear</p>
        <table>
          <tbody>
            <Board gameData={gameData}/>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
