/* eslint-disable linebreak-style */
import React from 'react'
import { useSelector } from 'react-redux'
import { MainContainer, GameWrapper } from 'Globalstyles';
import { WelcomePage } from './WelcomePage'
import { GameScreen } from './GameScreen'

export const FirstScreen = () => {
  const userName = useSelector((store) => store.labyrinth.userName)

  return (
    <MainContainer>
      <GameWrapper>
        {userName === '' ? <WelcomePage /> : <GameScreen />}
      </GameWrapper>
    </MainContainer>
  )
};
