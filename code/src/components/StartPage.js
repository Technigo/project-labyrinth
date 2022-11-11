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
        startTitle="Welcome Adventurer!"
        secondaryTitle="Please give us your name to enter the doungeon.">
        <form onSubmit={onFormSubmit}>
          <label>
            <Input
              id="user-input"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Name"
              required=" "
              autoComplete="off" />
          </label>
          <StartBtn type="submit">Begin</StartBtn>
        </form>
      </GameCard>
    </Background>
  )
}

export default StartPage;

export const Background = styled.div`
  background-image: url(${mountain});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
`
const Input = styled.input`
  margin: 2vh 2vw;
  padding: 9px;
  font-size: 13px; 
  width: 30vw;
  background-color: inherit;
  display: inline-block;
  transition: all 0.3s;
  font-family: 'Uncial Antiqua', cursive;
  border: none;
  box-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #fff1a8, 
   0 0 82px #fff1a8, 0 0 92px #fff1a8, 0 0 102px #fff1a8, 0 0 151px #fff1a8;
  border-radius: 5px;
  color: #000;

  &[type=text]{
    color: rgb(225, 203, 134);
    font-family: 'Uncial Antiqua', cursive;
    font-size: 18px;

    @media (min-width: 768px) {
      font-size: 20px;
    }
  }

  @media (min-width: 768px) {
    font-size: 15px;
    width: 25vw;
  }
`
export const StartBtn = styled.button`
  font-family: 'Uncial Antiqua', cursive;
  font-size: 15px;
  border-style: outset;
  height: 60px;
  width: 80px;
  margin: 20px;
  display: inline-block;
  background-color: #384E73;
  border-width: 5px;
  border-color: #4A6696;  
  border-radius: 5%;
  cursor: pointer;
  box-shadow: 8px 8px 8px #5677B0;
  color: #f7f5e1;
`
