import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { game, generateGame } from "../reducers/game";

export const StartPage = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(game.actions.setUsername(username));
    dispatch(generateGame(username));
    setUsername("");
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <h1>Hey</h1>
      <TextInput
        required
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Button</button>
    </Form>
  );
};

const Form = styled.form``;
const TextInput = styled.input``;
