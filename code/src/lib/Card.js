//Card should maybe be moved to ./components?

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
  width: 90%;
  height: auto;
  margin-bottom: 10px;

  background: linear-gradient(to right, #DECBA4, #f0e7d1);
  border-radius: 5px;
  outline: 1px solid grey;
  outline-offset: -7px;
  padding: 10px;
  text-align: center;

  @media (min-width: 768px) {
    width: 80%;
  } 

  @media (min-width: 1024px) {
    grid-column: 2;
    width: 100%;
  }

  ${({ carddeck }) => carddeck && `
  @media (min-width: 768px) {
    height: 100%;
    width: 100%;
  }
  @media (min-width: 1024px) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  `}

  ${({movedeck}) => movedeck && `
  min-height: 360px;
  max-height: 400px;
  margin: 2px;
  border-radius: 5px;
  outline: 1px solid grey;
  outline-offset: -7px;

  @media (min-width: 768px) {
    margin: 25px 5px 0 5px;

  }   @media (min-width: 1024px) {
    margin: 0 0 10px 0;
  }
  `}
  `

const Title = styled.h2`
  font-size: 1.5rem;
  padding: 10px;
  margin: 5px;
  text-align: center;
  font-family: 'Monoton', cursive;
  color: #AB8C00;;

  @media (min-width: 768px) {
    font-size: 40px;
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

const Subtitle = styled.p`
font-size: 1.2rem;
color: #000;
text-align: center;
font-family: 'Monoton', cursive;

@media (min-width: 768px) {
  font-size: 1.8rem;
} 
`

export const Card = () => {
  const gamePlay = useSelector(state => state.game.all)

  if (!gamePlay.data) {
    return (
      <CardContainer>
        <Title>"It's only forever, not long at all.." </Title>
        <Bowie
        alt={`GIF of Bowie from movie Labyrinth (1986)`}
        src={'https://media.giphy.com/media/y97hzmaDLeO4w/giphy.gif'}
        />
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