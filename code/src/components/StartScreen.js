import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useDispatch } from 'react-redux';
import { startGame, setUserName } from 'reducers/game';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 30px;

  h1 {
    animation: ${fadeIn} 2.5s ease-in;
    font-family: var(--font-family);
    font-size: 2.7em;
    margin-bottom: 10px;

    @media (min-width: 667px) {
      font-size: 60px;
    }

    @media (min-width: 1024px) {
      font-size: 60px;
    }
  }

  h2 {
    animation: ${fadeIn} 3.5s ease-in;
    font-family: var(--font-family);
    font-style: italic;
    font-size: 2.4em;

    @media (min-width: 667px) {
      font-size: 60px;
    }

    @media (min-width: 1024px) {
      font-size: 60px;
    }
  }

  input, button {
    animation: ${fadeIn} 4s ease-in;
    font-size: 20px;
    margin-top: 20px;
  }

  button {
    font-family: var(--font-family);
    padding: 5px 10px;
    border-radius: 5px;
    border: none;
    background-color: white;
    color: black;
    cursor: pointer;
  }

  input {
    font-family: 'Cinzel', serif;
    border-radius: 5px;
    border: none;
    padding: 3px;
    background-color: white;
    color: black;

    &:focus {
        outline: black solid 1px;
        background-color: white;
    }

    &::placeholder {
      font-size: 14px;
      color: grey;
    }
  }
`;

const UserName = ({ onUserNameSubmitted }) => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(setUserName(inputValue));
    dispatch(startGame());
    onUserNameSubmitted();
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <h1>Please enter your name,</h1>
      <h2>if you would like to enter the labyrinth</h2>
      <input
        type="text"
        value={inputValue}
        placeholder="Enter name..."
        required
        onChange={(event) => setInputValue(event.target.value)} />
      <button type="submit">Start Game</button>
    </StyledForm>
  );
};

export default UserName;
