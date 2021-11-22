import React from "react";
import { useDispatch } from "react-redux";
import { fetchGameInstructions, game } from "reducers/game";

import { useSelector } from "react-redux";

export const MainGame = () => {
  const dispatch = useDispatch();

  const game = useSelector((store) => store.game);
  console.log(game.gameList.actions.map((item) => console.log(item)));
  console.log(game.gameList.actions.map((item) => console.log(item)));

  return (
    <div>
      <h1>{game.gameList.description}</h1>

      {game.gameList.length > 0
        ? game.gameList.actions.map(
            (item) =>
              console.log("object") || (
                <>
                  <p>item.description</p>
                  <button
                    key={item.direction}
                    onClick={() =>
                      dispatch(fetchGameInstructions(item.direction))
                    }
                  >
                    {item.direction}
                  </button>
                </>
              )
          )
        : null}
    </div>
  );
};
