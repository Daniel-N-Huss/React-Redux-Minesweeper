const timerReducer = function (state = 0, action) {
  switch (action.type) {
    case 'INCREMENT_TIME': {
      return state + 1;
    }

    case 'RESET_TIME': {
      return state = 0;
    }

    default:
      return state;
  }
};

export default timerReducer;