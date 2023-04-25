import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserName, startGame } from 'reducers/game';

const UserName = () => {
  const [nameInputValue, setNameInputValue] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(setUserName(nameInputValue))
    dispatch(startGame());
  }

  return (
    <form onSubmit={(event) => onFormSubmit(event)}>
      <label htmlFor="user-name">
      Provide gamer name:
        <input id="user-name" type="text" onChange={(event) => setNameInputValue(event.target.value)} />
      </label>
      <button type="submit">start game</button>
    </form>)
}

export default UserName;