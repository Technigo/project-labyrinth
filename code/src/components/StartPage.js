import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { startGame } from "reducers/game";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 300px;
  padding: 10px;
  margin: 0 auto;
`;

const Header = styled.h1`
  font-size: 20px;
`;

const SmallHeader = styled.h2`
  font-size: 15px;
`;

const Input = styled.input`
  height: 30px;
  width: 250px;
  border-radius: 6px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 6px;
`;

export const StartPage = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  // const username = useSelector(store => store.game.username)

  const [input, setInput] = useState("");

  const onStartGame = () => {
    navigate("/game");
    dispatch(startGame(input));
  };

  const onKeyDown = e => {
    if (e.key === 'Enter') {
      onStartGame()
    }
  }

  return (
    <div>
      <Container>
        <Header>Let's play Labyrinth!</Header>
        <SmallHeader>What's your name?</SmallHeader>
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
        />
        <Button disabled={input === ""} onClick={onStartGame} >
          Start game!
        </Button>
      </Container>
    </div>
  );
};
