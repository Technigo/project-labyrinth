//Here we fetch the data from the 'action' URL
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { gameDirection } from "../reducers/reusable";

export const GameRoom = () => {
  const dispatch = useDispatch();

  const gameData = useSelector((store) => store.game.game);
  const userName = useSelector((store) => store.game.name);
  const arrayGame = useSelector((store) => store.game.game.actions);

  const onGameDirection = (direction) => {
    dispatch(gameDirection(userName, direction));
  };

  return (
    <div>
      <p>{gameData.description}</p>
      {arrayGame &&
        arrayGame.map((item, index) => {
          return (
            <button onClick={() => onGameDirection(item.direction)} key={index}>
              {item.direction}
            </button>
          );
        })}
    </div>
  );
};
