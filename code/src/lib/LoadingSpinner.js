import styled from "styled-components/macro"

export const LoadingSpinner = styled.div`
  border: 1.56em solid #a6705d;
  border-radius: 50%;
  border-top: 1.56em solid #e6d8ba;
  width: 8.750em;
  height: 8.750em;
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
