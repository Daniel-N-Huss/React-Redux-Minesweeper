import React from 'react';
import Tile from './Tile';

const TileRow = function (props) {
  const { boardRow } = props;

  const tileRow = boardRow.map((tile, index) => {
    return (
      <Tile
        key={index}
        id={tile.id}
        revealed={tile.revealed}
        mine={tile.mine}
        danger={tile.danger}
        flag={tile.flag}
      />
    );
  });
  return tileRow;
};

export default TileRow;
