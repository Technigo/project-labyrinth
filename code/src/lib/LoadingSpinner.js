import styled from "styled-components/macro"

export const LoadingSpinner = styled.div`
  border: 25px solid #a6705d;
  border-radius: 50%;
  border-top: 25px solid #e6d8ba;
  width: 140px;
  height: 140px;
  //left: 50%;
  //top: 50%;
  animation: spin 2s linear infinite;
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
