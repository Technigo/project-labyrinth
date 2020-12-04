import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Form, TextInput, Background, Gif, StartHeader } from './styling';
import { game } from '../reducers/game';
import { StartGame } from '../reducers/fetch';
import Footer from './Footer';

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
    <>
      <Background>
        <StartHeader>Labyrinth</StartHeader>
        <Gif src="https://media.giphy.com/media/ACLCA6bvwBEvC/giphy.gif" alt="labyrinth"></Gif>
        <Form onSubmit={handleSubmit}>
          <TextInput 
            required
            type='text' 
            placeholder='Input username...' 
            onChange={event => onChangeEvent(event.target.value)}>
          </TextInput>
          <Button type='submit'>
            Enter the labyrinth
          </Button>
        </Form>
      </Background>
      <Footer />
    </>
  );
};

export default StartControls;