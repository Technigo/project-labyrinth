import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/macro";
import { screen } from "reducers/screen";
import { gameSteps } from "reducers/gameSteps";

export const UsernameScreen = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const usernameInvalid = username.length < 4;

  return (
    <UsernameContainer>
      <div></div>
      <Header>The Labyrinth</Header>
      <InputTextSpanButton>
        <span>
          Please enter your username (minimum 4 characters) and start the game!
        </span>
        <UsernameInput
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Username"
        ></UsernameInput>
        <span></span>
        <UsernameButton
          disabled={usernameInvalid}
          style={{
            color: usernameInvalid ? "lightgray" : "white",
            borderBottomColor: usernameInvalid ? "lightgray" : "white",
          }}
          onClick={() => {
            console.log(username);
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
  justify-content: flex-end;
  grid-template-rows: 1fr auto auto;
  flex-direction: column;
  letter-spacing: 1px;
  line-height: 22px;
`;

const Header = styled.h1`
  margin: 0;
  letter-spacing: 2px;
  text-align: center;
  text-shadow: -1px -1px 0 #638270, 1px -1px 0 #638270, -1px 1px 0 #638270,
    1px 1px 0 #638270;
  margin-bottom: 20px;
`;

const InputTextSpanButton = styled.div`
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 20px;
  row-gap: 10px;
  min-height: 250px;
`;

const UsernameButton = styled.button`
  font-family: "Raleway", sans-serif;
  background-color: transparent;
  padding: 10px;
  border: none;
  color: white;
  border-bottom: white 1px solid;
  font-size: 20px;
`;

const UsernameInput = styled.input`
  font-family: "Raleway", sans-serif;
  background-color: white;
  border: none;
  border-bottom: white 1px solid;
  padding: 10px;
  &::placeholder {
    color: black;
    letter-spacing: 2px;
    font-size: 16px;
    font-weight: 300;
    padding: 10px;
  }
`;
