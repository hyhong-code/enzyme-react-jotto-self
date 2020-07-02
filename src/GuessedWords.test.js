import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../test/testUtils";
import GuessedWords from "./GuessedWords";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test("does not throw errors with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("If there is no guessed words", () => {
  let wrapper;

  // Setup
  beforeEach(() => {
    // ShallowWrapper must be rendered inside the test block, cannot be set global
    wrapper = setup({ guessedWords: [] });
  });

  // Teardown
  afterEach(() => {
    wrapper.unmount();
  });

  test("render with no error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  test("renders instructions", () => {
    const instructions = findByTestAttr(wrapper, "instructions");
    expect(instructions.text().length).not.toBe(0);
  });
});

describe("If there are guessed words", () => {
  let wrapper;
  const guessedWords = [
    { guessedWord: "hello", letterMatchCount: 3 },
    { guessedWord: "goodbye", letterMatchCount: 2 },
    { guessedWord: "letsgo", letterMatchCount: 4 },
  ];

  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test("render with no error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  test("render guessed words", () => {
    const guessedWordsNode = findByTestAttr(wrapper, "guessed-words");
    expect(guessedWordsNode.length).toBe(1);
  });

  test("render correct number of guessed words", () => {
    const guessedWordNode = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordNode.length).toBe(guessedWords.length);
  });
});
