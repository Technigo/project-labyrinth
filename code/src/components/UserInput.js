import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import quotes, { generateQuote } from 'reducers/quotes';
// import styled from 'styled-components/macro';
// import {  } from '../styles/mainStyles';

const UserInput = () => {
  const [userNameInputValue, setUserNameInputValue] = useState('');

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(quotes.actions.setUser(userNameInputValue));
    dispatch(generateQuote())
    console.log(userNameInputValue)
  }

  return (
    <form onSubmit={(event) => onFormSubmit(event)}>
      <label htmlFor="user-input">
        Provide name:
        <input id="user-input" type="text" onChange={(event) => setUserNameInputValue(event.target.value)} />
      </label>
      <button type="submit">search</button>
    </form>
  )
}

export default UserInput;
