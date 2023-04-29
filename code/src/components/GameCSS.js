import styled, { keyframes } from 'styled-components/macro';
import orbIMG from '../assets/The Orb in the Wall (128x64).png'

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
  text-align: center;
  animation: ${fadeInAnimation} 0.5s ease-in-out;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-flow: row wrap;
  align-content: flex-start;
  height: 100vh;
`;

export const RestartWrapper = styled.div`
  height: 0px;
  display: flex;
  justify-content: flex-end;`

export const RestartBtn = styled.button`
  background-image: url(${orbIMG});
  background-color: transparent;
  border: none;
  background-size: cover;
  width: 40px;
  height: 82px;
  rotate: 90deg;
  position: relative;

  &:hover::before {
    content: "You sense that touching this orb will return you to a place where your story is yet to be written"; /* Tooltip text */
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%) rotate(-90deg);
    background-color: rgba(255, 255, 255, 0.75);
    color: black;
    padding: 5px;
    border-radius: 5px;
    font-size: 12px;
  }
`;

export const EnImg = styled.img`
  height: 40%;
  width: 92%;
  margin-top: 5%;
  z-index: 1;
`

export const ActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  max-height: 45%;
  font-size: 10px;
  align-items: center;
  width: 90%;
`

export const SingleActionWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    animation: ${fadeInAnimation} 1.2s ease-in-out;
    background-color: rgba(255, 234, 142, 0.83);
    margin-top: 5%;
    padding: 10px;
    border-style: inset;
`

export const ActionTop = styled.div`
`

export const ActionBottom = styled.div`
`

export const CurrentRoomDescriptionText = styled.p`
  position: absolute;
    margin-top: 28%;
    line-height: 20px;
    width: 83%;
    color: white;
    max-width: 650px;
    font-size: 12px;
    z-index: 1;`

export const NextRoomDescriptionText = styled.p`
line-height: 20px;
`