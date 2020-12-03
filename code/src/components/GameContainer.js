import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { generateActionMove } from '../reducers/fetch'

export const GameContainer = () => {
  const dispatch = useDispatch()

  const game = useSelector((store) => store.game.gameinfo)
  console.log(game)

  const onActionMoveGenerate = (direction, type) => {
    dispatch(generateActionMove(direction, type))
  }



  return (
    <div>
      <h2>{game.description}</h2>
      {console.log(game.description)}
      {game.actions.map((item) => (
        <div>
          <p>{item.description}</p>
          <button onClick={()=> onActionMoveGenerate(item.type, item.direction)}>Go {item.direction}</button> 
        </div>
      ))}
    </div>
  );
};

//If action [] than make refresh button appear