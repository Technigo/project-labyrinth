import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";

import { startGame } from "../reducers/game";
import { LoadingIndicator } from "../components/LoadingIndicator";
import { CompassAnimation } from "../components/CompassAnimation";
import Button from "../components/Button";

const TextContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 25px;
`

const StartGame = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const name = useSelector((state) => state.game.userName);
  const loading = useSelector((state) => state.ui.loading);

  const handleStartGame = () => {
    dispatch(startGame());
    navigate("/game");
  };

  return (
    <TextContainer>
      {loading ? <LoadingIndicator /> : <CompassAnimation width= '300px' height= '300px'/>}
      <p>Hello {name}, welcome to the labyrinth! Search your way to the light</p>
      <p>To move from a place to another. Click the button with "east", "west", "south" or "north"</p>
      <p>To examine where you are read the descriptions.</p>
      <p>Enjoy this little adventure and explore the labyrinth.</p>
      <p>Good Luck {name} !</p>
      <Button type="submit" onClick={() => handleStartGame()}>
        Click
      </Button>
    </TextContainer>
  );
};

export default StartGame;
