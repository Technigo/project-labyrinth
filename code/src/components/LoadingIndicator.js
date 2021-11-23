import React from "react";
import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
0% {
    box-shadow: 
      0px -30px #ffffff56, 
      10px -30px #ffffff56, 
      20px -20px #ffffff56, 
      30px -10px #ffffff56, 
      30px 0px #ffffff56, 
      30px 10px #ffffff56, 
      20px 20px #ffffff56, 
      10px 30px #ffffff56, 
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
      10px -30px #ffffff56, 
      20px -20px #ffffff56, 
      30px -10px #ffffff56, 
      30px 0px #ffffff56, 
      30px 10px #ffffff56, 
      20px 20px #ffffff56, 
      10px 30px #ffffff56, 
      0px 30px #ffffff56, 
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
      20px -20px #ffffff56, 
      30px -10px #ffffff56, 
      30px 0px #ffffff56, 
      30px 10px #ffffff56, 
      20px 20px #ffffff56, 
      10px 30px #ffffff56, 
      0px 30px #ffffff56, 
      -10px 30px #ffffff56, 
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
      30px -10px #ffffff56, 
      30px 0px #ffffff56, 
      30px 10px #ffffff56, 
      20px 20px #ffffff56, 
      10px 30px #ffffff56, 
      0px 30px #ffffff56, 
      -10px 30px #ffffff56, 
      -20px 20px #ffffff56, 
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
      30px 0px #ffffff56, 
      30px 10px #ffffff56, 
      20px 20px #ffffff56, 
      10px 30px #ffffff56, 
      0px 30px #ffffff56, 
      -10px 30px #ffffff56, 
      -20px 20px #ffffff56, 
      -30px 10px #ffffff56, 
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
      30px 10px #ffffff56, 
      20px 20px #ffffff56, 
      10px 30px #ffffff56, 
      0px 30px #ffffff56, 
      -10px 30px #ffffff56, 
      -20px 20px #ffffff56, 
      -30px 10px #ffffff56, 
      -30px 0px #ffffff56, 
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
      20px 20px #ffffff56, 
      10px 30px #ffffff56, 
      0px 30px #ffffff56, 
      -10px 30px #ffffff56, 
      -20px 20px #ffffff56, 
      -30px 10px #ffffff56, 
      -30px 0px #ffffff56, 
      -30px -10px #ffffff56, 
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
      10px 30px #ffffff56, 
      0px 30px #ffffff56, 
      -10px 30px #ffffff56, 
      -20px 20px #ffffff56, 
      -30px 10px #ffffff56, 
      -30px 0px #ffffff56, 
      -30px -10px #ffffff56, 
      -20px -20px #ffffff56,
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
      0px 30px #ffffff56, 
      -10px 30px #ffffff56, 
      -20px 20px #ffffff56, 
      -30px 10px #ffffff56, 
      -30px 0px #ffffff56, 
      -30px -10px #ffffff56, 
      -20px -20px #ffffff56,
      -10px -30px #ffffff56;
  }
  56.25% {
    box-shadow: 
      0px -30px #ffffff56, 
      10px -30px transparent, 
      20px -20px transparent, 
      30px -10px transparent, 
      30px 0px transparent, 
      30px 10px transparent, 
      20px 20px transparent, 
      10px 30px transparent, 
      0px 30px transparent, 
      -10px 30px #ffffff56, 
      -20px 20px #ffffff56, 
      -30px 10px #ffffff56, 
      -30px 0px #ffffff56, 
      -30px -10px #ffffff56, 
      -20px -20px #ffffff56,
      -10px -30px #ffffff56;
  }
  62.5% {
    box-shadow: 
      0px -30px #ffffff56, 
      10px -30px #ffffff56, 
      20px -20px transparent, 
      30px -10px transparent, 
      30px 0px transparent, 
      30px 10px transparent, 
      20px 20px transparent, 
      10px 30px transparent, 
      0px 30px transparent, 
      -10px 30px transparent, 
      -20px 20px #ffffff56, 
      -30px 10px #ffffff56, 
      -30px 0px #ffffff56, 
      -30px -10px #ffffff56, 
      -20px -20px #ffffff56,
      -10px -30px #ffffff56;
  }
  68.75% {
    box-shadow: 
      0px -30px #ffffff56, 
      10px -30px #ffffff56, 
      20px -20px #ffffff56, 
      30px -10px transparent, 
      30px 0px transparent, 
      30px 10px transparent, 
      20px 20px transparent, 
      10px 30px transparent, 
      0px 30px transparent, 
      -10px 30px transparent, 
      -20px 20px transparent, 
      -30px 10px #ffffff56, 
      -30px 0px #ffffff56, 
      -30px -10px #ffffff56, 
      -20px -20px #ffffff56,
      -10px -30px #ffffff56;
  }
  75% {
    box-shadow: 
      0px -30px #ffffff56, 
      10px -30px #ffffff56, 
      20px -20px #ffffff56, 
      30px -10px #ffffff56, 
      30px 0px transparent, 
      30px 10px transparent, 
      20px 20px transparent, 
      10px 30px transparent, 
      0px 30px transparent, 
      -10px 30px transparent, 
      -20px 20px transparent, 
      -30px 10px transparent, 
      -30px 0px #ffffff56, 
      -30px -10px #ffffff56, 
      -20px -20px #ffffff56,
      -10px -30px #ffffff56;
  }
  81.25% {
    box-shadow: 
      0px -30px #ffffff56, 
      10px -30px #ffffff56, 
      20px -20px #ffffff56, 
      30px -10px #ffffff56, 
      30px 0px #ffffff56, 
      30px 10px transparent, 
      20px 20px transparent, 
      10px 30px transparent, 
      0px 30px transparent, 
      -10px 30px transparent, 
      -20px 20px transparent, 
      -30px 10px transparent, 
      -30px 0px transparent, 
      -30px -10px #ffffff56, 
      -20px -20px #ffffff56,
      -10px -30px #ffffff56;
  }
  87.5% {
    box-shadow: 
      0px -30px #ffffff56, 
      10px -30px #ffffff56, 
      20px -20px #ffffff56, 
      30px -10px #ffffff56, 
      30px 0px #ffffff56, 
      30px 10px #ffffff56, 
      20px 20px transparent, 
      10px 30px transparent, 
      0px 30px transparent, 
      -10px 30px transparent, 
      -20px 20px transparent, 
      -30px 10px transparent, 
      -30px 0px transparent, 
      -30px -10px transparent, 
      -20px -20px #ffffff56,
      -10px -30px #ffffff56;
  }
  93.75% {
    box-shadow: 
      0px -30px #ffffff56, 
      10px -30px #ffffff56, 
      20px -20px #ffffff56, 
      30px -10px #ffffff56, 
      30px 0px #ffffff56, 
      30px 10px #ffffff56, 
      20px 20px #ffffff56, 
      10px 30px transparent, 
      0px 30px transparent, 
      -10px 30px transparent, 
      -20px 20px transparent, 
      -30px 10px transparent, 
      -30px 0px transparent, 
      -30px -10px transparent, 
      -20px -20px transparent,
      -10px -30px #ffffff56;
  }
  100% {
    box-shadow: 
      0px -30px #ffffff56, 
      10px -30px #ffffff56, 
      20px -20px #ffffff56, 
      30px -10px #ffffff56, 
      30px 0px #ffffff56, 
      30px 10px #ffffff56, 
      20px 20px #ffffff56, 
      10px 30px #ffffff56, 
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
  top: 90%;
  left: 50%;
  margin: -5px;
`;

const LoadingIndicator = () => {
  const isLoading = useSelector((store) => store.ui.isLoading);
  return <>{isLoading && <LoadingSpinner></LoadingSpinner>}</>;
};

export default LoadingIndicator;
