import React from "react";
import styled from "styled-components";

const WinnerBox = styled.div`
  z-index: 5;

  h2 {
    font-size: 40px;
  }
`;

const Winner = () => {
  return (
    <WinnerBox>
      <h2>You solved the labyrinth!</h2>
    </WinnerBox>
  );
};

export default Winner;
