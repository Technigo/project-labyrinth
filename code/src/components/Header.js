import React, { useState } from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { startTheGame } from "../reducers/game.js";

const HeaderWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  background-color: rgb(235, 216, 18, 0.9);
  gap: 10px;
  color: black;
`;

const WelcomeText = styled.h1``;

const UserInput = styled.input`
  width: 250px;
  height: 25px;
`;

const Button = styled.button`
  background-color: black;
  font-size: 12px;
  width: 120px;
  height: 30px;
  border: 0;
  color: white;
  text-transform: uppercase;
`;

const Header = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [displayNameInput, setDisplayNameInput] = useState(true);

  const onStartGame = (name) => {
    dispatch(startTheGame(name));
    setDisplayNameInput(false);
  };
  if (displayNameInput) {
    return (
      <HeaderWrapper>
        <WelcomeText>How shall we call you?</WelcomeText>
        <UserInput
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button disabled={name.length < 2} onClick={() => onStartGame(name)}>
          Play
        </Button>
      </HeaderWrapper>
    );
  }

  return <></>;
};

export default Header;
