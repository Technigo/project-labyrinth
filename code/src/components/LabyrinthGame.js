import React from 'react'
import { useSelector } from 'react-redux';

import styled from 'styled-components';

import StartScreen from './StartScreen'
import GameScreen from './GameScreen'

const LabyrithgameWrapper = styled.section`
display: flex;
flex-direction: column;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;

`
const LabyrinthGame = () => {

  const startGame = useSelector((state) => state.game.username);

  return (
    //conditional rendering här? om username === null, startscreen, else gamescreen?
    <>
    <LabyrithgameWrapper>
    {!startGame && <StartScreen />}
    {startGame && <GameScreen />}
    </LabyrithgameWrapper>
    </>
  )
}

export default LabyrinthGame