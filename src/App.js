import React from 'react';
import './App.scss';
import TileRow from './components/TileRow';

const {setupGameBoard} = require('./helpers/gameData/setupGameBoard');

const gameData = setupGameBoard(16, 40)

console.log(gameData);

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>A Minesweeper Game Will Appear</p>
        <table>
          <tbody>
            <TileRow boardRow={gameData[0]}/>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
