//import React from 'react'
import styled from "styled-components/macro"

export const LoadingSpinner = styled.div`
  border: 25px solid #ffadad;
  border-radius: 50%;
  border-top: 25px solid #b86e88;
  width: 140px;
  height: 140px;
  position: relative;
  left: calc(50% - 70px);
  top: calc(50% - 70px);
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
