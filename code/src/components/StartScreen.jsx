import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useDispatch } from 'react-redux';
import { game, generateQuestion } from '../reducers/game';


const StartContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const type = keyframes`
from { width: 0; }
to { width: 100%; }`

const line = keyframes`
  from, to { border-color: transparent }
  50% { border-color: #1f9cee; }
`;

const Welcome = styled.h1`
  color: white;
  background-color: black;
  text-align: center;
  font-size: 40px;
  font-family: 'Gabriela';
  width: 100%;
  // border-right: 3px solid #1f9cee;
  white-space: nowrap;
  overflow: hidden;
  margin: 0 auto;
  letter-spacing: 1.8px;
  animation: ${type} 2.5s steps(20, end) 0.07s 1 normal both,
  ${line} .75s step-end infinite;
`;

const Input = styled.input`
  background-color: black;
  border: none;
  border-bottom:2px solid white;
  margin: 20px 0;
  padding: 10px 5px 5px 5px;
  font-size: 18px;
  color: white;
  outline: none;
  border-radius: 5px;
  :focus {
    background-color: #1c1a1a;
    color: white;
  }
`;

const Button = styled.button`
  background-color: #1f9cee;
  border: none; 
  color: white;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  font-family: 'press start 2p';
  cursor: grab;
  border-radius: 10px;
  :hover {
    box-shadow: 0px 0px 15px -2px #1f9cee;
  }
`;

export const StartScreen = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const onSetName = (event) => {
    event.preventDefault()
    dispatch(game.actions.setUserName(value))
    dispatch(generateQuestion(value))
  }

  return (
    <StartContainer onSubmit={onSetName}>
      <Welcome>WELCOME</Welcome>
      <Input
        type="text"
        value={value}
        placeholder="ADD NAME"
        onChange={(e) => setValue(e.target.value)}
        minLength="3"
        maxLength="30"
        required
      />
      <Button
        type="submit"
        className="nes-btn is-primary"
        >START
      </Button>
    </StartContainer>
  )
}