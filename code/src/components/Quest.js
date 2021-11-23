import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInitialData, fetchNavigationData } from "../reducers/quest";
import { LoadingIndicator } from "./LoadingIndicator";
import { GameOver } from "./GameOver";

export const Quest = () => {
  const quest = useSelector((store) => store.quest.items);
  const player = useSelector((store) => store.quest.player);
  const currentQuest = quest[quest.length - 1];

  console.log("quest", quest);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInitialData());
  }, [dispatch]);

  if (!currentQuest) {
    return <LoadingIndicator />;
  }

  if (currentQuest.actions.length === 0) {
    return <GameOver />;
  }

  return (
    <>
      <h1>
        <span className="highlight" aria-label="decoration">
          {player}'s
        </span>{" "}
        quest.
      </h1>
      <div>
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
      </div>
    </>
  );
};
