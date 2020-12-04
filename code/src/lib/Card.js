//Card should maybe be moved to ./components?

import React from 'react'
import styled from "styled-components/macro"
import { useSelector } from 'react-redux'

import { UserInput } from '../components/UserInput'
import { StartGame } from '../components/StartGame'
import { TheLabyrinth } from '../components/TheLabyrinth'
import { LoadingIndicator } from '../components/LoadingIndicator'
import { Main } from './Main'
import {
  imgUrl_00,
  imgUrl_10,
  imgUrl_11,
  imgUrl_01,
  imgUrl_02,
  imgUrl_03,
  imgUrl_13,
  imgUrl_start
} from '../lib/ImageUrls'

export const CardContainer = styled.section`
  box-sizing: border-box;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 
              0px 1px 1px 0px rgba(0, 0, 0, 0.14), 
              0px 1px 3px 0px rgba(0,0,0,.12);
  width: 100%;
  //width: 100vw;
  max-width: 1024px;
  height: auto;
  //min-height: 405px;
  margin-bottom: 10px;

  // background: #f0e7d1;
  background: linear-gradient(to right, #DECBA4, #f0e7d1);
  border-radius: 5px;
  outline: 1px solid grey;
  outline-offset: -7px;
  padding: 10px;
  text-align: center;

  @media (min-width: 1024px) {
    grid-column: 2;
  }

  ${({ movedeck }) => movedeck && `
  height: 300px;
  margin: 2px;
  // background: #f0e7d1;
  border-radius: 5px;
  outline: 1px solid grey;
  outline-offset: -7px;

  @media (min-width: 768px) {
    margin: 25px 5px 0 5px;
  }  `}

  ${({ carddeck }) => carddeck && `
  @media (min-width: 768px) {
    height: 100%;
  }
  @media (min-width: 1024px) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  `}
  `

const Title = styled.h2`
  font-size: 25px;
  padding: 10px;
  margin: 5px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 40px;
    padding: 30px;
  } 
`

const Subtitle = styled.p`
font-size: 17px;
color: #000;
text-align: center;

@media (min-width: 768px) {
  font-size: 24px;
} 
`

export const Card = () => {
  const gamePlay = useSelector(state => state.game.all)
  const isLoading = useSelector(state => state.ui.isLoading)
  const gameData = useSelector(state => state.game.all.data)

  const ImagePicker = () => {
    if (!gameData) {
      return (imgUrl_start)
    } else if (gameData.coordinates === "0,0") {
      return (imgUrl_00)
    } else if (gameData.coordinates === "1,0") {
      return (imgUrl_10)
    } else if (gameData.coordinates === "1,1") {
      return (imgUrl_11)
    } else if (gameData.coordinates === "0,1") {
      return (imgUrl_01)
    } else if (gameData.coordinates === "0,2") {
      return (imgUrl_02)
    } else if (gameData.coordinates === "0,3") {
      return (imgUrl_03)
    } else if (gameData.coordinates === "1,3") {
      return (imgUrl_13)
    } else return (imgUrl_00)
  }

  if (!gamePlay.data && !isLoading) {
    return (
      <Main style={{ backgroundImage: `url(${ImagePicker()})` }}>
        {!isLoading
          ? <CardContainer>
            <Title>Welcome to the Labyrinth </Title>
            <Subtitle> Choose your username </Subtitle>
            <UserInput />
            <Subtitle> Let's begin! </Subtitle>
            <StartGame />
          </CardContainer>
          : <LoadingIndicator />}
      </Main>
    )
  }
  //else if (isLoading) {
  //   return (
  //     <LoadingIndicator />
  //   )
  // } 
  else {
    return (
      <Main style={{ backgroundImage: `url(${ImagePicker()})` }}>
        {!isLoading
          ? <TheLabyrinth />
          : <LoadingIndicator />}
      </Main>
    )
  }
}