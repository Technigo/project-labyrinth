import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'

import StartScreen from './StartScreen'
import GameScreen from './GameScreen'
import Loader from './Loader'
import {
  bg0_0,
  bg0_1,
  bg0_2,
  bg0_3,
  bg1_0,
  bg1_1,
  bg1_3,
  bg_start
} from 'styles/BackgroundURLs'

export const Game = () => {

  const username = useSelector(store => store.labyrinth.username)
  const coordinates = useSelector(store => store.labyrinth.currentStep.coordinates)
  const isLoading = useSelector((store) => store.ui.isLoading)

  if (isLoading) {
    return <Loader />
  }

  return (
    <Section coordinates={coordinates}>
      {username ?
        <GameScreen />
        :
        <StartScreen />}
    </Section>
  )
}

export default Game

const Section = styled.section`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-image: ${(props) =>
    props.coordinates === '0,0'
      ? bg0_0
      : props.coordinates === '0,1'
        ? bg0_1
        : props.coordinates === '0,2'
          ? bg0_2
          : props.coordinates === '0,3'
            ? bg0_3
            : props.coordinates === '1,0'
              ? bg1_0
              : props.coordinates === '1,1'
                ? bg1_1
                : props.coordinates === '1,3'
                  ? bg1_3 :
                  bg_start};
`
