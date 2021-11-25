import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/macro";

import { game, fetchGame } from "../reducers/game";

const OuterForm = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(rgb(4, 4, 4), rgba(234, 231, 231, 0.568)),
    url("/assets/labyrinth.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto;
  width: 275px;

  @media (min-width: 768px) {
    margin: 250px auto;
    width: 450px;
  }
`;

const Heading = styled.h1`
  font-size: 30px;
  color: white;
  padding-bottom: 60px;
  font-family: "Noto Sans KR", sans-serif;

  @media (min-width: 768px) {
    font-size: 50px;
  }
`;

const Label = styled.label`
  color: white;
  text-align: center;
  font-size: 20px;
  font-weight: 900;
`;

const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  width: 100%;
  margin-top: 20px;
  font-size: 20px;

  &:focus {
    border: 2px solid red;
  }
  &:before {
    border: 2px solid black;
  }
  &:after {
    border: 2px solid red;
  }
`;

const Button = styled.button`
  font-size: 18px;
  margin-top: 20px;
  width: 120px;
  border-radius: 6px;
  padding: 4px;
  background-color: black;
  color: white;
`;

const Username = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();

  const onSetUserName = (userName) => {
    dispatch(game.actions.addUserName(userName));
    dispatch(fetchGame(userName));
  };

  return (
    <OuterForm>
      <Form>
        <Heading>메이즈 테크니고</Heading>
        <Label>
          Choose your character
          <Input
            required
            placeholder="Type your username"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
        </Label>
        <Button onClick={() => onSetUserName(userName)}>Start Game</Button>
      </Form>
    </OuterForm>
  );
};

export default Username;
