import React from "react";
import styled from "styled-components";

const SpinnerContainer = styled.div`
  @keyframes rotation {
    0% {
      -webkit-transform: rotate(0deg);
    }
    25% {
      -webkit-transform: rotate(10deg);
    }
    50% {
      -webkit-transform: rotate(0deg);
    }
    75% {
      -webkit-transform: rotate(-10deg);
    }
    100% {
      -webkit-transform: rotate(0deg);
    }
  }
`;

const LoadingSpinner = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  animation: rotation 1s linear infinite;
`;

export const Loading = () => {
  return (
    <SpinnerContainer>
      <LoadingSpinner src="../../images/compass.png" />
    </SpinnerContainer>
  );
};
