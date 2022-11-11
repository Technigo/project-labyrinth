/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGame, labyrinth } from 'reducers/labyrinth';
import styled from 'styled-components/macro';
import { InnerWrapper } from 'Styling/GlobalStyles';
import { Loading } from './Loading';
import Labyrinth from './Labyrinth';
import castle from './castle.jpg';
import { Btnstyling } from './Buttons';

export const Start = () => {
  const [usernameInputValue, setUsernameInputValue] = useState('')
  const loading = useSelector((store) => store.labyrinth.loading)
  const userEntered = useSelector((store) => store.labyrinth.username)
  const dispatch = useDispatch()

  const onFormSubmit = (event) => {
    event.preventDefault()
    dispatch(labyrinth.actions.setUsername(usernameInputValue));
    console.log(usernameInputValue)
    dispatch(startGame());
  };

  if (loading) {
    return <Loading />;
  }
  if (!userEntered) {
    return (
      <Background>
        <InnerWrapper>
          <h1>Welcome, insert a random string of letters to start game:</h1>
          <h3>(Something like "ekfoepwv") 🦁 </h3>
          <input
            type="text"
            placeholder="Something unique"
            value={usernameInputValue}
            onChange={(event) => setUsernameInputValue(event.target.value)} />
          <Btnstyling
            start
            type="button"
            onClick={onFormSubmit}>
            START
          </Btnstyling>
        </InnerWrapper>
      </Background>
    );
  } else {
    return <Labyrinth />
  }
};

const Background = styled.div`
  background-image: url(${castle});
  background-size: cover;
  display: flex;
  flex-direction: column;
`;

/* @media(min - width: 668px) and(max - width: 1024px) {
  ;
}
@media(min - width: 1025px) {
  width: 100vw;
  height: 100vh;
} */

