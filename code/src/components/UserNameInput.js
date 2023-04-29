import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { labyrinth, startLabyrinth } from 'reducers/labyrinth';
import TypeWriterEffect from 'react-typewriter-effect';
import styled from 'styled-components/macro';
import potato from 'assets/potato.gif';

export const UserNameInput = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(labyrinth.actions.setUser(userName));
    dispatch(startLabyrinth());
  };
  return (
    <Form onSubmit={(event) => onFormSubmit(event)}>
      <img src={potato} alt="labyrinth" />
      <Title>Help Potato home</Title>
      <Label htmlFor="author-input">
        <TypeWriterEffect
          startDelay={100}
          cursorColor="#00cf00"
          text="WHAT IS YOUR NAME?"
          typeSpeed={70}
          hideCursorAfterText />
        <input
          id="author-input"
          type="text"
          onChange={(event) => setUserName(event.target.value)} />
      </Label>
      <button hidden={!userName} type="submit">
        LETS GO!
      </button>
    </Form>
  );
};

const Title = styled.h2`
  font-size: 50px;
`;

const Form = styled.form`
  margin: 5% auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
  h1 {
    font-size: 20px;
  }
  button {
    width: fit-content;
  }
  label {
    width: 100%;
    word-wrap: break-word;
  }
  input[type='text'] {
    background-color: #fcf1f0;
    border: none;
    border-bottom: 2px dashed #533a32;
    padding: 5px;
    box-shadow: none;
    color: black;
    outline: none;
    font-family: 'VT323', monospace;
    text-transform: uppercase;
    font-size: 20px;
  }
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
  width: 100%;
  word-wrap: break-word;
`;
