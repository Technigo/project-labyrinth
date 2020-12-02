//Here we fetch the data from the 'action' URL
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { gameDirection } from "../reducers/reusable";
import {GameOver} from "./GameOver"
import {game} from '../reducers/game'
export const GameRoom = () => {
  const dispatch = useDispatch();

  const gameData = useSelector((state) => state.game.game);
  const userName = useSelector((state) => state.game.name);
  const arrayGame = useSelector((state) => state.game.game.actions);
  const historyGame = useSelector((state) => state.game.history)
  const statusGame = useSelector((state) => state.game.game.status)

  const onGameDirection = (direction) => {
    dispatch(gameDirection(userName, direction));
  };

  const onHistoryBack = () => {
    dispatch(game.actions.historyGoBack());
  };

  if (game.actions.length === 0) {
    return (
      <div>  
        <GameOver/>
    <h2>{statusGame.description}</h2>
      </div>
    
    ) 
  }
  return (
    <>
       <p>{gameData.description}</p>
      {arrayGame &&
        
        arrayGame.map((item, index) => {
          return (
            <div>
              <button onClick={() => onGameDirection(item.direction)} key={index}>
                {item.direction}
              </button>
              <p>{item.description}</p>
            </div>
          );
        })}   
        <button type="button" onClick={onHistoryBack} disabled={historyGame.length === 1}>back</button>
   
    </>
  );
}
