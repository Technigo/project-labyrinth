/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { game, fetchStart } from 'reducers/game';
import styled from 'styled-components/macro'

import { GameCard } from './StyledComponents'
import mountain from '../assets/mountain.jpeg'

const StartPage = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(game.actions.setUsername(username))
    dispatch(fetchStart());
  };
  
return (
  <Background>
  <GameCard 
    title="Welcome Adventurer!" 
    secondaryTitle="Pleace give us your name to enter the doungeon" 
    >
  <form onSubmit={onFormSubmit}>
    <label>
      <Input 
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
  </Background>
)
}

export default StartPage;

// might be best to style the button and input here, and form - 
// it seems complicated to style them the other way

// needs an if statement for the start screen when loading 

export const Background = styled.div`
background-image: url(${mountain});
background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
`

const Input = styled.input`
 margin: 2vh 2vw;
    padding: 1rem;
  font-size: 13px; 
  width: 30vw;
  background-color: inherit;
  display: inline-block;
    transition: all 0.3s;
  font-family: "Raleway", sans-serif;
  border: none;
  box-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #fff1a8, 
0 0 82px #fff1a8, 0 0 92px #fff1a8, 0 0 102px #fff1a8, 0 0 151px #fff1a8;
  /* 2px 3px 4px #f7f5e1; */
  border-radius: 5px;
  color: #000;

  @media (min-width: 768px) {
    font-size: 15px;
    width: 25vw;
  }
`

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
