import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";

import { game, fetchGame } from "../reducers/game";

const OuterForm = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(rgb(3, 3, 3), rgba(168, 231, 231, 0.568)),
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
`;

const Label = styled.label`
  color: white;
  text-align: center;
  font-size: 30px;
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

const StartButton = styled.button`
  font-size: 15px;
  margin-top: 20px;
  width: 110px;
  border-radius: 6px;
  padding: 2px;
  background-color: black;
  color: white;
`;

const Username = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const story = useSelector((store) => store.game.moves);
  console.log(story);

  const onSetUserName = (userName) => {
    dispatch(game.actions.addUserName(userName));
    dispatch(fetchGame(userName));
  };

  return (
    <OuterForm>
      <Form>
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
        <StartButton onClick={() => onSetUserName(userName)}>
          Start Game
        </StartButton>
      </Form>
    </OuterForm>
  );
};

export default Username;
