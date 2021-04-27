import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { game, generateQuestion } from '../reducers/game';
// import "nes.css/css/nes.min.css";

const StartContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const Welcome = styled.h1`
  color: white;
  background-color: black;
  text-align: center;
  font-size: 50px;
  font-family: 'roboto';
`;

const Input = styled.input`
  background-color: black;
  border: none;
  border-bottom:2px solid white;
  margin-bottom: 20px;
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
      <Welcome>Welcome</Welcome>
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