import React, {useState} from 'react';
import './Tile.scss'

const Tile = function (props) {

  const {mine, danger} = props;
  const [revealed, setRevealed] = useState(props.revealed)


  return <td className="tile" onClick={() => setRevealed(true)}>
    {revealed ? danger : ' '}
  </td>;
};

export default Tile;
