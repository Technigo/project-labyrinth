import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Loading from "./Loading";
import { continueGame } from "../reducers/gameFetch"

const Game = () => {
  const loading = useSelector((store) => store.gameFetch.loading);
  const gameDescription = useSelector((store) => store.gameFetch.description);
  const coordinates = useSelector((store) => store.gameFetch.coordinates);
  const actions = useSelector((store) => store.gameFetch.actions);
  const userName = useDispatch((store) => store.gameFetch.userName)

  const dispatch = useDispatch()

  const onMove = (direction) => {
    dispatch(continueGame(userName, direction));
  }

  return loading ? <Loading /> : 
  <div>
    <p>{gameDescription}</p>
    {actions.map((choice, index) => (
      <div key={index}>
        <p>{choice.description}</p> 
        <button>{choice.direction}</button>
      </div>
    ))}
    
  </div>
  
};

export default Game;
