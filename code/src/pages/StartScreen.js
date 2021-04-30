import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import maze from '../reducers/maze'
import { firstFetch } from '../reducers/maze'

const StartScreen = () => {
  const [inputValue, setInputValue] = useState('')

  const dispatch = useDispatch();

  const isLoading = useSelector(store => store.maze.isLoading)

  const onStartGame = () => {
      dispatch(maze.actions.setLoading(!isLoading))
      dispatch(maze.actions.setUsername(inputValue))
      dispatch(firstFetch());
  }
  
  return (
    <Main>
      <Border>
        <Greeting>
          Welcome traveller!
        </Greeting>
        <Instruction>
          Enter your name and start the adventure.
        </Instruction>
        <Label
          htmlFor='name_input'>
        <NameInput
          type='text'
          id='name_input'
          value={inputValue}
          onChange={event => setInputValue(event.target.value)}
        />
        </Label>
        <Link to='/game'>
          <StartButton
            type='button'
            className='nes-btn'
            onClick= {() => onStartGame()} >
              START GAME
          </StartButton>
        </Link>
        <Copy>
          ©2021 Technigo Bootcamp
        </Copy>
      </Border>
    </Main>
  )
}

export default StartScreen

const Main = styled.main`
  background-color: #000;
  height: 100vh;
  padding: 25px;
`
const Border = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: dashed grey 4px;
  width: 100%;
  height: 100%;
  padding: 20px;
`
const Greeting = styled.h1`
  font-family: 'Press Start 2P', cursive;
  color: #fff;
  font-size: 24px;
  width: 100%;
  text-align: center;
    @media (min-width: 768px) {
      font-size: 48px;
      margin-bottom: 25px;
    }
`
const Instruction = styled.p`
  font-family: 'Press Start 2P', cursive;
  color: #fff;
  font-size: 12px;
  width: 70%;
  text-align: center;
    @media (min-width: 768px) {
      font-size: 18px;
    }
`
const Label = styled.label`
width: 80%;
  @media (min-width: 768px) {
    width: 50%;
  }
  @media (min-width: 1025px) {
    width: 30%;
  }
`
const NameInput = styled.input`
  font-family: 'Press Start 2P', cursive;
  font-size: 14px;
  color: #fff;
  width: 100%;
  height: 60px;
  background-color: #212529;
  border: dashed white 3px;
  margin-top: 50px;
  padding: 5px;
    @media (min-width: 768px) {
      font-size: 18px;
    }
`
const StartButton = styled.button`
  font-family: 'Press Start 2P', cursive;
  margin-top: 25px;
  -webkit-appearance: none;
`
const Copy = styled.p`
  font-family: 'Press Start 2P', cursive;
  color: #fff;
  font-size: 10px;
  width: 100%;
  text-align: center;
  margin-top: 30px;
    @media (min-width: 768px) {
      font-size: 12px;
    }
    @media (min-width: 1025px) {
      font-size: 14px;
    }
`