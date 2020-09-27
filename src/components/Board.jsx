import React from 'react';
import TileRow from './TileRow';
import "./Board.scss"

const Board = function (props) {
  const { gameData } = props;

  const board = gameData.map((boardRow, index) => {
    return (
      <tr className='tileRow' key={index}>
        <TileRow boardRow={boardRow} />
      </tr>
    );
  });
  return (
    <table className="board">
      <tbody>{board}</tbody>
    </table>
  );
};

export default Board;
