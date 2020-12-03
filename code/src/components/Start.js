import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

import { game } from "../reducers/game";
import { startGameFetch } from "../reducers/reusable";

import { CenteredScreen, Button, Text } from '../lib/Styling';

const InsertUsername = styled.input`
  padding: 10px;
  font-size: inherit;
  font-family: inherit;
`

const StartText = styled(Text)`
  margin: 40px 0;
  font-size: 20px;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`

export const Start = () => {
  const [username, setUsername] = useState("");
  const stateUsername = useSelector((state) => state.game.username);
  const dispatch = useDispatch();

  const onUsernameChange = (event) => {
    if (username === '') {
      alert('Please choose a name!')
    } else {
      dispatch(game.actions.enterUsername(username));
      dispatch(startGameFetch(username));
      setUsername("");
      event.preventDefault();
    }
  };

  return (
    <>
      {!stateUsername && (
        <CenteredScreen>
          <StartText>
            Welcome to the labyrinth!
          </StartText>
          <Text>
            What's your name?
          </Text>
          <InsertUsername
            type="text"
            placeholder="Choose username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          ></InsertUsername>
          <StartText>
            Ready to play?
          </StartText>
          <Button onClick={onUsernameChange}>
            Start the game
          </Button>
        </CenteredScreen>
      )}
    </>
  );
};
