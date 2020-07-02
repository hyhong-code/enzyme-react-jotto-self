import React from "react";
import { connect } from "react-redux";

const Input = ({ success }) => {
  return (
    <div data-test="component-input">
      {!success && (
        <form action="" className="form-inline">
          <input
            type="text"
            data-test="input-box"
            placeholder="Guess a word"
            className=" form-control"
          />
          <button
            data-test="submit-button"
            className="btn btn-primary"
          ></button>
        </form>
      )}
    </div>
  );
};

const mapStateToProps = ({ success }) => ({ success });

export default connect(mapStateToProps)(Input);
