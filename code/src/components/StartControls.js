import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';
import { Button, Form, TextInput, Background, MainText } from './styling';

import { game } from '../reducers/game';
import { StartGame } from '../reducers/fetch';

const StartControls = () => {
  const dispatch = useDispatch();
  const userName = useSelector((store) => store.game.name)

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(StartGame(userName));
  }

  const onChangeEvent = (value) => {
    dispatch(game.actions.addUser(value));
  }

  return (
    <Background>
      <MainText>{userName}</MainText>
      <Form onSubmit={handleSubmit}>

        <TextInput 
          type='text' 
          placeholder='input name' 
          onChange={event => onChangeEvent(event.target.value)}>
        </TextInput>

        <Button 
            type='submit'>
            Start the game
          </Button>
      </Form>
    
    </Background>
  );
};

export default StartControls;