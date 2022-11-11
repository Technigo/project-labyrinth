import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { game, fetchGame } from 'reducers/game';
import styled from 'styled-components/macro';

export const StartGame = () => {
  const [userName, setUserName] = useState('')
  const dispatch = useDispatch();

  const onInputUserName = (event) => {
    event.preventDefault()
    setUserName(event.target.value)
  }

  const onChangeUserName = () => {
    dispatch(game.actions.setUserName(userName))
    setUserName('')
    dispatch(fetchGame())
  }

  return (
    <GameContainer>
      <h1>Welcome, fellow adventurer, to this mystical forest.</h1>
      <h2>What is your name?</h2>
      <InputAndStart>
        <InputField
          type="text"
          value={userName}
          onChange={onInputUserName}
          onKeyDown={(e) => e.key === 'Enter' && onChangeUserName()} />
        <button
          type="submit"
          onClick={onChangeUserName}
          disabled={userName.length === 0}>
            Start
        </button>
      </InputAndStart>
    </GameContainer>
  )
};

export const GameContainer = styled.div`
display: flex;
flex-direction: column;
`;

export const InputAndStart = styled.div`
display: flex;
`;

export const InputField = styled.input`
outline: 3px dashed #B1D9AF;
border: none;
margin-right: 5px;
border-radius: 3px;
`;

export const GameHeader = styled.h1`
`;