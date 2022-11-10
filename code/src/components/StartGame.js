/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import game, { startGame } from 'reducers/game';
import { Button } from './styling/MainStyles';

const StartGame = () => {
  const [userName, setUserName] = useState('')
  const dispatch = useDispatch();

  const setUser = (event) => {
    event.preventDefault();
    dispatch(game.actions.setUser(userName));
    dispatch(startGame());
  }

  return (
    <StyledForm>
      <label htmlFor="user-input">
        <StyledInput
          id="user-input"
          type="text"
          placeholder="Type your name"
          onChange={(event) => setUserName(event.target.value)}
          value={userName} />
      </label>
      <Button
        type="submit"
        disabled={userName.length === 0}
        onClick={setUser}> Start game
      </Button>
    </StyledForm>
  )
}

export default StartGame;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  width: 100%;

`

const StyledInput = styled.input`
  border: 1px solid white;
  background-color: black;
  padding: 24px;
  width: 87%;
  text-align: center;
  font-size: 24px;

  &:focus {
    color: white;
    outline: none !important;
    border:1px solid white;
    box-shadow: none;
  }
`
