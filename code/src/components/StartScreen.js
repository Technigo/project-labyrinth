import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { labyrinth, startGame } from '../reducers/labyrinth';
import { BtnNavigate } from './GameScreen';
import { devices } from './GameScreen';

const StartWrapper = styled.section`
  display: flex;
  background-color: rgb(214, 210, 197, 0.5);
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  top: 20%;
  @media ${devices.tablet} {
    top: 15%;
    font-size: 20px;
    width: 100vw;
    width: 98%;
    margin: auto;
  }
  @media ${devices.desktop} {
    font-size: 25px;
    width: 60vw;
    left: 20%;
    top: 30%;
  }
`;

const NameInput = styled.input`
  display: inline-block;
  margin: 15px;
  width: 200px;
  height: 30px;
  @media ${devices.tablet} {
    display: block;
    width: 300px;
    height: 40px;
    margin: auto;
    font-size: 25px;
  }
  @media ${devices.desktop} {
    width: 400px;
    height: 45px;
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
        <NameInput
          type='text'
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <BtnNavigate type='submit' onClick={onNameInput}>
          Start Game
        </BtnNavigate>
      </form>
    </StartWrapper>
  );
};

export default StartScreen;
