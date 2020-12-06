import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";

import { game } from "../reducers/game";
import { startGameFetch } from "../reducers/reusable";

import { Fireworks } from "./Fireworks";
import { CenteredScreen, Button, StartText, Text } from "../lib/Styling";

const CenteredStartScreen = styled(CenteredScreen)`
  position: relative;
`;

const InsertUsername = styled.input`
  padding: 10px;
  font-size: inherit;
  font-family: inherit;
`

export const Start = () => {
  const [username, setUsername] = useState("");
  const stateUsername = useSelector((state) => state.game.username);
  const dispatch = useDispatch();

  const onUsernameChange = (event) => {
    if (username === "") {
      alert("Please choose a name!")
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
        <CenteredStartScreen>
          <Fireworks />
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
        </CenteredStartScreen>
      )}
    </>
  );
};
