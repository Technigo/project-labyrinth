import React from "react";
import { useDispatch } from "react-redux";
import { fetchGameInstructions } from "reducers/game";

import { useSelector } from "react-redux";

export const MainGame = () => {
  const dispatch = useDispatch();

  const gameList = useSelector((store) => store.game.gameList);

  return (
    <div>
      <h1>{gameList.description}</h1>

      {gameList.actions.map((item, index) => (
        <>
          <p>{item.description}</p>
          <button
            key={item.direction}
            onClick={() =>
              dispatch(fetchGameInstructions({ direction: item.direction }))
            }
          >
            {item.direction}
          </button>
        </>
      ))}
    </div>
  );
};
