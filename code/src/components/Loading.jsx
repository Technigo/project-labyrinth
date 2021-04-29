import React from 'react'
import styled, { keyframes } from 'styled-components';

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const waggle = keyframes`
  0%   {transform:rotate(0deg);}
  10%  {transform:rotate(12deg);}
  40%  {transform:rotate(-25deg);}
  60%  {transform:rotate(20deg);}
  80%  {transform:rotate(-15deg);}
  100% {transform:rotate(0deg);}
`;

const Compass = styled.div`
  border: 2px solid #34623F;
  display: block; 
  width: 28px; 
  height: 28px;
  border-radius: 100%;
  margin: 10% auto 0 auto;
  transform: scale(6);
`;

const Needle = styled.div`
  width: 6px; 
  margin: 12px auto 0 auto;
  animation-name: ${waggle};
  animation-duration: 2500ms;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  :after {
    content: '';
    display: block;
    border-color: orangered transparent;
    border-style: solid;
    border-width: 0px 3px 10px 3px;
    margin-top: -15px; 
  }
  :before {
    content: '';
    display: block;
    border-color: #5e5d5d transparent;
    border-style: solid;
    border-width: 10px 3px 0px 3px;
    margin-bottom: -20px;
  }
`;

const CompassText = styled.h3`
  font-size: 22px;
  margin-top: 80px;
  color: white;
`;

export const Loading = () => {
  return (
    <Container>
      <Compass>
        <Needle></Needle>
      </Compass>
      <CompassText>Locating direction...</CompassText>
    </Container>
  )
}

