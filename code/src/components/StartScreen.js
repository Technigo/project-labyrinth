import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { labyrinth, startGame } from '../reducers/labyrinth';

const StartWrapper = styled.section`
  display: flex;
  background-color: rgb(214, 210, 197, 0.3);
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  top: 20%;
  @media (min-width: 768px) {
    top: 30%;
    left: 22%;
  }
  @media (min-width: 1025px) {
    top: 40%;
    left: 35%;
  }
`;

const StartScreen = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    console.log();
  };

  const onNameInput = () => {
    dispatch(labyrinth.actions.setUsername(username));
    dispatch(startGame(username));
  };

  return (
    <StartWrapper>
      <form onSubmit={onSubmit}>
        <h3>Are you ready to enter the labyrinth? Let us know your name. </h3>
        <input
          type='text'
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <button type='submit' onClick={onNameInput}>
          SUBMIT
        </button>
      </form>
    </StartWrapper>
  );
};

export default StartScreen;
