import React, { useState } from 'react';
import { startGame } from 'Reducers/labyrinth';
import { useDispatch } from 'react-redux';
import { BigText } from './Startpage.styled';
import { labyrinthMango } from '../Reducers/labyrinth';

export const Startpage = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')

  const letsStart = (e) => {
    e.preventDefault();
    dispatch(labyrinthMango.actions.setUserName(input))
    dispatch(startGame())
  }

  return (
    <div>
      <BigText>Welcome text ish</BigText>
      <form onSubmit={letsStart}>
        <input
          type="text"
          alt="input"
          id="usernameInput"
          placeholder="username"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required />
        <button alt="start button" type="submit">Start Game</button>
      </form>
    </div>
  )
};

