import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clickHandler from '../helpers/clickHandler';
import rightClickHandler from '../helpers/rightClickHandler';
import './Tile.scss';
import mineIcon from './mineIcon.png';
import flagIcon from './flagIcon.png';

const Tile = function (props) {
  const dispatch = useDispatch();
  const gameState = useSelector((state) => state.gameState);

  const { danger, id, revealed, mine, flag } = props;

  const revealedTileContents = mine ? (
    <img src={mineIcon} className='mine' alt='Mine' />
  ) : (
    danger
  );

  const hiddenTileContents = flag ? <img src={flagIcon} alt='Flag' /> : ' ';

  //Display mines if manually debugging
  // const hiddenTileContents = mine ? <img src={flagIcon} alt='Flag' /> : ' ';

  const className = revealed
    ? `tile revealed danger_${danger}`
    : `tile hidden flag_${flag}`;

  return (
    <td
      key={id}
      className={className}
      onClick={() => clickHandler(dispatch, props, gameState)}
      onContextMenu={(e) => {
        e.preventDefault();
        rightClickHandler(dispatch, id, flag);
      }}
    >
      {revealed ? revealedTileContents : hiddenTileContents}
    </td>
  );
};

export default Tile;
