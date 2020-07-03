import { actionTypes } from "../actions/index";

const secretWordReducer = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_SECRET_WORD:
      return payload;
    default:
      return state;
  }
};

export default secretWordReducer;
