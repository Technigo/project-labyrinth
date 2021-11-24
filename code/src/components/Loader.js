import React from "react";
import styled, { keyframes } from "styled-components";

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(246, 246, 246, 0.5);
`;

const spin = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`;

const LoadingSpinner = styled.div`
  background: linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0) 49%,
    rgb(255, 21, 0) 51%
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
