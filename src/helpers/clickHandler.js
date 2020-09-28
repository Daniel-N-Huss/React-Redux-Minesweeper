import { revealTile, gameOver, startGame } from '../helpers/redux/actions';

const clickHandler = function (dispatch, props, gameState) {
  const { id, flag, mine } = props;

  if (gameState === 'initial' || gameState === 'active') {
    if (!flag) {
      dispatch(startGame());
      dispatch(revealTile(id));

      if (mine) {
        dispatch(gameOver());
      }
    }
  }
};

export default clickHandler;
