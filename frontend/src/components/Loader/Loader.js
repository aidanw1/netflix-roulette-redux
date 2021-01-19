import React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";

function LoaderSpinner() {
  return (
    <LoaderContainer>
      <Loader type="Oval" color="#f65261" height={75} width={75} />
    </LoaderContainer>
  );
}

const LoaderContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  margin-bottom: 20px;
`;

export default LoaderSpinner;
// timeout={3000} //3 secs
