import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  & :nth-child(3) {
    animation-delay: 0.5s;
  }
  & :nth-child(4) {
    animation-delay: 1.5s;
  }
`;

const fadeAndMove = keyframes`
  0%   {
    opacity: 1;
    transform: translateX(0px);
  }
  60%  {
    opacity: 1;
    transform: translateX(20px);
  }
  75%  {
    opacity: 1;
    transform: translateX(20px);
  }
  100% {
    opacity: 0;
    transform: translateX(20px);
  }
`;

export const Spinner = styled.div`
  animation: ${fadeAndMove} 0.5s ease-in-out;
  margin: 0 10px;
  position: absolute;
  left: 100%;
  opacity: 0;
  background-color: white;
  border: 2px solid black;
  width: 10px;
  height: 10px;
`;
