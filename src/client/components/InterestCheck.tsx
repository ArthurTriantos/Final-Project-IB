import React from "react";

const InterestCheck = (props: {interest: string}) => {
  return (
    <div className="form-check col-2">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckChecked"
      />
      <label className="form-check-label" htmlFor="flexCheckChecked">
        {props.interest}
      </label>
    </div>
  );
};

export default InterestCheck;