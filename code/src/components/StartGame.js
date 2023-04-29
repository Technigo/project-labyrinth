/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { game, labyrinth } from 'reducers/labyrinth';
import styled from 'styled-components/macro';

const StyledForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`
const StyledInput = styled.input`
font-family: 'Ubuntu Mono', monospace;
background-color: #FEF5BD;
border: none;
padding: 7px 5px 7px 10px;
outline: none;
font-size: 1rem;
color: #000;
margin: 5vh 0 7vh 0;
width: 145px;
border-radius: 5px;
@media (min-width: 668px) {
  font-size: 1.5rem;
  width: 210px;
}
`
const StyledBtn = styled.button`
font-family: 'JetBrains Mono', monospace;
background-color: #F8E152;
border: none;
border-radius: 5px;
padding: 5px 10px;
font-size: 1rem;
cursor: pointer;
&:hover {
  box-shadow: 2px 2px 5px rgba(254, 245, 189, 0.5), -2px -2px 5px rgba(254, 245, 189, 0.5);
}
@media (min-width: 668px) {
  font-size: 1.5rem;
}
`
export const StartGame = () => {
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();

  const InputUserName = (event) => {
    event.preventDefault();
    dispatch(game.actions.setUserName(userName));
    dispatch(labyrinth());
  }

  return (
    <StyledForm onSubmit={InputUserName}>
      <label htmlFor="user-input">
        <StyledInput id="user-input" type="text" placeholder="Name..." onChange={(event) => setUserName(event.target.value)} value={userName} required />
      </label>
      <StyledBtn type="submit">Enter Labyrinth</StyledBtn>
    </StyledForm>
  )
}