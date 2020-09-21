import React from 'react';
import './App.scss';
import Tile from './components/tile';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>A Minesweeper Game Will Appear</p>
        <table>
          <tbody>
            <tr>
              <Tile />
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
