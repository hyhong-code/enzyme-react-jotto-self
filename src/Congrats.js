import React from "react";
import PropTypes from "prop-types";

const Congrats = (props) => {
  return props.success ? (
    <div data-test="component-congrats">
      <span data-test="congrats-msg">Congrats! You guessed it!</span>
    </div>
  ) : (
    <div data-test="component-congrats"></div>
  );
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
