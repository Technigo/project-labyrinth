import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import games, { createPlayer } from '../reducers/games'

const Container = styled.div`
  border: solid black 2px;
`
const Header = styled.h1`
  background-color: pink;
`

const StartScreen = () => {
  const [inputValue, setInputValue] = useState('')

  const dispatch = useDispatch()

  const onUserSet = () => {
    dispatch(games.actions.setUserName(inputValue))
    dispatch(createPlayer())
  }

  return (
    <Container>
      <Header>Welcome ...</Header>
      <input 
        type='text'
        value={inputValue}
        placeholder='Type your username'
        onChange={event => setInputValue(event.target.value)}
      />
      <button onClick={onUserSet}>Start the game!</button>
    </Container>
  )
}

export default StartScreen
