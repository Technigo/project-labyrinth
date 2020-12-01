//Here we fetch the data from the 'action' URL
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { gameDirection } from "../reducers/reusable";
// import {GameOver} from "./GameOver"

export const GameRoom = () => {
  const dispatch = useDispatch();

  const gameData = useSelector((state) => state.game.game);
  const userName = useSelector((store) => store.game.name);
  const arrayGame = useSelector((state) => state.game.game.actions);
  // const statusGame = useSelector((state) => state.game.game.status)

  const onGameDirection = (direction) => {
    dispatch(gameDirection(userName, direction));
  };

  // const onHistoryBack = () => {
  //   dispatch(game.actions.historyGoBack());
  // };

  // if (actions.length ===0) {
  //   return (
  //     <div>  
  //       <GameOver/>
  //   <h2>{statusGame.description}</h2>
  //     </div>
    
  //   )
  // }
  return (
    <div>
      <p>{gameData.description}</p>
      {arrayGame &&
        arrayGame.map((item, index) => {
          return (
            <button onClick={() => onGameDirection(item.direction)} key={index}>
              {item.direction}
            </button>
          );
        })}
    </div>
  );
};
