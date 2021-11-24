import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/macro";
import { screen } from "reducers/screen";
import { gameSteps } from "reducers/gameSteps";

export const UsernameScreen = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const usernameInvalid = username.length < 4;

  const handleKeyPress = (event) => {
    // -- enter input with enter key
    if (event.key === "Enter") {
      dispatch(gameSteps.actions.setUsername({ username }));
      dispatch(screen.actions.currentScreen({ screen: "game" }));
    }
  };

  return (
    <UsernameContainer>
      <div></div>
      <Header>The Labyrinth</Header>
      <InputTextSpanButton>
        <UserNameInformation>
          Please enter your username (minimum 4 characters) and start the game!
        </UserNameInformation>
        <UsernameInput
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Username"
          onKeyPress={handleKeyPress}
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
  color: white;
  display: flex;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;

  letter-spacing: 1px;
  line-height: 22px;
  @media (min-width: 668px) and (max-width: 1024px) {
    line-height: 30px;
  }
  @media (min-width: 1025px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
  }
`;

const Header = styled.h1`
  margin: 0;
  letter-spacing: 2px;
  text-align: center;
  text-shadow: -1px -1px 0 #638270, 1px -1px 0 #638270, -1px 1px 0 #638270,
    1px 1px 0 #638270;
  margin-bottom: 20px;
  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 45px;
  }
  @media (min-width: 1025px) {
    font-size: 55px;
    margin-bottom: 40px;
  }
`;

const UserNameInformation = styled.span`
  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 20px;
  }
  @media (min-width: 1025px) {
    font-size: 25px;
    line-height: 35px;
  }
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
  @media (min-width: 668px) and (max-width: 1024px) {
    padding: 60px 80px;
  }
  @media (min-width: 1025px) {
    padding: 50px;
    width: 100%;
    min-height: 500px;
  }
`;

const UsernameButton = styled.button`
  font-family: "Raleway", sans-serif;
  background-color: transparent;
  padding: 10px;
  border: none;
  color: white;
  border-bottom: 1px solid;
  font-size: 20px;
  @media (min-width: 668px) and (max-width: 1024px) {
    border-bottom: 2px solid;
    font-size: 24px;
  }
  @media (min-width: 1025px) {
    border-bottom: 2px solid;
    font-size: 30px;
  }
`;

const UsernameInput = styled.input`
  font-family: "Raleway", sans-serif;
  background-color: white;
  border: none;
  padding: 10px;
  &::placeholder {
    color: black;
    letter-spacing: 2px;
    font-size: 16px;
    font-weight: 300;
  }
  @media (min-width: 668px) and (max-width: 1024px) {
    padding: 14px;
    font-size: 18px;

    &::placeholder {
      font-size: 20px;
    }
  }
  @media (min-width: 1025px) {
    padding: 14px;
    font-size: 18px;

    &::placeholder {
      font-size: 20px;
    }
  }
`;
