import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { game, getGameStarted } from '../reducers/game'

const StartPage = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  // create function that stores coordinates

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(game.actions.setUsername(username))

    // eslint-disable-next-line max-len
    /* dispatch(.actions.setCategory(authorNameInputValue)); */ // choises in the game or what user types in the form
    dispatch(getGameStarted());
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