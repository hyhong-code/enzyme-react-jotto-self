import { countMatchLetters } from "./index";

describe("count match letters", () => {
  let secretWord = "party";

  test("if there is no matching letters", () => {
    const result = countMatchLetters("code", secretWord);
    expect(result).toBe(0);
  });

  test("if there are three matching letters", () => {
    const result = countMatchLetters("parse", secretWord);
    expect(result).toBe(3);
  });

  test("if there are duplicate matching letters", () => {
    const result = countMatchLetters("arrow", secretWord);
    expect(result).toBe(2);
  });
});
