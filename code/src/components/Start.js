import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

import { game } from "../reducers/game";
import { startGameFetch } from "../reducers/reusable";

import { Centered, Button } from '../lib/Styling';

const InsertUsername = styled.input`
  padding: 1vw 2vw;
  font-size: 1.5vw;
  margin: 1vw;
  font-family: 'Quicksand', sans-serif;
`

const StartText = styled.p`
  margin: 2vw;
  font-size: 1.5vw;
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
        <Centered>
          <StartText>
            Welcome to the labyrinth! What's your name?
          </StartText>
          <InsertUsername
            type="text"
            placeholder="Choose a username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          ></InsertUsername>
          <StartText>
            Ready to play?
          </StartText>
          <Button onClick={onUsernameChange}>
            Start the game
          </Button>
        </Centered>
      )}
    </>
  );
};
