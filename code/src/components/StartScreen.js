import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { labyrinth, startGame } from '../reducers/labyrinth';

const StartScreen = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const onNameInput = () => {
    dispatch(labyrinth.actions.setUsername(username));
    dispatch(startGame(username));
  };
  return (
    <form onSubmit={onSubmit}>
      <h3>Enter you username: </h3>
      <input
        type='text'
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <button type='submit' onClick={onNameInput}>
        SUBMIT
      </button>
    </form>
  );
};

export default StartScreen;
