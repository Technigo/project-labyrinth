import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { labyrinthMango, startGame } from '../Reducers/labyrinth';
import { BigText } from './Startpage.styled';
import { GameWrapper } from '../Styles/Globalstyles';

export const Startpage = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')

  const letsStart = (e) => {
    e.preventDefault();
    dispatch(labyrinthMango.actions.setUserName(input));
    dispatch(startGame());
  }

  return (
    <GameWrapper>
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
        <button type="submit" onClick={letsStart}>Start Game</button>
      </form>
    </GameWrapper>
  )
};

