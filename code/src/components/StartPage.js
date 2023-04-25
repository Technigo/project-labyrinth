import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import game, { getGameStep } from 'reducers/game'

const StartPage = () => {
  const [userNameInputValue, setUserNameInputValue] = useState('');
  const dispatch = useDispatch();

  // create function that stores coordinates

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(setUserNameInputValue(userNameInputValue))

    // eslint-disable-next-line max-len
    /* dispatch(.actions.setCategory(authorNameInputValue)); */ // choises in the game or what user types in the form
    dispatch(getGameStep());
  }

  return (
    <form onSubmit={(event) => onFormSubmit(event)}>
      <label htmlFor="user-input">
                Whats your name?
        <input id="user-input" type="text" onChange={(event) => setUserNameInputValue(event.target.value)} />
      </label>
      <button type="submit">get joke</button>
    </form>)
}

export default StartPage;