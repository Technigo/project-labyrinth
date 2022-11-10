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
      <label htmlFor="author-input">PROVIDE YOUR NAME, PLEASE...
        <input id="author-input" type="text" onChange={(event) => setUserName(event.target.value)} />
      </label>
      <button type="submit">START THE MAZE!</button>
    </Form>

  )
};

export default UserNameInput;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  label {
    width: 100%;
    word-wrap: break-word;   
  }
  input[type = text] {
    background-color: transparent;
    border: none;
    color: green;
  }
  input[type = text]:focus {
    background-color: transparent;
    border: none;
    box-shadow: none;
  }  
`
