import successReducer from "./successReducer";
import { actionTypes } from "../actions/index";

test("returns default state when no action is passed", () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});

test("returns state of true when GUESS_CORRECT type is passed", () => {
  const newState = successReducer(undefined, {
    type: actionTypes.GUESS_SUCCESS,
  });
  expect(newState).toBe(true);
});
