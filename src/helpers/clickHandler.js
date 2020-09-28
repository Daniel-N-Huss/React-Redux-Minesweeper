import { revealTile } from '../helpers/redux/actions';

const clickHandler = function (dispatch, tileID, flag) {
  if (!flag) {
    dispatch(revealTile(tileID));
  }
};

export default clickHandler;
