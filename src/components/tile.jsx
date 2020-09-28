import React from 'react';
import { useDispatch } from 'react-redux';
import {revealTile} from '../helpers/redux/actions'
import './Tile.scss'
import mineIcon from './mineIcon.png';
import flagIcon from './flag.png'

const Tile = function (props) {
  const dispatch = useDispatch();
  const {danger, id, revealed, mine} = props;
  
  const flag = false;

/* 
    OKAY DAN, you're working on finding solutions to right click and display the flag, which would also disable left clicking.
*/

  const tileContents = mine ? <img src={mineIcon} class="mine" alt='Mine'/> : danger

  const className = revealed ? `tile revealed danger_${danger}` : "tile hidden";


  return <td key={id} className={className} onClick={() => dispatch(revealTile(id))} onContextMenu>
    {revealed ? tileContents : ' '}
  </td>;
};

export default Tile;
