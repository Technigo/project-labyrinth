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
  //width: 100vw;
  height: auto;
  margin-bottom: 10px;

  background: #f0e7d1;
  border-radius: 5px;
  outline: 1px solid grey;
  outline-offset: -7px;
  padding: 10px;
  text-align: center;

  ${({movedeck}) => movedeck && `
  height: 300px;
  margin: 2px;
  background: #f0e7d1;
  border-radius: 5px;
  outline: 1px solid grey;
  outline-offset: -7px;

  @media (min-width: 768px) {
    height: 80%;
    grid-column: 3;
  }  `}

  ${({carddeck}) => carddeck && `
  @media (min-width: 768px) {
    height: 100%;
  }
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
/* I commented out this to see if it was 
needed when the starting card hade the same styling.
It wasn't, so maybe we could skip it? 
${({carddeck}) => carddeck && `
  background: #f0e7d1;
  border-radius: 5px;
  outline: 1px solid grey;
  outline-offset: -7px;

  `}  */
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
  )} else {
    return (
        <TheLabyrinth/>
    )
  }
  }