import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGame } from "../reducers/game";

export const Game = () => {
  const game = useSelector((store) => store.game.gameList);
  const dispatch = useDispatch();

  return (
    <>
      <h1> Labyrinth </h1>
      <button
        onClick={() => {
          dispatch(fetchGame());
        }}
      >
        FETCH GAME
      </button>
      {game.map((item) => (
        <p key={item.description}>{item.description}</p>
      ))}
    </>
  );
};
