import {
  incrementFlagCount,
  decrementFlagCount,
  toggleFlag,
} from '../helpers/redux/actions';

const rightClickHandler = function (dispatch, id, flag) {
  dispatch(toggleFlag(id));

  flag ? dispatch(incrementFlagCount()) : dispatch(decrementFlagCount());
};

export default rightClickHandler;
