import React from "react";
import Loader from "react-loader-spinner";

function LoaderSpinner() {
  return (
    <Loader
      type="Oval"
      color="#f65261"
      height={75}
      width={75}
      className="loader-container"
    />
  );
}

export default LoaderSpinner;
// timeout={3000} //3 secs
