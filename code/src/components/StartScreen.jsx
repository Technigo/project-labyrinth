import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { game, generateQuestion } from '../reducers/game';
import { 
  StartContainer, 
  Welcome, 
  Input, 
  Button } from './Styling';

export const StartScreen = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const onSetName = (event) => {
    event.preventDefault()
    dispatch(game.actions.setUserName(value))
    dispatch(generateQuestion(value))
  };

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
        >ENTER LABYRINTH
      </Button>
    </StartContainer>
  )
};