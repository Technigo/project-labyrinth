/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import labyrinth, { startGame } from 'reducers/labyrinth'
import styled from 'styled-components';
import Loading from './Loading';
import { LocationWrapper, Button } from './reusableStyles';

const Start = () => {
  const currentLocation = useSelector((store) => store.labyrinth);
  const [userName, setUserName] = useState('')

  const dispatch = useDispatch();

  const onNameSubmit = (event) => {
    event.preventDefault();
    dispatch(labyrinth.actions.setUser(userName));
    dispatch(startGame())
  }
  if (currentLocation.isLoading) return <Loading />
  return (
    <LocationWrapper>
      <h2>
        You have been pondering over a complex concept all day and
        your search for enlightenment continues as you are sound asleep.
        You come across a peculiar structure. A veil covers an entrance.
      </h2>
      <h3>Speak your name to enter!</h3>

      <Form onSubmit={(event) => onNameSubmit(event)}>
        <label>
          <TextInput
            type="text"
            placeholder="What is your name?"
            onChange={(event) => setUserName(event.target.value)} />
        </label>
        <EnterButton type="submit">Enter</EnterButton>
      </Form>
    </LocationWrapper>

  )
}

export default Start;

const TextInput = styled.input`
  height: 2.5rem;
  width: 12rem;
  text-align: center;
  font-family: 'Calligraffitti', cursive;
  font-size: 18px;
`

const Form = styled.form`
  margin-top: 2rem;
`

const EnterButton = styled(Button)`
margin: 1rem auto 0;
`