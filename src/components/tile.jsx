import React from 'react';
import { useDispatch } from 'react-redux';
import { revealTile } from '../helpers/redux/actions';
import clickHandler from '../helpers/clickHandler';
import './Tile.scss';
import mineIcon from './mineIcon.png';
import flagIcon from './flag.png';

const Tile = function (props) {
  const dispatch = useDispatch();
  const { danger, id, revealed, mine } = props;

  let flag = true;

  /* 
    OKAY DAN, you're working on finding solutions to right click and display the flag, which would also disable left clicking.
*/

  const revealedTileContents = mine ? (
    <img src={mineIcon} class='mine' alt='Mine' />
  ) : (
    danger
  );


  const hiddenTileContents = flag ? (<img src={flagIcon} alt='Flag' />) : ' '

  const className = revealed
    ? `tile revealed danger_${danger}`
    : `tile hidden flag_${flag}`;

  


  return (
    <td
      key={id}
      className={className}
      onClick={() => clickHandler(dispatch, id, flag)}
      onContextMenu={(e) => {
        e.preventDefault();
        flag = !flag;
      }}
    >
      {revealed ? revealedTileContents : hiddenTileContents}
    </td>
  );
};

export default Tile;
