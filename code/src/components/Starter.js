import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"

import { startMaze } from "../reducers/maze"

/* import { NavButton } from "styling/styling" */

// Styled components

const InputContainer = styled.div`
  max-width: 500px;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.4);
  border: 1px solid black;
  border-radius: 10px;
`

const StyledInput = styled.input`
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  max-width: 300px;
  width: 100%;
  height: 20px;
  padding: 10px;
  border-radius: 10px;
  border: none;
`
const NavButton = styled.button`
  background-color: lightblue;
  border: none;
  border-radius: 10px;
  width: 60px;
  padding: 10px;
`

// Starter component
export const Starter = () => {
  const [userName, setUserName] = useState("")
  const user = useSelector(store => store.maze.username)
  console.log("user", user) // CONSOLE

  const dispatch = useDispatch()

  const startGame = () => {
    dispatch(startMaze(userName))
  }

  const checkKey = event => {
    if (event.keyCode === 13 && !event.shiftKey) {
      startGame(event)
    }
  }

  return (
    <InputContainer>
      <h1>
        Welcome to our amazing maze. See if you can find you way out of it.
      </h1>
      <p>Start with entering your name.</p>

      <StyledInput
        type="text"
        value={userName}
        placeholder="Enter your username here"
        onChange={event => setUserName(event.target.value)}
        onKeyDown={event => checkKey(event)}
      />

      <NavButton onClick={startGame}> Start </NavButton>
      <p>Good luck</p>
    </InputContainer>
  )
}
