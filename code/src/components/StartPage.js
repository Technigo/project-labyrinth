import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { game, getGameStarted } from '../reducers/game'
import GameBoard from './GameBoard.js'
import { FinalPage } from './FinalPage.js'

const StartPage = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const globalGameStep = useSelector((store) => store.game.gameStep.coordinates);

  // create function that stores coordinates

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(game.actions.setUsername(username))

    // eslint-disable-next-line max-len
    /* dispatch(.actions.setCategory(authorNameInputValue)); */ // choises in the game or what user types in the form
    dispatch(getGameStarted());
  }

  if (globalGameStep === '0,0' || globalGameStep === '1,0' || globalGameStep === '1,1' || globalGameStep
  === '0,1' || globalGameStep === '0,2' || globalGameStep === '0,3') {
    return <GameBoard />
  } else if (globalGameStep === '1,3') {
    return <FinalPage />
  }
  return (
    <form onSubmit={(event) => onFormSubmit(event)}>
      <label htmlFor="user-input">
                Whats your name?
        <input
          id="user-input"
          type="text"
          onChange={(event) => setUsername(event.target.value)} />
      </label>
      <button type="submit">START</button>
    </form>)
}

export default StartPage;