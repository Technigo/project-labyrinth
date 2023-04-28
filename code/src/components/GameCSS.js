import styled, { keyframes } from 'styled-components/macro';
import ScrollIMG from '../assets/scroll.png'

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 90%;
  max-width: 650px;
  padding-top: 140px;
  text-align: center;
  animation: ${fadeInAnimation} 0.5s ease-in-out;
`;

export const EnvironmentIMG = styled.img`
`

export const ActionWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    animation: ${fadeInAnimation} 1.2s ease-in-out;
    background-image: url(${ScrollIMG});
`