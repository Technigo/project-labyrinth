import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import game, { gameProgress } from 'reducers/game';
import { v4 as uuidv4 } from 'uuid';

const StartScreen = () => {
  const [usernameInputValue, setUsernameInputValue] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(game.actions.setUsername(`${uuidv4()}/${usernameInputValue}`));
    dispatch(gameProgress('start'));
    dispatch(game.actions.showGame());
  };

  return (
    <form onSubmit={(event) => onFormSubmit(event)}>
      <label htmlFor="username">Type in username:</label>
      <input
        name="username"
        type="text"
        placeholder="Enter name..."
        value={usernameInputValue}
        onChange={(event) => setUsernameInputValue(event.target.value)}
        required
      />
      <button type="submit"> submit</button>
    </form>
  );
};

export default StartScreen;
