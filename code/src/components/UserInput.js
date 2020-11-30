import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { game } from "reducers/game";
import styled from "styled-components";

import { Button } from "lib/Button";

export const UserInput = () => {
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    console.log(username);
    dispatch(
      game.actions.addUserName({
        username: username,
      })
    );
    console.log(username);
    setUsername(""); // Clearing the input
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Button disabled={!username} type="submit">
          Add
        </Button>
        <Label>
          <InputField
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
        </Label>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 10px 0;
  border-bottom: 2px solid #e8e8e8;
`;

const Form = styled.form``;

const Label = styled.label``;

const InputField = styled.input`
  height: 40px;
  width: 140px;
  border: none;
  border-bottom: 2px dotted #e8e8e8;
  margin-left: 10px;
  font-size: 18px;

  @media (min-width: 768px) {
    width: 340px;
  }
`;
