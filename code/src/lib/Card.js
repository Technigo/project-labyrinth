import React from 'react'
import styled from "styled-components/macro"
import { useSelector } from 'react-redux'

import { UserInput } from '../components/UserInput'
import { StartGame } from '../components/StartGame'
import { TheLabyrinth } from '../components/TheLabyrinth'

export const CardContainer = styled.section`
  box-sizing: border-box;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 
              0px 1px 1px 0px rgba(0, 0, 0, 0.14), 
              0px 1px 3px 0px rgba(0,0,0,.12);
  width: 100%;
  //width: 100vw;
  height: auto;
  margin-bottom: 10px;

  // background: #f0e7d1;
  background: linear-gradient(to right, #DECBA4, #f0e7d1);
  border-radius: 5px;
  outline: 1px solid grey;
  outline-offset: -7px;
  padding: 10px;
  text-align: center;

  ${({movedeck}) => movedeck && `
  height: 300px;
  margin: 2px;
  // background: #f0e7d1;
  border-radius: 5px;
  outline: 1px solid grey;
  outline-offset: -7px;

  @media (min-width: 768px) {
    // height: 80%;
    margin: 25px 5px 0 5px;
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