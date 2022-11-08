/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { MainContainer, GameWrapper } from 'Globalstyles'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { generateActions, labyrinth } from 'reducers/labyrinth'

export const StartPage = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')

  const startTheGame = (event) => {
    event.preventDefault();
    dispatch(labyrinth.actions.setUserName(input))
    setInput('')
    fetch('https://labyrinth.technigo.io/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: input
      })
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .then(() => dispatch(generateActions(input)))
  }

  return (
    <MainContainer>
      <GameWrapper>
        <h1>Hello, lets play a game</h1>
        <form onSubmit={startTheGame}>
          <label htmlFor="usernameInput">Please enter your name</label>
          <input
            id="usernameInput"
            type="text"
            placeholder="username"
            onChange={(event) => setInput(event.target.value)}
            required />
          <button type="submit">Start</button>
        </form>
      </GameWrapper>
    </MainContainer>
  )
};
