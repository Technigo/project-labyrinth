import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import game from "../reducers/game";
import { fetchGame } from "reducers/game";

import {
  GameArea,
  Heading,
  Container,
  Input,
  StyledButton,
  StyledAlert,
} from "styles";

const StartScreen = () => {
  const [nameInput, setNameInput] = useState("");
  const [onAlert, setAlert] = useState(false);

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const onNameSubmit = (nameInput) => {
    dispatch(game.actions.setUserName(nameInput));
    navigate("/GamePlay");
    setNameInput("");
  };

  const onSetNameInput = (event) => {
    setNameInput(event.target.value);
  };

  const onEnter = (event) => {
    if (event.key === "Enter") {
      onNameSubmit(nameInput);
      dispatch(fetchGame(nameInput));
    }
  };

  const onStart = () => {
    if (!nameInput) {
      setAlert(true);
      return;
    }
    onNameSubmit(nameInput);
    dispatch(fetchGame(nameInput));
  };

  return (
    <GameArea>
      <Heading>Let's play a game!</Heading>

      <Container>
        <label>
          <p>Add your username:</p>

          <Input
            type="text"
            value={nameInput}
            placeholder="Enter name here"
            onChange={onSetNameInput}
            onKeyDown={(event) => {
              onEnter(event);
            }}
          />
        </label>
        <StyledButton onClick={() => onStart()}>I'm ready</StyledButton>
      </Container>
      <StyledAlert style={{ visibility: onAlert ? "visible" : "hidden" }}>
        Please enter username
      </StyledAlert>
    </GameArea>
  );
};

export default StartScreen;
