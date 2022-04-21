import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const GameOver = () => {
  const restart = () => {
    window.location.reload();
  };
  return (
    <>
      <Button onClick={restart}>Move further into light...</Button>
    </>
  );
};

export default GameOver;

const Appear = keyframes`
from {opacity: 0}
to {opacity: 1}
`;

const Button = styled.button`
  padding: 5px 10px;
  font-weight: 600;
  border: 2px solid #04fc0e;
  background-color: black;
  color: #04fc0e;
  font-size: 16px;
  cursor: pointer;
  margin-top: 25px;
  animation: ${Appear} 5s ease-in;

  @media (hover: hover) {
    &:hover {
      box-shadow: 7px 7px 25px rgba(4, 252, 14, 0.3),
        -7px -7px 25px rgba(4, 252, 14, 0.3),
        7px -7px 25px rgba(4, 252, 14, 0.3), -7px 7px 25px rgba(4, 252, 14, 0.3);
    }
  }
`;
