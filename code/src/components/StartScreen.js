import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/macro";

import games, { startGame } from "../reducers/games";

const Container = styled.div`
  background-color: black;
  color: white;
  padding: 15px;
  display: flex;
  width: auto;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

const Button = styled.button`
  background-color: #fbafdd;
  border: 2px solid black;
  border-radius: 50%;
  text-align: center;
  padding: 30px;
  margin: 30px;
  height: 80px;
`;

const Input = styled.input`
  background-color: #fbafdd;
  border-radius: 50%;
  border: 2px dotted slategray;
  padding: 30px;
  margin: 30px;
  height: 80px;
`;

const StartScreen = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const onUserNameSet = () => {
    dispatch(games.actions.setUserName(inputValue));
    dispatch(startGame(inputValue));
  };

  return (
    <>
      <Container>
        <h1>Welcome to our splendid game</h1>
        <h2>Type your name to enter the labyrinth...</h2>
        <Input
          type="text"
          placeholder="Enter your name to start"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          required
        />
        <Button onClick={onUserNameSet}>Start the game!</Button>
      </Container>
    </>
  );
};

export default StartScreen;
