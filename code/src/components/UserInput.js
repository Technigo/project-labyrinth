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
      <MainHeading>Welcome to the Labyrinth</MainHeading>
      <SubHeading>Submit username and begin</SubHeading>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 100%;
  max-width: 530px;
`;

const MainHeading = styled.h1`
  text-align: center;
  font-size: 24px;

  @media (min-width: 768px) {
    font-size: 36px;
    margin: 10px 0;
  }
`;

const SubHeading = styled.h2`
  font-size: 16px;

  @media (min-width: 768px) {
    font-size: 20px;
    margin: 10px 0;
  }
`;

const Form = styled.form`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;

  @media (min-width: 1024px) {
    margin: 10px 0;
  }
`;

const Label = styled.label``;

const InputField = styled.input`
  height: 40px;
  width: 160px;
  border: none;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  margin-right: 5px;
  font-size: 18px;
  background: transparent;
  color: #fff;
  padding: 0 3px;
  ::placeholder {
    color: #e8e8e8;
    font-size: 14px;
  }

  @media (min-width: 768px) {
    width: 260px;
  }
`;
