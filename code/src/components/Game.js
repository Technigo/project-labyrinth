import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Loading from "./Loading";
import { continueGame } from "../reducers/gameFetch"
import End from "./End"

const Game = () => {
  const loading = useSelector((store) => store.gameFetch.loading);
  const gameDescription = useSelector((store) => store.gameFetch.description);
  const coordinates = useSelector((store) => store.gameFetch.coordinates);
  const gameActions = useSelector((store) => store.gameFetch.actions);
  const userName = useSelector((store) => store.gameFetch.userName)

  const dispatch = useDispatch()

  const onMove = (direction) => {
    dispatch(continueGame(userName, direction));
  }

  return (
    <>
    {loading && <Loading />} 
    {coordinates === "1,3" && <End gameDescription={gameDescription} />}
    {!loading && coordinates !== "1,3" && (
      <div>
      <p>{gameDescription}</p>
      {gameActions.map((choice, index) => (
        <div key={index}>
          <p>{choice.description}</p> 
          <button onClick={() => onMove(choice.direction)}>{choice.direction}</button>
        </div>
      ))}
    </div>
    )}
  
  </>
  )
};

export default Game;
