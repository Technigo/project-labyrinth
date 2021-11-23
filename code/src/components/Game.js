import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { continueGame } from "../reducers/game";
// import { StartGame } from "./StartGame";

export const Game = () => {
  const gameList = useSelector((store) => store.game.gameList);
  //   const username = useSelector((store) => store.game.username);
  const actions = useSelector((store) => store.game.gameList.actions);
  const dispatch = useDispatch();
  const onButtonClick = (type, direction) => {
    dispatch(continueGame(type, direction));
  };

  return (
    <>
      <div>
        <p>Coordinates: {gameList.coordinates}</p>
        <h1>{gameList.description}</h1>
      </div>

      {/* {actions.map((action) => (
        <div key={action.description}>
          <button onClick={() => onButtonClick(action.type, action.direction)}>
            Move {action.direction}
          </button>
        </div>
      ))} */}
    </>
  );
};

// {gameList.coordinates < 0 && <StartGame />}
// {gameList.coordinates === 0.0 &&
