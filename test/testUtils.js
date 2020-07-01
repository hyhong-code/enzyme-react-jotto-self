import checkPropTypes from "check-prop-types";

/**
 * Return node(s) with the given data-test attribute value
 * @param {ShallowWrapper} wrapper - Enzyme ShallowWrapper
 * @param {string} val - value data-test attribute
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

/**
 * Assets whether the expectedProps conform with the component's propTypes
 * @param {object} component  - React compnent
 * @param {object} expectedProps  - React props
 */
export const checkProps = (component, expectedProps) => {
  const result = checkPropTypes(
    component.propTypes,
    expectedProps,
    "prop",
    component.name
  );
  expect(result).toBeUndefined();
};
