import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import games, { createPlayer } from '../reducers/games'

const StartScreen = () => {
  const [inputValue, setInputValue] = useState('')

  const dispatch = useDispatch()

  const onUserSet = () => {
    dispatch(games.actions.setUserName(inputValue))
    dispatch(createPlayer())
  }

  return (
    <Background>
      <Container>
        <Header>Welcome ...</Header>
        <input 
          type='text'
          value={inputValue}
          placeholder='Type your username'
          onChange={event => setInputValue(event.target.value)}
        />
        <Button onClick={onUserSet}>Start the game!</Button>
      </Container>
    </Background>
  )
}

export default StartScreen

const Background = styled.div`
  background-image: url('https://images.unsplash.com/photo-1532980216874-21f93fa9fd15?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80');
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;

  @media (min-width: 767px){
    background-image: url('https://images.unsplash.com/photo-1560032779-a4e02a11e39e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80');
  }
`
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Header = styled.h1`
  background-color: pink;
`

const Button = styled.button`
  border: none;
  background-color: #FFF;
  margin-top: 30px;
`