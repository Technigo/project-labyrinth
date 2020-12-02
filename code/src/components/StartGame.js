import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { startFetch, actionFetch } from "../reducers/gameFetch";

import { TextContainer } from '../styling/styling';


export const StartGame = () => {
  const gameDetails = useSelector((store) => store.gameState.gameDetails);
  const dispatch = useDispatch();

  const onGameStart = () => {
    dispatch(startFetch());
  };

  const onNextMove = (direction) => {
    dispatch(actionFetch(gameDetails.userName, direction));
  };

  return (
    <TextContainer>
      {!gameDetails.coordinates && (
        <>
          <div>Welcome {gameDetails.userName}! </div>
          <button onClick={onGameStart}>Start game</button>
        </>
      )}

      {gameDetails.coordinates &&
        gameDetails.coordinates !==
          "1,3" && (
            <>
              <p>{gameDetails.description}</p>
              <p>Possible actions:</p>
              {gameDetails.actions.map((action, index) => (
                <div key={index}>
                  <p>{action.description}</p>
                  <button onClick={() => onNextMove(action.direction)}>
                    Move {action.direction}
                  </button>
                </div>
              ))}
            </>
          )}
      {gameDetails.coordinates === "1,3" && (
        <>
          <p>{gameDetails.description}</p>
          <p>Congratulations, you finished the game!</p>
        </>
      )}
    </TextContainer>
  );
};
