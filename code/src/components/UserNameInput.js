/* eslint-disable react/jsx-boolean-value */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import labyrinth, { startLabyrinth } from 'reducers/labyrinth';
import TypeWriterEffect from 'react-typewriter-effect';
import styled from 'styled-components/macro';
import maze from 'assets/maze.png'

const UserNameInput = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(labyrinth.actions.setUser(userName));
    dispatch(startLabyrinth());
  };
  return (
    <Form onSubmit={(event) => onFormSubmit(event)}>
      <img src={maze} alt="labyrinth" />
      <Title>&lt; MAZE /&gt;</Title>
      <Label htmlFor="author-input">
        <TypeWriterEffect
          startDelay={100}
          cursorColor="#00cf00"
          text="PROVIDE YOUR NAME, PLEASE..."
          typeSpeed={70}
          hideCursorAfterText={true} />
        <input id="author-input" type="text" onChange={(event) => setUserName(event.target.value)} />
      </Label>
      <button hidden={!userName} type="submit">START THE MAZE!</button>
    </Form>
  )
};

export default UserNameInput;

const Title = styled.h2`
  font-size: 50px;
`

const Form = styled.form`
  margin: 50% auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
  h1 {
    font-size: 16px;
  }
  button {
    width: fit-content;
  }
  label {
    width: 100%;
    word-wrap: break-word;   
  }
  input[type = text] {
    background-color: transparent;
    border: none;
    border-bottom: 2px dashed #00cf00;
    padding: 5px;
    box-shadow: none;
    color: white;
    outline: none;
    font-family: 'VT323', monospace;
    text-transform: uppercase;
  }
`
const Label = styled.label`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
  width: 100%;
  word-wrap: break-word;   
`
