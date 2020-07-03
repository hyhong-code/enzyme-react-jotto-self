import { actionTypes } from "../actions/index";

const guessedWordsReuder = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.GUESS_WORD:
      return [...state, payload];
    default:
      return state;
  }
};

export default guessedWordsReuder;
