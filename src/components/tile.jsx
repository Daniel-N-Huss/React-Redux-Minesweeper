import React from 'react';
import { useDispatch } from 'react-redux';
import clickHandler from '../helpers/clickHandler';
import rightClickHandler from '../helpers/rightClickHandler';
import './Tile.scss';
import mineIcon from './mineIcon.png';
import flagIcon from './flagIcon.png';
import { toggleFlag } from '../helpers/redux/actions';

const Tile = function (props) {
  const dispatch = useDispatch();
  const { danger, id, revealed, mine, flag } = props;

  const revealedTileContents = mine ? (
    <img src={mineIcon} class='mine' alt='Mine' />
  ) : (
    danger
  );

  const hiddenTileContents = flag ? <img src={flagIcon} alt='Flag' /> : ' ';

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
        rightClickHandler(dispatch, id, flag);
      }}
    >
      {revealed ? revealedTileContents : hiddenTileContents}
    </td>
  );
};

export default Tile;
