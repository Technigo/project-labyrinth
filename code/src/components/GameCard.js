import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGame } from "reducers/game";

const GameCard = () => {
  const game = useSelector((store) => store.game.gameList);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Let the games begin!</h2>
      <button
        type="button"
        onClick={() => {
          dispatch(fetchGame());
        }}
      >
        Start
      </button>
      {game?.actions?.map((item) => (
        <p key={item.description}>{item.description}</p>
      ))}
      {game?.actions?.map((item) => (
        <button
          key={item.direction}
          onClick={() => {
            dispatch();
          }}
        >
          {item.direction}
        </button>
      ))}
    </>
  );
};

export default GameCard;
