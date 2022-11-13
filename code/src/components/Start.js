/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
// reducers
import { startGame, labyrinth } from 'reducers/labyrinth';
// components and styling
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
        <InnerWrapperStart>
          <StartHeader>Welcome!</StartHeader>
          <StartDescription>Insert a random string of letters
            to enter this mysterious maze:
          </StartDescription>
          <StartDetails>(Something like "ekfoepwv", go wild)</StartDetails>
          <InputField
            type="text"
            placeholder="Something unique, just like you! <3"
            value={usernameInputValue}
            required
            onChange={(event) => setUsernameInputValue(event.target.value)} />
          <Btnstyling
            start
            type="button"
            onClick={onFormSubmit}>
            START
          </Btnstyling>
        </InnerWrapperStart>
      </Background>
    );
  } else {
    return <Labyrinth />
  }
};

const Background = styled.div`
  background-image: url(${castle});
  width: 100vw;
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const InnerWrapperStart = styled.div`
width: 70%;
display: flex;
flex-direction: column;
align-items: center;
background-color: rgba(247, 204, 172, 0.7);
padding: 10px;
border-radius: 20px;
border: 2px solid #3A3845;
@media (min-width: 668px) and (max-width: 1024px) {
  width: 70%;
}
@media (min-width: 1025px) {
  width: 80%;
}
`

const StartHeader = styled.h1`
font-family: 'Fondamento', cursive;
font-size: 27px;
padding: 15px;

@media (min-width: 668px) and (max-width: 1024px) {
font-size: 35px;
}
@media (min-width: 1025px) {
font-size: 45px;
}
`

const StartDescription = styled.h2`
font-family: 'Montserrat', sans-serif;
font-size: 20px;
text-align: center;
padding-bottom: 20px;

@media (min-width: 668px) and (max-width: 1024px) {
font-size: 25px;
}
@media (min-width: 1025px) {
font-size: 28px;
}
`

const StartDetails = styled.h4`
font-family: 'Montserrat', sans-serif;
font-size: 15px;
font-weight: 300;
padding-bottom: 20px;

@media (min-width: 668px) and (max-width: 1024px) {
font-size: 20px;
}
@media (min-width: 1025px) {
font-size: 22px;
}
`

const InputField = styled.input`
width: 90%;
padding: 5px;
border-radius: 5px;
`
