import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from 'styled-components'
import Granim from "react-granim";

import { labyrinth } from "reducers/labyrinth";

import { InputContainer } from "styling/GlobalStyle"
import { StartButton } from "styling/lib/Buttons"

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

  const TextInput = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: none;
    margin-bottom: 40px;
    margin-top: 40px;
    border-bottom: 2px solid #FBC490;
    width: 50%;
      &:focus {
        outline: none;
    }
  `;
  const Label = styled.label`
  display: box;
  align-items: center;
  justify-content: center;
  }
`

  return (
    <InputContainer>
      <Label>
        Who is playing?
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
