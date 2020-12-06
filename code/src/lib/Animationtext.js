import React from "react";
import styled, { keyframes } from "styled-components/macro";

export const AnimationText = () => {
  return (
    <div>
      <Animation>T</Animation>
      <Animation>H</Animation>
      <Animation>E</Animation>
      <Animation>&nbsp;</Animation>
      <Animation>L</Animation>
      <Animation>A</Animation>
      <Animation>B</Animation>
      <Animation>Y</Animation>
      <Animation>R</Animation>
      <Animation>I</Animation>
      <Animation>N</Animation>
      <Animation>T</Animation>
      <Animation>H</Animation>
      <Animation>&nbsp;</Animation>
      <Animation>G</Animation>
      <Animation>A</Animation>
      <Animation>M</Animation>
      <Animation>E</Animation>
    </div>
  );
};

const smoky = keyframes`
  60% {
    text-shadow: 0 0 40px whitesmoke;
  }
  to {
    transform:
      translate3d(15rem,-8rem,0)
      rotate(-40deg)
      skewX(70deg)
      scale(1.5);
    text-shadow: 0 0 20px whitesmoke;
    opacity: 0;
}
`;

const smokymirror = keyframes`
  60% {
    text-shadow: 0 0 40px whitesmoke; }
  to {
    transform:
      translate3d(18rem,-8rem,0)
      rotate(-40deg) 
      skewX(-70deg)
      scale(2);
     text-shadow: 0 0 20px whitesmoke;
    opacity: 0;
  }
`;

const Animation = styled.span`
  font-family: "Finger Paint", cursive;
  margin: 25px 0;
  font-size: 28px;
  display: inline-block;
  text-shadow: 0 0 0 whitesmoke;
  animation: ${smoky} 7s 7s infinite;
  &:nth-child(even) {
    animation-name: ${smokymirror};
  }
  @media (min-width: 768px) {
    font-size: 50px;
  }
`;
