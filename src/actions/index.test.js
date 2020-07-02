import { guessSuccess } from "./index";

import { actionTypes } from "./index";

describe("guess was correct", () => {
  test('returns an action with type of "GUESS_SUCCESS"', () => {
    const action = guessSuccess();
    // CANNOT user .toBe() (===) on objects
    // Use .toEqual() (deep equal) compares contents
    expect(action).toEqual({ type: actionTypes.GUESS_SUCCESS });
  });
});
