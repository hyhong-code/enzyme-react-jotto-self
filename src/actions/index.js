import { countMatchLetters } from "../helpers/index";

export const actionTypes = {
  GUESS_SUCCESS: "GUESS_SUCCESS",
  GUESS_WORD: "GUESS_WORD",
};

export const guessWord = (guessedWord) => (dispatch, getState) => {
  const { secretWord } = getState();
  const letterMatchCount = countMatchLetters(guessedWord, secretWord);
  dispatch({
    type: actionTypes.GUESS_WORD,
    payload: { guessedWord, letterMatchCount },
  });
  if (secretWord === guessedWord) {
    dispatch({
      type: actionTypes.GUESS_SUCCESS,
    });
  }
};
