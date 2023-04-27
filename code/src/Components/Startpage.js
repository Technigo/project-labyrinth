// /////////////// IMPORTS //////////////////////// //

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { labyrinthMango, startGame } from '../Reducers/labyrinth';
import { GameWrapper, BigText } from '../Styles/Globalstyles';
import { StartBtn } from '../Styles/Gamepage.styled';

// /////////////// COMPONENT //////////////////////// //

export const Startpage = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')

  const letsStart = (e) => {
    e.preventDefault();
    dispatch(labyrinthMango.actions.setUserName(input));
    dispatch(startGame());
  }

  // /////////////// OUTCOME //////////////////////// //

  return (
    <GameWrapper>
      <BigText>Join the game!</BigText>
      <BigText>Enter your name</BigText>
      <form onSubmit={letsStart}>
        <input
          type="text"
          alt="input"
          id="usernameInput"
          placeholder="Name.."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required />
        <StartBtn type="submit" onClick={letsStart}>Start</StartBtn>
      </form>
    </GameWrapper>
  )
};

