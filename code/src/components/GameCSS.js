import styled, { keyframes } from 'styled-components/macro';

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
  animation: ${fadeInAnimation} 1.0s ease-in-out;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-flow: row wrap;
  align-content: center;
  height: 95%;

  @media (min-width: 850px) {
    max-width: 90%;
    height: 100vh;
  }
`;

export const EnImg = styled.img`
  height: 60%;
  width: 100%;
  background-position: center;

  @media (min-width: 850px) {
    width: 80%;
    height: 90%;
    max-width: 450px;
  }
  
  @media (min-width: 1050px) {

  }
`

export const ActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  max-height: 46%;
  font-size: 10px;
  align-items: center;
  width: 90%;
  overflow-x: hidden;

  ::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.8);
}

::-webkit-scrollbar-thumb {
  background: rgba(136, 136, 136, 0.8);
}

  @media (min-width: 600px) {
    max-height: 40%;
    overflow-y: auto; 
  }

  @media (min-width: 850px) {
    flex-direction: row;
    max-width: 65%;
  }
`

export const SingleActionWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    animation: ${fadeInAnimation} 2.0s ease-in-out;
    background-color: rgba(255, 234, 142, 0.83);
    padding: 10px;
    border-style: inset;
    width: 100%;

    @media (min-width: 1000px) {
      height: 100%;
      align-content: center;
    }
`

export const ActionTop = styled.div`
    height: 54%;
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    @media (min-width: 850px) {
      flex-direction: row-reverse;
    }
`

export const ActionBottom = styled.div`
`

export const CurrentRoomDescriptionText = styled.p`
    position: relative;
    bottom: 37%;
    line-height: 20px;
    width: 83%;
    color: white;
    max-width: 250px;
    font-size: 10px;
    z-index: 1;
    overflow: auto;
    backdrop-filter: brightness(0.8);
  
  @media (min-width: 850px) {
    position: inherit;
    max-width: 26%;
    height: 90%;
    color: black;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    background-color: rgba(255, 234, 142, 0.83);
  }
  
  @media (min-width: 1050px) {
    text-align: center;
    font-size: 16px;
  }
  `

export const NextRoomDescriptionText = styled.p`
line-height: 20px;

  @media (min-width: 850px) {
    font-size: 16px;
  }
`