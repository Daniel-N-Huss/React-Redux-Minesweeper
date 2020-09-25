import React from 'react';
import './App.scss';
import Board from './components/Board';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>A Minesweeper Game Will Appear</p>
        <table>
          <tbody>
            <Board gameData="BRING STORE IN HERE"/>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
