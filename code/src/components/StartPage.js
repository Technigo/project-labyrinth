/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { game, fetchStart } from 'reducers/game';
import styled from 'styled-components'

import { GameCard } from './StyledComponents'

const StartPage = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(game.actions.setUsername(username))
    dispatch(fetchStart());
  };

  return (
    <GameCard 
      title="Welcome Adventurer!" 
      secondaryTitle="Pleace give us your name to enter the doungeon" 
      >
    <form onSubmit={onFormSubmit}>
      <label>
        <input 
        id="user-input" 
        type="text" 
        onChange={(e) => setUsername(e.target.value)} 
        placeholder="Name, here goes young padawan"
        required=" "
        autoComplete="off" 
        />
      </label>
      <StartBtn type="submit">Begin</StartBtn> 
    </form>
    
    </GameCard>
  )
}

export default StartPage;

// might be best to style the button and input here, and form - 
// it seems complicated to style them the other way

// needs an if statement for the start screen when loading 

const StartBtn = styled.button`
border-style: outset;
  height: 60px;
  width: 80px;
  margin: 20px;
  padding: 20px;
  display: inline-block;
  background-color: palegreen;
  border-width: 5px;
  box-sizing: border-box;
  border-radius: 5%;
`