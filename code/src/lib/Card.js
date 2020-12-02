import React from 'react'
import styled from "styled-components/macro"
import { useSelector } from 'react-redux'

import { UserInput } from '../components/UserInput'
import { StartGame } from '../components/StartGame'
import { TheLabyrinth } from '../components/TheLabyrinth'

export const CardContainer = styled.section`
  box-sizing: border-box;
  background: #ccc;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 
              0px 1px 1px 0px rgba(0, 0, 0, 0.14), 
              0px 1px 3px 0px rgba(0,0,0,.12);
  width: 100%;
  margin-bottom: 10px;
  ${({carddeck}) => carddeck && `
  background: #f0e7d1;
  border-radius: 5px;
  outline: 1px solid grey;
  outline-offset: -7px;
  `}
  ${({movedeck}) => movedeck && `
  height: 300px;
  margin: 2px;
  background: #f0e7d1;
  border-radius: 5px;
  outline: 1px solid grey;
  outline-offset: -7px;
  `}
  `

  const Title = styled.h2`
  font-size: 25px;
  padding: 10px;
  text-align: center;
`

const Subtitle = styled.p`
font-size: 15px;
color: #000;
text-align: center;
`

export const Card = () => {
  const gamePlay = useSelector(state => state.game.all)
  
  // && setLoading(false)

  if (!gamePlay.data) {
  return (
    <CardContainer>
      <Title>Welcome to the Labyrinth </Title>
      <Subtitle> Choose your username </Subtitle>
      <UserInput />
      <Subtitle> Let's begin! </Subtitle>
      <StartGame />
    </CardContainer>
  )} else {
    return (
        <TheLabyrinth/>
    )
  }
  }