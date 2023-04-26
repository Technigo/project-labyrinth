import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { labyrinth, startLabyrinth } from 'reducers/labyrinth'

export const WelcomeScreen = () => {
  const [userName, setUsername] = useState('');
  const dispatch = useDispatch();
  // const username = useSelector((store) => store.username);
  // const description = useSelector((store) => store.description);
  // const moveDirection = useSelector((store) => store.moves[0].direction);
  // const moveDescription = useSelector((store) => store.moves[0].description);

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
  height: 100vh;
`;

const WelcomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin:15px;
`;

const Input = styled.input`display:flex;`

// const Button = styled.input`display:flex;`
