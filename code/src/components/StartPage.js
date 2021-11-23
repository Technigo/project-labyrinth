import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { startGame } from "reducers/game";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
`;

const Header = styled.h1`
  font-size: 20px;
`;

const SmallHeader = styled.h2`
  font-size: 15px;
`;

const Input = styled.input`
  height: 20px;
  width: 250px;
`;

export const StartPage = () => {
  const dispatch = useDispatch();
  // const username = useSelector(store => store.game.username)

  const [input, setInput] = useState("");

  const onStartGame = () => {
    dispatch(startGame(input));
  };

  return (
    <div>
      <Header>Let's play Labyrinth!</Header>
      <SmallHeader>What's your name?</SmallHeader>
      <Input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button disabled={input === ""} onClick={onStartGame}>
        Start game!
      </button>
    </div>
  );
};
