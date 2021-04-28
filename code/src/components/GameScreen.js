import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import gameFetch, { secondFetch } from "../reducers/gameFetch";

const GameScreen = () => {
  // const gameScreen = useSelector((store) => store.gameFetch);
  const gameDescription = useSelector((store) => store.gameFetch.description);
  const gameActions = useSelector((store) => store.gameFetch.actions);
  const actionsLength = gameActions.length;
  const userName = useSelector((store) => store.gameFetch.userName);

  console.log("gameActions: ", gameActions);
  console.log("gameDescription: ", gameDescription);

  const dispatch = useDispatch();

  const onMove = (direction) => {
    dispatch(secondFetch(userName, direction));
  };

  const onRestart = () => {
    dispatch(gameFetch.actions.setName(null));
  };

  return (
    <div className='game-container'>
      <h3>{gameDescription}</h3>
      <div>
        {gameActions.map((choice) => (
          <div key={choice.direction}>
            <p>{choice.description}</p>
            <button onClick={() => onMove(choice.direction)}>
              {choice.direction}
            </button>
          </div>
        ))}
        {actionsLength === 0 && (
          <>
            <p>
              Congratulations {userName}, you made it through the labyrinth!"
            </p>
            <button onClick={onRestart}>Restart</button>
          </>
        )}
      </div>
    </div>
  );
};

export default GameScreen;
