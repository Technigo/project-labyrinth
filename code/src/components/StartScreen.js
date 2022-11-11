import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { NavigateButtons } from './NavigateButtons'
import { LoadingPage } from './LoadingPage'
import { StartGame } from './StartGame'
import { PlayingGame } from './PlayingGame'

export const StartScreen = () => {
  const location = useSelector((store) => store.game.location);
  const isLoading = useSelector((store) => store.ui.isLoading);

  return (
    <>
      {isLoading && <LoadingPage />}
      <OuterWrapper>
        <InnerWrapper>
          <StartGameContainer>
            {location
              ? <PlayingGame />
              : <StartGame />}
          </StartGameContainer>
        </InnerWrapper>
        <ControllerContainer>
          <NavigateButtons />
        </ControllerContainer>
      </OuterWrapper>
    </ >
  );
}

export const OuterWrapper = styled.div`
display: flex;
flex-direction: column;
align-items:center;

@media (min-width: 667px) {
  }

  @media (min-width: 1024px) {  
  }
`;

export const InnerWrapper = styled.div`
background-color: whitesmoke;
background-image: url("./img/gameimage.png");
background-size: cover;
background-repeat: no-repeat;
width: 65%;
height: 280px;
border: 10px solid black;
border-radius: 30px;
display: flex;
justify-content: center;
padding: 30px;
margin-bottom: -50px;
margin-top: 30px;
position: relative;

@media (min-width: 667px) {
  width: 300px;
  }
  @media (min-width: 1024px) {
  width: 300px;
  }
`;

export const StartGameContainer = styled.div`
  background-color: whitesmoke;
  opacity: 0.8;
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 10px;
`;

export const ControllerContainer = styled.div`
position: absolute;
width: 370px;
height: 400px;
top: 350px;
background-image: url("./img/gamecontroller.png");
background-size: contain;
`