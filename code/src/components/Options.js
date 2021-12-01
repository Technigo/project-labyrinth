import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { continueTheGame } from "../reducers/game.js";
import EndScreen from "./EndScreen.js";

const GameWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  background-color: rgb(235, 216, 18, 0.9);
  gap: 10px;
  color: black;
`;

const Description = styled.p`
  width: 100%;
  text-align: center;
`;
const GameOptions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const OptionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: ;
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

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: black;
`;

const Options = () => {
  const store = useSelector((store) => store.game);
  const dispatch = useDispatch();

  if (Object.keys(store.currentPosition).length !== 0) {
    return (
      <GameWrapper>
        <Description>{store.currentPosition.description}</Description>
        <GameOptions>
          {store.currentPosition.actions.map((move) => {
            return (
              <OptionsContainer key={move.direction}>
                <Description>{move.description}</Description>
                <Button
                  onClick={() => dispatch(continueTheGame(move.direction))}
                >
                  {move.direction}
                </Button>
                <Line />
              </OptionsContainer>
            );
          })}
        </GameOptions>
        {store.currentPosition.actions.length === 0 && <EndScreen />}
      </GameWrapper>
    );
  }
  return <></>;
};

export default Options;
