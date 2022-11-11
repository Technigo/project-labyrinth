import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { gameState, fetchGame } from 'reducers/gamestate';
import styled from 'styled-components/macro'

const GameStart = () => {
  const dispatch = useDispatch()
  const [userName, setUserName] = useState('');

  const onNameSubmit = (event) => {
    event.preventDefault();
    dispatch(gameState.actions.setUser(userName));
    dispatch(fetchGame());
  }

  return (
    <FormStyled onSubmit={(event) => onNameSubmit(event)}>
      <h1>Welcome to this labyrinth</h1>
      <label htmlFor="user-name"><h2>Please enter your name</h2>
        <input
          id="user-name"
          type="text"
          placeholder="A name never used before"
          onChange={(event) => setUserName(event.target.value)}
          required />
      </label>
      <button
        type="submit"
        className="start-button">
        Start playing
      </button>
    </FormStyled>
  )
};

export default GameStart;

const FormStyled = styled.form`
display: flex;
justify-content: center;
  background-size: cover;
  background-position: 90% 10%;
  color: white;
  box-sizing: border-box;
  min-height: 100vh;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.177),
      rgba(250, 244, 244, 0.598)
    ), url('https://images.unsplash.com/photo-1600758780546-7878338bb498?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjgxNTczNjA&ixlib=rb-4.0.3&q=80');
`
