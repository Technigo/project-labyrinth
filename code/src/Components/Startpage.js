// /////////////// IMPORTS //////////////////////// //

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { labyrinthMango, startGame } from '../Reducers/labyrinth';
import { GameWrapper, BigText, Protip } from '../Styles/Globalstyles';
import { StartBtn } from '../Styles/Gamepage.styled';
import { CoordImage } from './CoordsImageDisplay';
import hej15 from './coord000.png';
import protip from './protip.png';

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
      <CoordImage src={hej15} alt="Displayed" />
      <Protip src={protip} alt="Displayed" />
      <BigText>Enter your name</BigText>
      <BigText>& join the game!</BigText>
      <form onSubmit={letsStart}>
        <input
          type="text"
          alt="input"
          id="usernameInput"
          placeholder=""
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required />
        <StartBtn type="submit" onClick={letsStart}>Start</StartBtn>
      </form>
    </GameWrapper>
  )
};

