import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { startFetch, actionFetch } from "../reducers/gameFetch";

export const StartGame = () => {
  // const userName = useSelector((store) => store.gameState.userName);
  const gameState = useSelector((store) => store.gameState.gameDetails);
  const dispatch = useDispatch();

  const onGameStart = () => {
    dispatch(startFetch());
  };

  const onNextMove = (direction) => {
    dispatch(actionFetch(gameState.userName, direction));
  };

  return (
    <>
      {!gameState.coordinates && (
        <>
          <div>Welcome {gameState.userName}! </div>
          <button onClick={onGameStart}>Start game</button>
        </>
      )}

      {gameState.coordinates &&
        gameState.coordinates !==
          "1,3" && (
            <>
              <p>{gameState.description}</p>
              <p>Possible actions:</p>
              {gameState.actions.map((action, index) => (
                <div key={index}>
                  <p>{action.description}</p>
                  <button onClick={() => onNextMove(action.direction)}>
                    Move {action.direction}
                  </button>
                </div>
              ))}
            </>
          )}
      {gameState.coordinates === "1,3" && (
        <>
          <p>{gameState.description}</p>
          <p>Congratulations, you finished the game!</p>
        </>
      )}
    </>
  );
};
