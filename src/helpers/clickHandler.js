import { revealTile, gameOver } from '../helpers/redux/actions';

const clickHandler = function (dispatch, tileID, flag, mine) {
  if (!flag) {
    dispatch(revealTile(tileID));

    if (mine) {
      dispatch(gameOver())
    }
  }

};

export default clickHandler;
