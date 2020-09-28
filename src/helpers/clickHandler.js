import { revealTile, gameOver, startGame } from '../helpers/redux/actions';

const clickHandler = function (dispatch, tileID, flag, mine) {
  if (!flag) {
    dispatch(startGame())
    dispatch(revealTile(tileID));

    if (mine) {
      dispatch(gameOver())
    }
  }

};

export default clickHandler;
