import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useDispatch } from 'react-redux';
import { game, generateQuestion } from '../reducers/game';

const opacity = keyframes`
0% {opacity: 0;}
60% {opacity: 0;)}
100% {opacity: 1;}`


const StartContainer = styled.form`
  display: flex;
  flex-direction: column;
  animation: ${opacity} 3.5s linear;
`;

const Welcome = styled.h1`
  color: white;
  text-align: center;
  font-size: 40px;
  width: 100%;
  // border-right: 3px solid #1f9cee;
  white-space: nowrap;
  overflow: hidden;
  margin: 0 auto;
  letter-spacing: 1.8px;
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
  background-color: #34623F;
  border: none; 
  color: white;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Roboto';
  cursor: grab;
  border-radius: 10px;
  :hover {
    box-shadow: 0px 0px 15px -2px #34623F;
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