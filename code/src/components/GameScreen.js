import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import gameFetch from "../reducers/gameFetch";

const GameScreen = () => {
  // const gameScreen = useSelector((store) => store.gameFetch);
  const gameDescription = useSelector((store) => store.gameFetch.description);
  const gameActions = useSelector((store) => store.gameFetch.actions);
  const actionsLength = gameActions.length;

  console.log("gameActions: ", gameActions);
  console.log("gameDescription: ", gameDescription);

  return (
    <>
      <div>
        {gameActions.map((choice) => (
          <div key={choice.direction}>
            <button>{choice.direction}</button>
            <p>{choice.description}</p>
          </div>
        ))}

        {actionsLength === 0 && <h3>{gameDescription}</h3>}
      </div>
    </>
  );
};

export default GameScreen;
