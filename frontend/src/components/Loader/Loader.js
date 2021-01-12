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
  min-width: 90vw;
  margin: 0 auto;
  transform: translateX(50%);
  position: relative;
  bottom: 70px;
`;

export default LoaderSpinner;
// timeout={3000} //3 secs
