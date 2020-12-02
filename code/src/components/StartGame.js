import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { startFetch } from "../reducers/gameFetch";
import { gameState } from "../reducers/gameState";
import { Divider, Group, UserInput, Button, Text } from "../styling/styling";

export const StartGame = () => {
  const [nameInput, setNameInput] = useState("");
  const gameDetails = useSelector((store) => store.gameState.gameDetails);
  const dispatch = useDispatch();

  const onGameStart = () => {
    dispatch(gameState.actions.setUserName(nameInput));
    dispatch(startFetch(nameInput));
  };

  return (
    <>
      {!gameDetails.coordinates && (
        <>
          <Text>Welcome to Labyrinth!</Text>
          <Divider />
          <p>Do you think you can find your way out?</p>
          <p>Type in your name and press start.</p>
          <Group>
            <UserInput
              className="userName"
              type="text"
              value={nameInput}
              onChange={(event) => setNameInput(event.target.value)}
            ></UserInput>
            <Button onClick={onGameStart}>Start game</Button>
          </Group>
        </>
      )}
    </>
  );
};
