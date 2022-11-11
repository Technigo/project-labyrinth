/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { GameWrapper } from 'Globalstyles';
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
    <GameWrapper>
      <h1>Can you find your way out of the cavern?</h1>
      <form onSubmit={letsStart}>
        <label htmlFor="usernameInput">Write your name please</label>
        <input
          id="usernameInput"
          type="text"
          placeholder="username"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          required />
        <button id="startBtn" type="submit" onClick={letsStart}>Enter cavern</button>
      </form>
    </GameWrapper>
  )
};
