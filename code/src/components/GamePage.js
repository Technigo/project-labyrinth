import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { game, generateMove } from "../reducers/game";
import { Loading } from "./Loading";

import styled from "styled-components";
import "nes.css/css/nes.min.css";

export const GamePage = () => {
  const gameUsername = useSelector((store) => store.game.username);
  const gameActions = useSelector((store) => store.game.currentStep.actions);
  const currentStep = useSelector((store) => store.game.currentStep);
  const history = useSelector((store) => store.game.history);
  const isLoading = useSelector((store) => store.ui.isLoading);

  console.log(isLoading);

  const dispatch = useDispatch();

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <Main>
        <GameText>{currentStep.description}</GameText>
        <p>Which way will you go?</p>
        {gameActions.map((action) => (
          <DiscriptionContainer
            key={action.description}
            className="nes-container is-rounded"
          >
            <Button
              className="nes-btn is-primary"
              onClick={() =>
                dispatch(generateMove(gameUsername, action.direction))
              }
            >
              {action.direction}
            </Button>

            <TextInBox className="nes-text">{action.description}</TextInBox>
          </DiscriptionContainer>
        ))}

        <Button
          disabled={!history.length}
          onClick={() => dispatch(game.actions.setPreviousStep())}
          className="nes-btn is-warning"
        >
          Go back
        </Button>
      </Main>
    );
  }
};

const Main = styled.div``;

const Button = styled.button`
  width: 200px;
`;

const GameText = styled.p`
  font-size: 18px;
`;

const TextInBox = styled.p`
  font-size: 12px;
  color: #ffc300;
`;

const DiscriptionContainer = styled.div`
  display: flex;
`;
