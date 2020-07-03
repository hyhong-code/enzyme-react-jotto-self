import { countMatchLetters } from "../helpers/index";
import axios from "axios";

export const actionTypes = {
  GUESS_SUCCESS: "GUESS_SUCCESS",
  GUESS_WORD: "GUESS_WORD",
  SET_SECRET_WORD: "SET_SECRET_WORD",
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

export const getSecretWord = () => async (dispatch) => {
  const res = await axios.get("/");
  dispatch({
    type: actionTypes.SET_SECRET_WORD,
    payload: res.data,
  });
};
