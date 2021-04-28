import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import "nes.css/css/nes.min.css";

import Action from './Action'

const GameScreen = () => {
  const gameState = useSelector(store => store.game.gameState)
  const [chosenDirection, setChosenDirection] = useState("")

  const chosenAction = gameState.actions.filter(action => action.direction === chosenDirection)

  return (
    <div>
      <p>{gameState.description}</p>
      {gameState.actions.map(action =>
        <Action
          direction={action.direction}
          description={action.description}
          type={action.type}
          key={action.description}
          chosenDirection={chosenDirection}
          setChosenDirection={setChosenDirection} />)}
      {chosenAction[0] !== undefined && <p>{chosenAction[0].description}</p>}
    </div>
  )
}
export default GameScreen