import React from 'react'
import styled from "styled-components/macro"
import { useSelector } from 'react-redux'

import { UserInput } from '../components/UserInput'
import { StartGame } from '../components/StartGame'
import { TheLabyrinth } from '../components/TheLabyrinth'
import { LoadingIndicator } from 'components/LoadingIndicator'
// import { Button } from './Button'

export const CardContainer = styled.section`
  background: #ccc;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 
              0px 1px 1px 0px rgba(0, 0, 0, 0.14), 
              0px 1px 3px 0px rgba(0,0,0,.12);
  width: 100%;
  //width: 100vw;
  height: auto;
  margin-bottom: 10px;
  `

const Text = styled.p`
  font-size: 20px;
  color: #000;
`

export const Card = () => {
  const gamePlay = useSelector(state => state.game.all)
  
  console.log(gamePlay) // remove later
  console.log(gamePlay.actions) // remove later
  
  if (!gamePlay.data) {
  return (
    <CardContainer>
      {/* This is the initial text when opening the page */}
      {!gamePlay.description && <Text>Start game!</Text>}
      <UserInput />
      <StartGame />
    </CardContainer>
  )} else {
    return (
        <TheLabyrinth/>
    )
  }
  }