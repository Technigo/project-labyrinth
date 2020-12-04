//Here we fetch the data from the 'action' URL
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { gameDirection } from "../reducers/reusable";
import { GameOver } from "./GameOver";
import { game } from "../reducers/game";
import { Button } from "../lib/Buttons";

import light from "../img/light.jpg";
import cavern from "../img/cavern.jpg";
import bridge from "../img/bridge.jpg";
import stone from "../img/stone.jpg";
import robot from "../img/robot.jpg";
import chest from "../img/chest.jpg";
import content from "../img/content.jpg";

import styled from "styled-components/macro";

export const GameRoom = () => {
  const dispatch = useDispatch();

  const gameData = useSelector((state) => state.game.game);
  const userName = useSelector((state) => state.game.name);
  const arrayGame = useSelector((state) => state.game.game.actions);
  const historyGame = useSelector((state) => state.game.history);

  const onGameDirection = (direction) => {
    dispatch(gameDirection(userName, direction));
  };

  const onHistoryBack = () => {
    dispatch(game.actions.historyGoBack());
  };

  const gameImages = () => {
    if (gameData.coordinates === "0,0") {
      return cavern;
    } else if (gameData.coordinates === "0,1") {
      return robot;
    } else if (gameData.coordinates === "0,2") {
      return chest;
    } else if (gameData.coordinates === "0,3") {
      return light;
    } else if (gameData.coordinates === "1,0") {
      return bridge;
    } else if (gameData.coordinates === "1,1") {
      return stone;
    } else if (gameData.coordinates === "1,3") {
      return content;
    }
  };

  const endGame = () => {
    if (gameData.coordinates === "1,3") {
      return <GameOver />;
    } else {
      return <BackButton
      type="button"
      onClick={onHistoryBack}
      disabled={historyGame.length === 1}
      background={historyGame.length === 1 ? "grey" : "rgb(32, 8, 191)"}
      title={"back"}/>;
    }
  };

  return (
    <GameImage style={{ backgroundImage: `url(${gameImages()})` }}>
      <Overlay />
      <Description>{gameData.description}</Description>
      <Description>CHOOSE DIRECTION:</Description>
      <Wrapper>
        {arrayGame &&
          arrayGame.map((item, index) => {

            return (
              <Container key={item.description}>
                <Button
                  onClick={() => onGameDirection(item.direction)}
                  title={`GO ${item.direction}`}
                />
                <p>{item.description}</p>
              </Container>
            );
          })}
      </Wrapper>
      {endGame()}
    </GameImage>
  );
};

const GameImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10% 10% 10% 10%;
  text-align: center;
  background-size: cover;
  background-position: center;
  max-width: 1000px;
  margin: auto;
  position: relative;
  min-height: 100vh;

  @media (min-width: 768px) {
    margin-top: 0;
    min-height: initial;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 0.4;
  z-index: 1;
`

const Description = styled.h3`
  justify-content: center;
  z-index: 2;
`;

const Wrapper = styled.div`
  z-index: 2;
  border: dashed 2px #ffffff;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const Container = styled.div`
  padding: 10px;
  font-size: 18px;
  //border: dashed 2px #00ff7f;
  //background-color: rgba(0, 0, 0, 0.253);
  z-index: 2;

  @media (min-width: 768px) {
    min-width: 50%;
  }
`;

const BackButton = styled(Button)`
  font-size: 30px;
  color: white;
  margin-top: 20px;
  border: solid 1px #ffffff;

  &:hover {
    background-color: rgb(255, 255, 255, 0.4);
  }

  @media (min-width: 768px) {
    max-width: 200px;
    font-size: 32px;
  }
`;
