import React, {useState} from 'react';
import './Tile.scss'

const Tile = function (props) {

  const {mine, dangerRating} = props;
  const [revealed, setRevealed] = useState(props.revealed)


  return <td className="tile" onClick={() => setRevealed(true)}>
    {revealed ? dangerRating : ' '}
  </td>;
};

export default Tile;
