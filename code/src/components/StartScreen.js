import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'

import GameController from 'assets/gamecontroller.png'
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
      <img className="GameController" src={GameController} alt="img-gamecontroller" width="300px" />
    </OuterWrapper>
  )
}

export const OuterWrapper = styled.div`
background-image: url("gamebackground.png");
display: flex;
flex-direction: column;
align-items:center;
`;

export const InnerWrapper = styled.div`
background-color: whitesmoke;
width: 50%;
border: 10px solid black;
border-radius: 30px;
display: flex;
justify-content: center;
padding: 30px;
margin-bottom: -40px;
margin-top: 80px;
`;