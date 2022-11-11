/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { MainContainer, GameWrapper } from 'Globalstyles';
import React, { useState } from 'react';
import { useDispatch /* useSelector */ } from 'react-redux';
import { startTheGame, labyrinth } from 'reducers/labyrinth';

export const WelcomePage = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')

  const letsStart = (event) => {
    event.preventDefault();
    dispatch(labyrinth.actions.setUserName(input))
    dispatch(startTheGame())
  }

  return (
    <MainContainer>
      <GameWrapper>
        <h1>Hello, lets play a game</h1>
        <form onSubmit={letsStart}>
          <label htmlFor="usernameInput">Please enter your name</label>
          <input
            id="usernameInput"
            type="text"
            placeholder="username"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            required />
          <button type="submit" onClick={letsStart}>Start</button>
        </form>
      </GameWrapper>
    </MainContainer>
  )
};
