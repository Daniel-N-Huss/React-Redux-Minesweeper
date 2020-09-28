import React from 'react';
import ResetEmoji from './ResetEmoji';
import StatDisplay from './StatDisplay';
import './Nav.scss';

const Nav = function () {
  return (
    
      <nav className='nav'>
        <ResetEmoji />
        <StatDisplay />
      </nav>
    
  );
};

export default Nav;
