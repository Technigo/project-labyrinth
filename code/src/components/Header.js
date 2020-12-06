import React from "react";
import styled, { keyframes } from "styled-components";

import evileye from "styling/lib/evileye.svg";

export const Header = () => {
  return (
    <HeaderBlock>
      <HeaderText>
        This is the start of your inner journey. Push the eye when you feel
        ready to join.
      </HeaderText>
      <Rotate>
        {" "}
        <a href="#start">
          <HeaderLogo src={evileye} alt="evileye-logo" />
        </a>
      </Rotate>
    </HeaderBlock>
  );
};

const HeaderBlock = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  animation: header 10s forwards;

  @keyframes header {
    from {
      background-color: #aea1ff;
    }
    to {
      background-color: #8a2be2;
    }
  }
`;

const HeaderLogo = styled.img`
  width: 220px;
  cursor: pointer;
`;

const rotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

const Rotate = styled.div`
  animation: ${rotate} 8s linear infinite;
`;

const HeaderText = styled.p`
  font-family: "Major Mono Display", monospace;
  color: #06a10b;
  font-size: 36px;
  font-weight: bold;

  @media (min-width: 768px) {
    width: 60%;
  }
`;
