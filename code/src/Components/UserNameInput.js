import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import labyrinth, { getLabyrinth } from 'reducers/labyrinth';

const UserNameInput = ({ onStartGame }) => {
  const [userNameInputValue, setUserNameInputValue] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    // save the username to global state
    dispatch(labyrinth.actions.setUserName(userNameInputValue));

    // send request to api
    dispatch(getLabyrinth());

    // clear the input
    setUserNameInputValue('');

    // call the onStartGame callback function to hide the UserNameInput component
    onStartGame();
  }

  return (
    <form onSubmit={(event) => onFormSubmit(event)}>
      <label htmlFor="name-input">
        Provide a user name
        <input required id="name-input" type="text" onChange={(event) => setUserNameInputValue(event.target.value)} />
      </label>
      <button type="submit">START GAME</button>
    </form>
  )
}

export default UserNameInput;
