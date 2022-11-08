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
  }

  return (
    <form onSubmit={(event) => onFormSubmit(event)}>
      <label htmlFor="username-input">
        <input
          required
          id="username-input"
          type="text"
          placeholder="Enter your username"
          onChange={(event) => setUsernameNameInputValue(event.target.value)} />
      </label>
      <button type="submit">Start playing</button>
    </form>)
}

export default GameStart;
