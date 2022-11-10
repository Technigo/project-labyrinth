import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import labyrinth, { startLabyrinth } from 'reducers/labyrinth';
import styled from 'styled-components/macro';

const UserNameInput = () => {
  const dispatch = useDispatch()
  const [userName, setUserName] = useState('');
  console.log('userName', userName)
  console.log('setUserName', setUserName)

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(labyrinth.actions.setUser(userName));
    dispatch(startLabyrinth());
  }

  return (
    <Form onSubmit={(event) => onFormSubmit(event)}>
      <Label htmlFor="author-input">PROVIDE YOUR NAME, PLEASE...
        <input id="author-input" type="text" onChange={(event) => setUserName(event.target.value)} />
      </Label>
      <button type="submit">START THE MAZE!</button>
    </Form>
  )
};

export default UserNameInput;

const Form = styled.form`
  margin: 50% auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
  label {
    width: 100%;
    word-wrap: break-word;   
  }
  input[type = text] {
    background-color: transparent;
    border: none;
    border-bottom: 2px dashed #00cf00;
    box-shadow: none;
    color: white;
    outline: none;
  }
  input[type = text]:focus {
    background-color: transparent;
    /* border-bottom: 2px solid #00cf00; */
    box-shadow: none;
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
