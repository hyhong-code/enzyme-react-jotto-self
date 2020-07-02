/**
 * @function countMatchLetters
 * @param {string} guessedWord - Word guessed by user
 * @param {string} secretWord - Word generated
 * @return Number of letters in the guessed word match the secret word
 */
export const countMatchLetters = (guessedWord, secretWord) => {
  const guessedLettersSet = new Set([...guessedWord]);
  const secretLettersSet = new Set([...secretWord]);

  return [...guessedLettersSet].reduce(
    (acc, cur) => (secretLettersSet.has(cur) ? acc + 1 : acc),
    0
  );
};
