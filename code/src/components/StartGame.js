import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { startFetch, actionFetch } from "../reducers/gameFetch";

import { TextContainer, Button, Text } from '../styling/styling';


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
          <Text>Welcome {userName}! </Text>
          <Button onClick={onGameStart}>Start game</Button>
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
                  <Button onClick={() => onNextMove(action.direction)}>
                    Move {action.direction}
                  </Button>
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



