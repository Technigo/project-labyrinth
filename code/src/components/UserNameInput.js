import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { game, generateGame } from 'reducers/game';

const UserNameInput = () => {
  const [UsernameInputValue, setUsernameInputValue] = useState('');

  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(game.actions.setUsername(UsernameInputValue));
    dispatch(generateGame());
    setUsernameInputValue('');
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="user-name-input">
        Enter name
          <input
            id="user-name-input"
            onChange={(event) => setUsernameInputValue(event.target.value)}
            value={UsernameInputValue} />
        </label>
        <button type="submit">Start game</button>
      </form>
    </div>
  )
}

export default UserNameInput;