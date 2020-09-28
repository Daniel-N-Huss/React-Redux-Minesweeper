import {
  resetBoard,
  resetFlagCount,
  resetTime,
} from '../helpers/redux/actions';

const resetGame = function (dispatch) {
  dispatch(resetFlagCount());
  dispatch(resetBoard());
  dispatch(resetTime());
};

export default resetGame;
