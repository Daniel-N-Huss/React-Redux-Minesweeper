import React from 'react';
import './App.scss';
import Tile from './components/Tile';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>A Minesweeper Game Will Appear</p>
        <table>
          <tbody>
            <tr>
              <Tile mine={false} revealed={false} dangerRating={3}/>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
