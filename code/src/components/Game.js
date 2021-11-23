import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { continueGame } from "../reducers/game";
import { StartGame } from "./StartGame";

export const Game = () => {
  const gameList = useSelector((store) => store.game.gameList);
  //   const username = useSelector((store) => store.game.username);
  const dispatch = useDispatch();

  return (
    <>
      {gameList === null && <StartGame />}

      <div>
        <p>Coordinates: {gameList.coordinates}</p>
        <h1>{gameList.description}</h1>
      </div>
      <div>
        {/* {gameList.actions.map((item) => (
        <div key={item.description}>
          <button>Move {item.direction}</button>
        </div>
      ))} */}
      </div>
    </>
  );
};

// {gameList.coordinates < 0 && <StartGame />}
// {gameList.coordinates === 0.0 &&
