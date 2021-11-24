import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextStep } from "reducers/game";

//göra så att theStart inte syns

const TheGame = () => {
  const game = useSelector((store) => store.game.currentPosition);
  const dispatch = useDispatch();

  return (
    <>
      {game?.actions?.map((item) => (
        <p key={item.description}>{item.description}</p>
      ))}
      {game?.actions?.map((item) => (
        <button
          key={item.direction}
          onClick={() => {
            dispatch(nextStep(item.direction));
          }}
        >
          {item.direction}
        </button>
      ))}
    </>
  );
};

export default TheGame;
