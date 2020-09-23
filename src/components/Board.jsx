import React from 'react';
import TileRow from './TileRow';

const Board = function (props) {
  const { gameData } = props;

  const board = gameData.map((boardRow) => {
    return (
      <tr>
        <TileRow boardRow={boardRow} />
      </tr>
    );
  });

  return board;
};

export default Board;
