import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import labyrinth, { generateFetch } from 'reducers/labyrinth';
// import styled from 'styled-components/macro';
// import {  } from '../styles/mainStyles';

const UserInput = () => {
  const [userNameInputValue, setUserNameInputValue] = useState('');

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(labyrinth.actions.setUser(userNameInputValue));
    dispatch(generateFetch())
    console.log(userNameInputValue)
  }

  return (
    <form onSubmit={(event) => onFormSubmit(event)}>
      <label htmlFor="user-input">
        GREETINGS PROFESSOR FALKEN, HOW ARE YOU FEELING TODAY?
        SHALL WE PLAY A GAME?
        A Button here for YES
        Type in your name:
        <input
          id="user-input"
          type="text"
          value={userNameInputValue}
          onChange={(event) => setUserNameInputValue(event.target.value)} />
      </label>
      <button type="submit">search</button>
    </form>
  )
}

export default UserInput;
