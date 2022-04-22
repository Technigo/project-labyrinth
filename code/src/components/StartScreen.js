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
  background-image: url(../images/image.jpg);
  background-size: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const TextContainer = styled.div`
  background-color: rgb(255, 255, 255, 0.5);
  padding: 25px;
  border-radius: 6px;
  max-width: 80%;
`;

const StartButton = styled.button`
  margin-top: 10px;
  font-size: 10px;
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
      <TextContainer>
        <p>Welcome to the Labyrinth!</p>
        <div className="nes-field">
          <label htmlFor="name_field">Please enter your name.</label>
          <input
            className="nes-input"
            type="text"
            id="name_field"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder="Type here"
          />
        </div>
        <StartButton
          className="nes-btn is-primary"
          type="submit"
          onClick={onUsernameSet}
          disabled={inputValue.length === 0}
        >
          Start the game!
        </StartButton>
      </TextContainer>
    </StartContainer>
  );
};

export default StartScreen;
