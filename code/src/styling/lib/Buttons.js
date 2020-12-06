import styled from "styled-components";

export const DirectionButton = styled.button`
  border: 2px solid #06a10b;
  padding: 15px;
  width: 100%;
  background: #93e6b0;
  margin: 5px;
  animation: mymove 5s forwards;

  @keyframes mymove {
    from {
      background-color: #93e6b0;
    }
    to {
      background-color: #aea1ff;
    }
  }
`;

export const StartButton = styled.button`
  font-family: "Major Mono Display", monospace;
  font-size: 18px;
  color: #8a2be2;
  border: 2px solid #06a10b;
  padding: 10px;
  width: 100%;
  background: #aea1ff;
  animation: mymove 5s forwards;

  @keyframes mymove {
    from {
      background-color: #93e6b0;
    }
    to {
      background-color: #aea1ff;
    }
  }
`;
