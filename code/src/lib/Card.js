//Card should maybe be moved to ./components?

import React from 'react'
import styled from "styled-components/macro"
import { useSelector } from 'react-redux'

import { UserInput } from '../components/UserInput'
import { StartGame } from '../components/StartGame'
import { TheLabyrinth } from '../components/TheLabyrinth'
import { CardContainer } from '../lib/Containers'

const Title = styled.h2`
  font-size: 1.5em;
  padding: 10px;
  margin: 5px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2.5em;
    padding: 30px;
  } 
`

const Subtitle = styled.p`
font-size: 1em;
color: #000;
text-align: center;

@media (min-width: 768px) {
  font-size: 1.7em;
} 
`

export const Card = () => {
  const gamePlay = useSelector(state => state.game.all)

  if (!gamePlay.data) {
    return (
      <CardContainer>
        <Title>Welcome to the Labyrinth </Title>
        <Subtitle> Choose your username </Subtitle>
        <UserInput />
        <Subtitle> Let's begin! </Subtitle>
        <StartGame />
      </CardContainer>
    )
  } else {
    return (
      <TheLabyrinth />
    )
  }
}