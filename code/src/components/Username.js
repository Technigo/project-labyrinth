import React, { useState } from "react";
import { game, fetchGame } from "../reducers/game";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto;
  width: 275px;
`;

const Label = styled.label`
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  margin-top: 20px;
`;

const StartButton = styled.button`
  margin-top: 20px;
  width: 100px;
  border-radius: 6px;
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
  );
};

export default Username;
