/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { gameState, fetchGame } from 'reducers/gamestate';
import { Background } from 'styles/ProjectStyles';
import styled from 'styled-components/macro';

const GameStart = () => {
  const dispatch = useDispatch()
  const [userName, setUserName] = useState('');

  const onNameSubmit = (event) => {
    event.preventDefault();
    dispatch(gameState.actions.setUser(userName));
    dispatch(fetchGame());
  }

  return (
    <Background onSubmit={(event) => onNameSubmit(event)}>
      <Wrapper>
        <Title>Welcome to this labyrinth</Title>
        <label htmlFor="user-name"><h2>Please enter your name</h2>
        </label>
        <input
          id="user-name"
          type="text"
          placeholder="Enter your name here"
          onChange={(event) => setUserName(event.target.value)}
          required />
        <button
          type="submit"
          className="start-button">
        Start playing
        </button>
      </Wrapper>
    </Background>
  )
};

export default GameStart;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 

  .start-button{
    margin-top: 10px;
    top:50%;
    background-color:#0a0a23;
    color: #fff;
    border: none; 
    border-radius:15px; 
    padding:15px;
    min-height:30px; 
    min-width: 120px;
    font-family: 'Russo One', sans-serif;
  }
  .start-button:hover {
    background-color: #002ead;
    transition: 0.7s;
  }
    input::placeholder {
      color: black;
      font-size: 0.75rem;
      text-align: center;
      font-family: 'Russo One', sans-serif;
    }
  .user-name {
    color: white;
  }
`

const Title = styled.h1`
  font-size: 26px;
  animation: blinking 1.2s infinite;
  @keyframes blinking {
    0%{color: white;}
    49%{color: white;}
    60%{color: transparent;}
    99%{color:transparent;}
    100%{color: white;}  
  }
  @media (min-width: 668px) {
   font-size: 45px; 
  }
`