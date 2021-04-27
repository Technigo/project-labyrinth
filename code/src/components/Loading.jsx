import React from 'react'
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
 from {
     transform: rotate(0deg);
 }
 to {
     transform: rotate(360deg);
 }`;

 const Loading = styled.div`
   width: 80px;
   height: 80px;
   border-radius: 50%;
   border-left: 5px solid grey;
   border-right: 5px solid grey;
   border-bottom: 5px solid grey;
   border-top: 5px solid white;
   animation: ${spin} 1s linear infinite;
   `
export const Loading = () => {
  return (
    <div>
      <Loading></Loading>
    </div>
  )
}
