import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bigText } from './Startpage.styled';

export const Startpage = () => {
  const dispatch = useDispatch() 
  const [input, setInput] = useState('')

  const letsStart = (e) => {
    e.preventDefault();
    dispatch(labyrinth.actions.setUserName(input))
    dispatch(startTheGame())
  }

  return (
    <div>
      <bigText>Welcome text ish</bigText>
      <form onSubmit={letsStart}>
      <input 
      type="text" 
      alt="input" 
      id="usernameInput"
      placeholder="username"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      required />
      <button alt="start button" type="submit">Start Game</button>
      </form>
    </div>
  )
};


