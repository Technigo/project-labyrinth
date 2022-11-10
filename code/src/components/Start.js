/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react-hooks/exhaustive-deps */
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
  // if (currentLocation.isLoading) return <Loading />
  return (
    <LocationWrapper>
      <h2>
            In your search for enlightenment you have come across a peculiar structure.
            A veil covers an entrance.
      </h2>
      <p>
              Speak your name to enter!
            (Write your name and hit enter, to enter!)
      </p>

      <Form onSubmit={(event) => onNameSubmit(event)}>
        <label>
          <TextInput
            type="text"
            placeholder="What is your name?"
            onChange={(event) => setUserName(event.target.value)} />
        </label>
        <Button type="submit">Enter</Button>
      </Form>
    </LocationWrapper>

  )
}

export default Start;

const TextInput = styled.input`
  height: 2rem;
  text-align: center;
`

const Form = styled.form`
  margin-top: 2rem;
`