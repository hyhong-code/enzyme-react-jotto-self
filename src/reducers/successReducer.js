import { actionTypes } from "../actions/index";

const sucessReducer = (state = false, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.GUESS_SUCCESS:
      return true;
    default:
      return state;
  }
};

export default sucessReducer;
