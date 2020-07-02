import React from "react";
import PropTypes from "prop-types";

const GuessedWords = (props) => {
  const content = props.guessedWords.length ? (
    <div data-test="guessed-words">
      <h1>Guessed Words:</h1>
      <table>
        <thead>
          <tr>
            <th>Word</th>
            <th>Match letters Count</th>
          </tr>
        </thead>
        <tbody>
          {props.guessedWords.map((word, idx) => (
            <tr data-test="guessed-word" key={idx}>
              <th>{word.guessedWord}</th>
              <th>{word.letterMatchCount}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <span data-test="instructions">Guess a secret word</span>
  );

  return <div data-test="component-guessed-words">{content}</div>;
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;
