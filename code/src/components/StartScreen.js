import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import "nes.css/css/nes.min.css";

import game, { generateGameData } from "../reducers/game";

const StartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  padding: 15px;
`;

const StartButton = styled.button`
  margin-top: 10px;
`;

const StartScreen = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const onUsernameSet = () => {
    dispatch(game.actions.setUsername(inputValue));
    dispatch(generateGameData());
  };

  return (
    <StartContainer>
      <p>Welcome to the Labyrinth!</p>
      <div className="nes-field">
        <label for="name_field">Please enter your name.</label>
        <input
          className="nes-input"
          type="text"
          id="name_field"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
      </div>
      <StartButton type="submit" onClick={onUsernameSet}>
        Start the game!
      </StartButton>
    </StartContainer>
  );
};

export default StartScreen;
