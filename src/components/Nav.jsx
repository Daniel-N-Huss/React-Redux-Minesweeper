import React from 'react';
import ResetEmoji from './ResetEmoji';
import StatDisplay from './StatDisplay';
import './Nav.scss';

const Nav = function () {
  return (
    
      <nav className='nav'>
        <button className='placeholder'>Medium</button>
        <ResetEmoji />
        <StatDisplay />
      </nav>
    
  );
};

export default Nav;
