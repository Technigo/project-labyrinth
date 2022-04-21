import React from "react";
import { useSelector } from "react-redux";
import Typewriter from "typewriter-effect";
import Actions from "./Actions";
import GameOver from "./GameOver";
import { Header } from "styledelements/styled";
import styled from "styled-components";

const Game = () => {
  const positionDescription = useSelector(
    (store) => store.game.position.description
  );
  const actions = useSelector((store) => store.game.position.actions);
  const isLoading = useSelector((store) => store.game.loading);

  return (
    <GameWrapper>
      <Header>The Game</Header>
      {isLoading && (
        <Typewriter
          key={positionDescription}
          onInit={(typewriter) => {
            typewriter.changeDelay(60).typeString("Loading...").start();
          }}
        />
      )}
      {!isLoading && (
        <>
          {actions.length > 0 && (
            <>
              <Typewriter
                key={positionDescription}
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(30)
                    .typeString(
                      `${positionDescription}${"\n"}${actions
                        .map((desc) => desc.description)
                        .join("\n")
                        .concat(". Where will you go?")}`
                    )
                    .start();
                }}
              />
              <ButtonWrapper>
                {actions.map((action, index) => (
                  <Actions key={index} action={action} />
                ))}
              </ButtonWrapper>
            </>
          )}

          {actions.length === 0 && (
            <EndGameTextWrapper>
              {" "}
              <Typewriter
                key={positionDescription}
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(30)
                    .typeString(
                      `${positionDescription}${"\n"}${actions
                        .map((desc) => desc.description)
                        .join("\n")}`
                    )
                    .start();
                }}
              />
              <GameOver />
            </EndGameTextWrapper>
          )}
        </>
      )}
    </GameWrapper>
  );
};

export default Game;

const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin: 100px 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  gap: 20px;
`;

const EndGameTextWrapper = styled.div`
  text-align: center;
`;
