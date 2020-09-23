import React from 'react';
import Tile from './tile';

const TileRow = function (props) {
  const { boardRow } = props;

  const tileRow = boardRow.map((tile) => {
    return (
      <td>
        <Tile revealed={tile.revealed} mine={tile.mine} danger={tile.danger} />
      </td>
    );
  });
  return tileRow;
};

export default TileRow