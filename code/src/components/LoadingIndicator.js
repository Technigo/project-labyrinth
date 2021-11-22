import React from "react";
import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
0% {
    box-shadow: 
      0px -30px #000, 
      10px -30px #000, 
      20px -20px #000, 
      30px -10px #000, 
      30px 0px #000, 
      30px 10px #000, 
      20px 20px #000, 
      10px 30px #000, 
      0px 30px transparent, 
      -10px 30px transparent, 
      -20px 20px transparent, 
      -30px 10px transparent, 
      -30px 0px transparent, 
      -30px -10px transparent, 
      -20px -20px transparent,
      -10px -30px transparent;
  }
  6.25% {
    box-shadow: 
      0px -30px transparent, 
      10px -30px #000, 
      20px -20px #000, 
      30px -10px #000, 
      30px 0px #000, 
      30px 10px #000, 
      20px 20px #000, 
      10px 30px #000, 
      0px 30px #000, 
      -10px 30px transparent, 
      -20px 20px transparent, 
      -30px 10px transparent, 
      -30px 0px transparent, 
      -30px -10px transparent, 
      -20px -20px transparent,
      -10px -30px transparent;
  }
  12.5% {
    box-shadow: 
      0px -30px transparent, 
      10px -30px transparent, 
      20px -20px #000, 
      30px -10px #000, 
      30px 0px #000, 
      30px 10px #000, 
      20px 20px #000, 
      10px 30px #000, 
      0px 30px #000, 
      -10px 30px #000, 
      -20px 20px transparent, 
      -30px 10px transparent, 
      -30px 0px transparent, 
      -30px -10px transparent, 
      -20px -20px transparent,
      -10px -30px transparent;
  }
  18.75% {
    box-shadow: 
      0px -30px transparent, 
      10px -30px transparent, 
      20px -20px transparent, 
      30px -10px #000, 
      30px 0px #000, 
      30px 10px #000, 
      20px 20px #000, 
      10px 30px #000, 
      0px 30px #000, 
      -10px 30px #000, 
      -20px 20px #000, 
      -30px 10px transparent, 
      -30px 0px transparent, 
      -30px -10px transparent, 
      -20px -20px transparent,
      -10px -30px transparent;
  }
  25% {
    box-shadow: 
      0px -30px transparent, 
      10px -30px transparent, 
      20px -20px transparent, 
      30px -10px transparent, 
      30px 0px #000, 
      30px 10px #000, 
      20px 20px #000, 
      10px 30px #000, 
      0px 30px #000, 
      -10px 30px #000, 
      -20px 20px #000, 
      -30px 10px #000, 
      -30px 0px transparent, 
      -30px -10px transparent, 
      -20px -20px transparent,
      -10px -30px transparent;
  }
  31.25% {
    box-shadow: 
      0px -30px transparent, 
      10px -30px transparent, 
      20px -20px transparent, 
      30px -10px transparent, 
      30px 0px transparent, 
      30px 10px #000, 
      20px 20px #000, 
      10px 30px #000, 
      0px 30px #000, 
      -10px 30px #000, 
      -20px 20px #000, 
      -30px 10px #000, 
      -30px 0px #000, 
      -30px -10px transparent, 
      -20px -20px transparent,
      -10px -30px transparent;
  }
  37.5% {
    box-shadow: 
      0px -30px transparent, 
      10px -30px transparent, 
      20px -20px transparent, 
      30px -10px transparent, 
      30px 0px transparent, 
      30px 10px transparent, 
      20px 20px #000, 
      10px 30px #000, 
      0px 30px #000, 
      -10px 30px #000, 
      -20px 20px #000, 
      -30px 10px #000, 
      -30px 0px #000, 
      -30px -10px #000, 
      -20px -20px transparent,
      -10px -30px transparent;
  }
  43.75% {
    box-shadow: 
      0px -30px transparent, 
      10px -30px transparent, 
      20px -20px transparent, 
      30px -10px transparent, 
      30px 0px transparent, 
      30px 10px transparent, 
      20px 20px transparent, 
      10px 30px #000, 
      0px 30px #000, 
      -10px 30px #000, 
      -20px 20px #000, 
      -30px 10px #000, 
      -30px 0px #000, 
      -30px -10px #000, 
      -20px -20px #000,
      -10px -30px transparent;
  }
  50% {
    box-shadow: 
      0px -30px transparent, 
      10px -30px transparent, 
      20px -20px transparent, 
      30px -10px transparent, 
      30px 0px transparent, 
      30px 10px transparent, 
      20px 20px transparent, 
      10px 30px transparent, 
      0px 30px #000, 
      -10px 30px #000, 
      -20px 20px #000, 
      -30px 10px #000, 
      -30px 0px #000, 
      -30px -10px #000, 
      -20px -20px #000,
      -10px -30px #000;
  }
  56.25% {
    box-shadow: 
      0px -30px #000, 
      10px -30px transparent, 
      20px -20px transparent, 
      30px -10px transparent, 
      30px 0px transparent, 
      30px 10px transparent, 
      20px 20px transparent, 
      10px 30px transparent, 
      0px 30px transparent, 
      -10px 30px #000, 
      -20px 20px #000, 
      -30px 10px #000, 
      -30px 0px #000, 
      -30px -10px #000, 
      -20px -20px #000,
      -10px -30px #000;
  }
  62.5% {
    box-shadow: 
      0px -30px #000, 
      10px -30px #000, 
      20px -20px transparent, 
      30px -10px transparent, 
      30px 0px transparent, 
      30px 10px transparent, 
      20px 20px transparent, 
      10px 30px transparent, 
      0px 30px transparent, 
      -10px 30px transparent, 
      -20px 20px #000, 
      -30px 10px #000, 
      -30px 0px #000, 
      -30px -10px #000, 
      -20px -20px #000,
      -10px -30px #000;
  }
  68.75% {
    box-shadow: 
      0px -30px #000, 
      10px -30px #000, 
      20px -20px #000, 
      30px -10px transparent, 
      30px 0px transparent, 
      30px 10px transparent, 
      20px 20px transparent, 
      10px 30px transparent, 
      0px 30px transparent, 
      -10px 30px transparent, 
      -20px 20px transparent, 
      -30px 10px #000, 
      -30px 0px #000, 
      -30px -10px #000, 
      -20px -20px #000,
      -10px -30px #000;
  }
  75% {
    box-shadow: 
      0px -30px #000, 
      10px -30px #000, 
      20px -20px #000, 
      30px -10px #000, 
      30px 0px transparent, 
      30px 10px transparent, 
      20px 20px transparent, 
      10px 30px transparent, 
      0px 30px transparent, 
      -10px 30px transparent, 
      -20px 20px transparent, 
      -30px 10px transparent, 
      -30px 0px #000, 
      -30px -10px #000, 
      -20px -20px #000,
      -10px -30px #000;
  }
  81.25% {
    box-shadow: 
      0px -30px #000, 
      10px -30px #000, 
      20px -20px #000, 
      30px -10px #000, 
      30px 0px #000, 
      30px 10px transparent, 
      20px 20px transparent, 
      10px 30px transparent, 
      0px 30px transparent, 
      -10px 30px transparent, 
      -20px 20px transparent, 
      -30px 10px transparent, 
      -30px 0px transparent, 
      -30px -10px #000, 
      -20px -20px #000,
      -10px -30px #000;
  }
  87.5% {
    box-shadow: 
      0px -30px #000, 
      10px -30px #000, 
      20px -20px #000, 
      30px -10px #000, 
      30px 0px #000, 
      30px 10px #000, 
      20px 20px transparent, 
      10px 30px transparent, 
      0px 30px transparent, 
      -10px 30px transparent, 
      -20px 20px transparent, 
      -30px 10px transparent, 
      -30px 0px transparent, 
      -30px -10px transparent, 
      -20px -20px #000,
      -10px -30px #000;
  }
  93.75% {
    box-shadow: 
      0px -30px #000, 
      10px -30px #000, 
      20px -20px #000, 
      30px -10px #000, 
      30px 0px #000, 
      30px 10px #000, 
      20px 20px #000, 
      10px 30px transparent, 
      0px 30px transparent, 
      -10px 30px transparent, 
      -20px 20px transparent, 
      -30px 10px transparent, 
      -30px 0px transparent, 
      -30px -10px transparent, 
      -20px -20px transparent,
      -10px -30px #000;
  }
  100% {
    box-shadow: 
      0px -30px #000, 
      10px -30px #000, 
      20px -20px #000, 
      30px -10px #000, 
      30px 0px #000, 
      30px 10px #000, 
      20px 20px #000, 
      10px 30px #000, 
      0px 30px transparent, 
      -10px 30px transparent, 
      -20px 20px transparent, 
      -30px 10px transparent, 
      -30px 0px transparent, 
      -30px -10px transparent, 
      -20px -20px transparent,
      -10px -30px transparent;
  }
}
`;

const LoadingSpinner = styled.span`
  animation: ${spinAnimation} 1s linear infinite;
  height: 10px;
  width: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -5px;
`;

export const LoadingIndicator = () => {
  const isLoading = useSelector((state) => state.ui.isLoading);

  return <>{isLoading && <LoadingSpinner></LoadingSpinner>}</>;
};
