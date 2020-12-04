import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { startFetch } from "../reducers/gameFetch";
import { gameState } from "../reducers/gameState";
import { Divider, Group, UserInput, StartButton, Heading } from "../styling/styling";

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
          <Heading>Welcome to Labyrinth!</Heading>
          <Divider />
          <p>Do you think you can find your way out?</p>
          <p>Type in your name and press start.</p>
          <Group>
            <UserInput
              className="userName"
              type="text"
              value={nameInput}
              placeholder="Enter player name..."
              onChange={(event) => setNameInput(event.target.value)}
            ></UserInput>
            <StartButton onClick={onGameStart}>Start game</StartButton>
          </Group>
        </>
      )}
    </>
  );
};
