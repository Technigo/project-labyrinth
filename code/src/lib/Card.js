import React from 'react'
import styled from "styled-components/macro"
import { useSelector } from 'react-redux'

import { UserInput } from '../components/UserInput'
import { StartGame } from '../components/StartGame'
import { TheLabyrinth } from '../components/TheLabyrinth'
import { CardContainer } from '../lib/Containers'
import { LoadingIndicator } from '../components/LoadingIndicator'
import { Main } from './Containers'
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

const Title = styled.h2`
  font-size: 1.5em;
  padding: 10px;
  margin: 5px;
  text-align: center;
  font-family: 'Monoton', cursive;
  color: #AB8C00;;

  @media (min-width: 768px) {
    font-size: 2.5em;
    padding: 30px;
  } 
`
const Bowie = styled.img`
  width: 250px;
  margin: 10px;
  height: auto;
  border-radius: 5px;

  @media (min-width: 768px) {
    width: 450px;
  } 
`

export const Subtitle = styled.h3`
font-size: 1em;
color: #000;
text-align: center;
font-family: 'Monoton', cursive;

@media (min-width: 768px) {
  font-size: 1.7em;
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
            <Title>"It's only forever, not long at all.." </Title>
            <Bowie
              alt={`GIF of Bowie from movie Labyrinth (1986)`}
              src={'https://media.giphy.com/media/y97hzmaDLeO4w/giphy.gif'}
            />
            
            <UserInput />
            <Subtitle> Let's begin! </Subtitle>
            <StartGame />
          </CardContainer>
          : <LoadingIndicator />}
      </Main>
    )
  } else {
    return (
      <Main style={{ backgroundImage: `url(${ImagePicker()})` }}>
        {!isLoading
          ? <TheLabyrinth />
          : <LoadingIndicator />}
      </Main>
    )
  }
}