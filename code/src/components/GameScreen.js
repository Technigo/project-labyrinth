import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import gameFetch, { secondFetch } from "../reducers/gameFetch";
import Loading from "./Loading";
import EndScreen from "./EndScreen";

const GameScreen = () => {
  // const gameScreen = useSelector((store) => store.gameFetch);
  const gameDescription = useSelector((store) => store.gameFetch.description);
  const gameActions = useSelector((store) => store.gameFetch.actions);
  //const actionsLength = gameActions.length;
  const userName = useSelector((store) => store.gameFetch.userName);
  const loading = useSelector((store) => store.gameFetch.loading);
  const coordinates = useSelector((store) => store.gameFetch.coordinates);

  console.log("gameActions: ", gameActions);
  console.log("gameDescription: ", gameDescription);

  const dispatch = useDispatch();

  const onMove = (direction) => {
    dispatch(secondFetch(userName, direction));
  };

  return (
    <>
      {loading && <Loading />}
      {!loading && (
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
            {coordinates === "1,3" && <EndScreen />}
          </div>
        </div>
      )}
    </>
  );
};

export default GameScreen;
