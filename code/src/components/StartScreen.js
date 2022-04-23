import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import labyrinth, { generateLabyrinth } from 'reducers/labyrinth'

const StartScreen = () => {
  const [inputValue, setInputValue] = useState('')

  const dispatch = useDispatch()

  const onNameSelect = () => {
    dispatch(labyrinth.actions.setUserName(inputValue))
    dispatch(generateLabyrinth())
  }

  const Heading = styled.h1`
    font-family: 'Titillium Web', sans-serif;
    font-size: 40px;
    color: linen;
    text-align: center;
    text-decoration: underline;
    letter-spacing: 1px;
  `
  
  return (
    <div>
      <Heading>Welcome to the labyrinth!</Heading>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Player name..."
        />
        <button onClick={onNameSelect}>Start the game!</button>
    </div>
  )
}

export default StartScreen