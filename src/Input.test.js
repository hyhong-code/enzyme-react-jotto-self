import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps, storeFactory } from "../test/testUtils";
import Input from "./Input";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe(`render`, () => {
  describe("if word has been guessed", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setup({ success: true });
    });

    afterEach(() => {
      wrapper.unmount();
    });

    test(`renders with not errror`, () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });

    test(`does not render input box`, () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(0);
    });

    test(`does not render input submit button`, () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(0);
    });
  });

  describe(`if the word has not been guessed`, () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setup({ success: false });
    });

    afterEach(() => {
      wrapper.unmount();
    });

    test(`renders without error`, () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });

    test(`renders input box`, () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(1);
    });

    test(`renders submit button`, () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(1);
    });
  });
});

describe(`update state`, () => {});
