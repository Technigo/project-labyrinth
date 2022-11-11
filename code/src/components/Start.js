/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGame, labyrinth } from 'reducers/labyrinth';
import { Loading } from './Loading';
import Labyrinth from './Labyrinth';

export const Start = () => {
  const [usernameInputValue, setUsernameInputValue] = useState('')
  const loading = useSelector((store) => store.labyrinth.loading)
  const userEntered = useSelector((store) => store.labyrinth.username)
  const dispatch = useDispatch()

  const onFormSubmit = (event) => {
    event.preventDefault()
    dispatch(labyrinth.actions.setUsername(usernameInputValue));
    console.log(usernameInputValue)
    dispatch(startGame());
  };

  if (loading) {
    return <Loading />;
  }
  if (!userEntered) {
    return (
      <div>
        <div>
          <h1>Welcome, insert a random string of letters to start game:</h1>
          <h3>(Something like "ekfoepwv") 🦁 </h3>
          <input
            type="text"
            placeholder="Something unique"
            value={usernameInputValue}
            onChange={(event) => setUsernameInputValue(event.target.value)} />
          <button
            type="button"
            onClick={onFormSubmit}>
            START
          </button>
        </div>
      </div>
    );
  } else {
    return <Labyrinth />
  }
};
