import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { labyrinth, startLabyrinth } from 'reducers/labyrinth'

const WelcomeScreen = () => {
  const [userName, setUsername] = useState('');
  const dispatch = useDispatch();

  const onAction = () => {
    dispatch(labyrinth.actions.setUsername(userName))
    dispatch(startLabyrinth())
  }

  return (
    <OuterWrapper>
      <WelcomeWrapper>
        <h1>Welcome player 1 would you like to enter the Labyrinth?</h1>
        <Input
          type="text"
          className="userName"
          placeholder="Please enter your name here"
          required
          onChange={(event) => setUsername(event.target.value)}
          value={userName} />
        <button type="submit" onClick={onAction}> Enter the Labyrinth </button>
      </WelcomeWrapper>
    </OuterWrapper>)
};

const OuterWrapper = styled.section`
  background-image: url('/assets/welcomeScreen.jpg');
  background-repeat: no-repeat;
  background-size: cover;
`;

const WelcomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20%;
`;

const Input = styled.input`display:flex;`

// const Button = styled.input`display:flex;`

export default WelcomeScreen