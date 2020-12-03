import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { game } from "reducers/game";
import styled from "styled-components/macro";

import { Button } from "lib/Button";
import { getStartGame } from "../reducers/reusable";

export const UserInput = () => {
  const [name, setName] = useState("");
  const username = useSelector(store => store.game.username);

  const dispatch = useDispatch();

  // We get this error when using the code below.
  // The 'handleGameStart' function makes the dependencies of useEffect Hook
  // (at line 27) change on every render. Move it inside the useEffect callback.
  // Alternatively, wrap the 'handleGameStart' definition into its own useCallback() Hook

  // const handleGameStart = (username) => {
  //   dispatch(getStartGame(username));
  // };

  useEffect(() => {
    if (username) {
      // handleGameStart(username);
      dispatch(getStartGame(username));
    }
  }, [dispatch, username]);

  const handleSubmit = event => {
    event.preventDefault();
    console.log(name);
    dispatch(
      game.actions.addUserName({
        username: name,
      })
    );
    setName(""); // Clearing the input
  };

  return (
    <TopSection>
      <MainHeading>Welcome to the Labyrinth</MainHeading>
      <SubHeading>Submit username and begin</SubHeading>
      <Form onSubmit={handleSubmit}>
        <Label>
          <InputField
            type="text"
            placeholder="Enter your username"
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </Label>
        <Button buttonDisabled={!name} buttonType="submit" text="Start Game" />
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
  margin: 5px 0;

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
