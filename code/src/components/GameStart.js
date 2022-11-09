import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import gamestate, { generateGame } from 'reducers/gamestate';

const GameStart = () => {
  const [usernameInputValue, setUsernameNameInputValue] = useState('');
  const dispatch = useDispatch();
  // const author = useSelector((store) => store.gamestate.author);
  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(gamestate.actions.setUsername(usernameInputValue));
    dispatch(generateGame());
    /* dispatch(gamestate.actions.setLoading(true)); */
  }

  return (
    <form onSubmit={(event) => onFormSubmit(event)}>
      <h1>Welcome to this labyrinth game</h1>
      <label htmlFor="username-input">
        <input
          required
          id="username-input"
          type="text"
          placeholder="Enter your username"
          onChange={(event) => setUsernameNameInputValue(event.target.value)} />
      </label>
      <button type="submit" required>Confirm</button>
    </form>)
}

export default GameStart;
