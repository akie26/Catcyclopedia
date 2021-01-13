import React from "react";
import Spinner from "../assets/images/spinner.gif";

const FullScreenSpinner = () => {
  return (
    <div className="spinner--container">
      <img src={Spinner} className="loader--image" alt="LOADING" />
    </div>
  );
};

export default FullScreenSpinner;
