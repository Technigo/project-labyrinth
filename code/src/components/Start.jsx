import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { game } from "reducers/game";
import { startGame } from "reducers/game";
import styled from "styled-components";
import logo from "../assets/logo1.svg";
import { Header } from "styledelements/styled";

const Start = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const setUser = () => {
    dispatch(game.actions.setUser(username));
    dispatch(startGame());
  };

  return (
    <StartWrapper>
      <Logo src={logo} alt="Game Logo" />
      <div>
        <Header>Welcome to The Game</Header>
        <SubHeader>Please enter your username:</SubHeader>
      </div>
      <TextInput
        type="text"
        onChange={(event) => setUsername(event.target.value)}
        value={username}
        onKeyDown={(e) => e.key === "Enter" && setUser()}
      />
      <StartButton onClick={setUser}>Start Game</StartButton>
    </StartWrapper>
  );
};

export default Start;

const StartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 15px;
  margin: 100px 0;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
`;

const SubHeader = styled.p`
  /* text-align: center; */
  font-weight: 500;
`;

const TextInput = styled.input`
  width: 80%;
  padding: 5px;
  border: 2px solid #04fc0e;
  background-color: black;
  color: #04fc0e;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
`;

const StartButton = styled.button`
  padding: 5px;
  font-weight: 600;
  border: 2px solid #04fc0e;
  background-color: black;
  color: #04fc0e;
  font-size: 18px;
  cursor: pointer;
`;
