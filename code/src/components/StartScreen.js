import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { NavigateButtons } from './NavigateButtons'

import { StartGame } from './StartGame'
import { PlayingGame } from './PlayingGame'

export const StartScreen = () => {
  const location = useSelector((store) => store.game.location);

  return (
    <OuterWrapper>
      <InnerWrapper>
        <div>
          {location
            ? <PlayingGame />
            : <StartGame />}
        </div>
      </InnerWrapper>
      <ControllerContainer>
        <NavigateButtons />
      </ControllerContainer>
    </OuterWrapper>
  )
}

export const OuterWrapper = styled.div`
display: flex;
flex-direction: column;
align-items:center;
`;

export const InnerWrapper = styled.div`
background-color: whitesmoke;
background-image: url("./img/gameimage.png");
background-size: cover;
background-repeat: no-repeat;
width: 50%;
border: 10px solid black;
border-radius: 30px;
display: flex;
justify-content: center;
padding: 30px;
margin-bottom: -40px;
margin-top: 80px;
`;

export const ControllerContainer = styled.div`
position: relative;
width: 370px;
Height: 400px;
background-image: url("./img/gamecontroller.png");
background-size: contain;
`