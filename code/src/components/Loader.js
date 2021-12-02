import React from "react";
import styled, { keyframes } from "styled-components";

const LoaderContainer = styled.div`
  position: absolute;
  z-index: 1;
`;

const spin = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    -45deg,
    rgb(255, 255, 255, 0) 49%,
    rgb(114, 84, 38) 51%
  );
  border-radius: 50%;
  width: 350px;
  height: 350px;
  animation: ${spin} 2s linear infinite;
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <LoadingSpinner />
    </LoaderContainer>
  );
};

export default Loader;
