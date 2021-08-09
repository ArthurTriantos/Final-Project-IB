import React from "react";

const BasicInfo = (props: { basicInfo: string }) => {
  return (
    <div className="col-3">
      <label htmlFor="validationDefault03">{props.basicInfo}</label>
      <input
        type="text"
        className="form-control"
        id="validationDefault03"
        required
      />
    </div>
  );
};

export default BasicInfo;
