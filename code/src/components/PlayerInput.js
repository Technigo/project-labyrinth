import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { labyrinth } from "reducers/labyrinth";

import { InputContainer } from "styling/GlobalStyle";
import { StartButton } from "styling/lib/Buttons";

export const PlayerInput = ({ setStartButtonVisible }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");

  const handleNameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmitName = (event) => {
    event.preventDefault();
    dispatch(labyrinth.actions.setUsername(username));
    setStartButtonVisible(true);
  };

  return (
    <InputContainer>
      <Label>
        Enter your name
        <TextInput
          type="text"
          value={username}
          onChange={(event) => handleNameChange(event)}
        />
      </Label>
      <StartButton type="submit" onClick={(event) => handleSubmitName(event)}>
        Inner Trip Center
      </StartButton>
    </InputContainer>
  );
};

const TextInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: none;
  background-color: none;
  margin-bottom: 50px;
  margin-top: 50px;
  border-bottom: 2px solid #fbc490;
  width: 100%;
  font-family: "Kaushan Script";

  &:focus {
    outline: none;
  }
`;

const Label = styled.label`
  display: box;
  align-items: center;
  justify-content: center;
  font-family: "Kaushan Script";
`;
