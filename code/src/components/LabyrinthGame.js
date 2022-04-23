import React from 'react'
import { useSelector } from 'react-redux';

import styled from 'styled-components';

import StartScreen from './StartScreen'
import GameScreen from './GameScreen'
import Loading from './Loading';

const LabyrithgameWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 75vh;
`
const InputWrapper = styled.section`

`

const LabyrinthGame = () => {

  const startGame = useSelector((state) => state.game.username);

  return (
    <>
    <LabyrithgameWrapper>
    <InputWrapper>
    {startGame && <Loading />}
    {!startGame && <StartScreen />}
    {startGame && <GameScreen />}
    </InputWrapper>
    </LabyrithgameWrapper>
    </>
  )
}

export default LabyrinthGame