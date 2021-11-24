import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchInitialData, fetchNavigationData } from "../reducers/quest";
import { LoadingIndicator } from "./LoadingIndicator";
import { GameOver } from "./GameOver";
import { quest } from "reducers/quest";
import { useBackground } from "./useBackground";
import { Container } from "./Container";

export const QuestBody = () => {
  const questMoves = useSelector((store) => store.quest.items);
  // const player = useSelector((store) => store.quest.player);
  const isLoading = useSelector((store) => store.ui.loading);

  const currentQuest = questMoves[questMoves.length - 1];
  console.log("current quest", currentQuest);
  const currentCoordinates = currentQuest?.coordinates;
  const dispatch = useDispatch();

  const onButtonClick = () => {
    dispatch(quest.actions.resetGame());
  };

  useBackground(currentCoordinates);

  useEffect(() => {
    dispatch(fetchInitialData());
  }, [dispatch]);

  if (isLoading || !currentQuest) {
    return <LoadingIndicator />;
  }

  if (currentQuest.actions.length === 0) {
    return <GameOver />;
  }

  return (
    <>
      <Container>
        <p>{currentQuest.description}</p>

        {currentQuest.actions.map((action) => (
          <div key={action.direction}>
            <p>{action.description}</p>
            <button
              onClick={() => {
                dispatch(fetchNavigationData({ type: action.type, direction: action.direction }));
              }}
            >
              Go {action.direction}
            </button>
          </div>
        ))}
        <p>
          Current coordinates:
          <span className="highlight" aria-label="decoration">
            {" "}
            {currentQuest.coordinates}
          </span>
        </p>

        <button onClick={onButtonClick}>Play Again</button>
      </Container>
    </>
  );
};
