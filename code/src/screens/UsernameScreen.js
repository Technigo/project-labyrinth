import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/macro";
import { screen } from "reducers/screen";
import { gameSteps } from "reducers/gameSteps";

export const UsernameScreen = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");

  return (
    <UsernameContainer>
      <Header>Labyrinth Game</Header>
      <InputTextSpanButton>
        <span>Please enter your username and start the game!</span>
        <UsernameInput
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Username"
        ></UsernameInput>
        <UsernameButton
          disabled={username.length < 4}
          onClick={() => {
            dispatch(gameSteps.actions.setUsername({ username }));
            dispatch(screen.actions.currentScreen({ screen: "game" }));
          }}
        >
          Start Game
        </UsernameButton>
      </InputTextSpanButton>
    </UsernameContainer>
  );
};

const UsernameContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  color: white;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  flex-direction: column;
`;

const Header = styled.h1`
  margin: 0;
  padding: 10px 10px 0 10px;
`;

const InputTextSpanButton = styled.div`
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 20px;
  row-gap: 10px;
`;

const UsernameInput = styled.input`
  font-family: "Raleway", sans-serif;
`;

const UsernameButton = styled.button`
  font-family: "Raleway", sans-serif;
  background-color: transparent;
  padding: 10px;
  border: none;
  color: white;
  border-bottom: white 1px solid;
`;
