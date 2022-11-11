import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { game, fetchGame } from 'reducers/game';
import styled from 'styled-components/macro';
// import { DuckContainer } from 'styled-components/GlobalStyles';
// import { DucklingHeader } from './DucklingHeader';

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
      <h1>Hi</h1>
      <h2>welcome</h2>
      <p>who are you?</p>
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
outline: 2px dashed #0F887D;
border: none;
border-radius: 3px;
`;

export const GameHeader = styled.h1`
`;

/* import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import game, { fetchGame } from 'reducers/game';

const Game = () => {
  const [userNameInputValue, setUserNameInputValue] = useState('');
  const dispatch = useDispatch();
  const username = useSelector((store) => store.game.username);

  const onFormSubmit = (event) => {
    event.preventDefault();

    dispatch(game.actions.setName(userNameInputValue))
    dispatch(fetchGame());
  }

const Game = () => {
  const isLoading = useSelector((store) => store.ui.isLoading)
  const [userName, setUserName] = useState('')
  const dispatch = useDispatch()

  const onInputUserName = (event) => {
    event.preventDefault()
    setUserName(event.target.value)
  }

  const onChangeUserName = () => {
    dispatch(game.actions.setName(userName))
    setUserName('')
    dispatch(fetchGame())
  }

  return (
    <form onSubmit={(event) => onFormSubmit(event)}>
      <label htmlFor="author-input">
      Provide author name, please:
        <input id="author-input" type="text" onChange={(event) =>
          setUserNameInputValue(event.input.value)} />
      </label>
      <button type="submit">search for quotes</button>
    </form>)
}

export default Game; */
