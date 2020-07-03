import { guessWord } from "./actions/index";
import { storeFactory } from "../test/testUtils";

describe(`guessWord action creator`, () => {
  const secretWord = "party";
  const guessedWord = "train";

  describe(`no words guessed`, () => {
    const initialState = { secretWord };

    let store;

    beforeEach(() => {
      store = storeFactory(initialState);
    });

    test(`guess made was succesfull`, () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [{ guessedWord: secretWord, letterMatchCount: 5 }],
      };
      expect(newState).toEqual(expectedState);
    });

    test(`guess made was not succesfull`, () => {
      store.dispatch(guessWord(guessedWord));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [{ guessedWord, letterMatchCount: 3 }],
      };
      expect(expectedState).toEqual(newState);
    });
  });

  describe(`some words guessed`, () => {
    const guessedWords = [{ guessedWord: "agile", letterMatchCount: 2 }];
    const initialState = {
      secretWord,
      guessedWords,
    };

    let store;

    beforeEach(() => {
      store = storeFactory(initialState);
    });

    test(`guess made was succesfull`, () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [
          ...guessedWords,
          { guessedWord: secretWord, letterMatchCount: 5 },
        ],
      };
      expect(newState).toEqual(expectedState);
    });

    test(`guess made was not succesfull`, () => {
      store.dispatch(guessWord(guessedWord));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [...guessedWords, { guessedWord, letterMatchCount: 3 }],
      };
      expect(newState).toEqual(expectedState);
    });
  });
});
