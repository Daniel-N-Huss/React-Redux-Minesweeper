import React from 'react';
import { useDispatch } from 'react-redux';
import {revealTile} from '../helpers/redux/actions'
import './Tile.scss'
import mineIcon from './mineIcon.png';

const Tile = function (props) {
  const dispatch = useDispatch();
  const {danger, id, revealed, mine} = props;
  //const [revealed, setRevealed] = useState(props.revealed)

  const tileContents = mine ? <img src={mineIcon} class="mine" alt='Mine'/> : danger

  const className = revealed ? `tile revealed danger_${danger}` : "tile hidden";


  return <td key={id} className={className} onClick={() => dispatch(revealTile(id))}>
    {revealed ? tileContents : ' '}
  </td>;
};

export default Tile;
