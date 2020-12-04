import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { generateActionMove } from '../reducers/fetch'
import { Button } from '../lib/Button'

export const GameContainer = () => {
  const dispatch = useDispatch()

  const game = useSelector((store) => store.game.gameinfo)

  const onActionMoveGenerate = (direction, type) => {
    dispatch(generateActionMove(direction, type))
  }

  return (
    <div className="direction-container">
      {game.actions.map((item) => (
        <div key={Math.random()}>
          <p className="description-text">{item.description}</p>
          <Button 
            onButtonClick={()=> onActionMoveGenerate(item.type, item.direction)} text={`Go ${item.direction}`}
          />
        </div>
      ))}
    </div>
  )
}
