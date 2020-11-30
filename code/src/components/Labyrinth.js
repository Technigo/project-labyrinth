import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Loading } from "./Loading";
import { Button } from "../lib/Button";
import { selectNextStep } from "../reducers/reusable";

export const Labyrinth = () => {
  const gameData = useSelector(store => store.game.currentGameState.gameData);
  const username = useSelector(store => store.game.username);
  const isLoading = useSelector(store => store.ui.isLoading);

  const dispatch = useDispatch();

  const handleNextStep = (type, direction) => {
    dispatch(selectNextStep(username, type, direction));
  };

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <>
        <div>
          <p>{gameData.coordinates}</p>
          <p>{gameData.description}</p>
          <p>{gameData.direction}</p>
        </div>
        <div>
          {gameData.actions.map(item => (
            <div>
              <Button onClick={() => handleNextStep(item.type, item.direction)}>
                Head {item.direction}
              </Button>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </>
    );
  }
};
