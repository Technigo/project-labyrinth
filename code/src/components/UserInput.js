import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { game } from "reducers/game";
import styled from "styled-components/macro";

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
    setUsername(""); // Clearing the input
  };

  return (
    <TopSection>
      <MainHeading>Welcome to the Labyrinth room</MainHeading>
      <SubHeading>Enter username below</SubHeading>
      <Form onSubmit={handleSubmit}>
        <Label>
          <InputField
            type="text"
            placeholder="Username"
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
        </Label>
        <Button buttonDisabled={!username} buttonType="submit" text="Add" />
      </Form>
    </TopSection>
  );
};

const TopSection = styled.section`
  border: 2px solid #e8e8e8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainHeading = styled.h1`
  text-align: center;
  font-size: 24px;
`;

const SubHeading = styled.h2`
  font-size: 16px;
`;

const Form = styled.form``;

const Label = styled.label``;

const InputField = styled.input`
  height: 40px;
  width: 140px;
  border: none;
  border-bottom: 2px dotted #e8e8e8;
  margin-right: 5px;
  font-size: 18px;

  @media (min-width: 768px) {
    width: 340px;
  }
`;
