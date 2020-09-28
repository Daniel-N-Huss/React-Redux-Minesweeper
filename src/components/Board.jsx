import React from 'react';
import TileRow from './TileRow';
import './Board.scss';

const Board = function (props) {
  const { gameBoard } = props;

  const board = gameBoard.map((boardRow, index) => {
    return (
      <tr className='tileRow' key={index}>
        <TileRow boardRow={boardRow} />
      </tr>
    );
  });
  return <tbody>{board}</tbody>;
};

export default Board;
