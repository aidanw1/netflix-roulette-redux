import React from "react";
import Loader from "react-loader-spinner";
import { LoaderContainer } from "./LoaderStyles";

function LoaderSpinner() {
  return (
    <LoaderContainer>
      <Loader
        type="Oval"
        color="#f65261"
        height={75}
        width={75}
      />
    </LoaderContainer>
  );
}

export default LoaderSpinner;
