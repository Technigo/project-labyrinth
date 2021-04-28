import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import "nes.css/css/nes.min.css";

import Action from './Action'
import ActionButton from './ActionButton'

const GameScreen = () => {
  const gameState = useSelector(store => store.game.gameState)
  const [chosenDirection, setChosenDirection] = useState("")

  const chosenAction = gameState.actions.filter(action => action.direction === chosenDirection)

  return (
    <div className="nes-container is-rounded is-dark">
      <p>{gameState.description}</p>

      <div className="action-container">
        <div className="direction-container">
          {gameState.actions.map(action =>
            <Action
              direction={action.direction}
              key={action.description}
              chosenDirection={chosenDirection}
              setChosenDirection={setChosenDirection} />)}
        </div>

        {chosenAction[0] !== undefined && <p className="description">{chosenAction[0].description}</p>}
      </div>

      <ActionButton chosenDirection={chosenDirection} />
    </div >
  )
}
export default GameScreen