import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import "nes.css/css/nes.min.css";

import Action from './Action'
import ActionButton from './ActionButton'
import RestartButton from './RestartButton';

const GameScreen = () => {
  const gameState = useSelector(store => store.game.gameState)
  const [chosenDirection, setChosenDirection] = useState("")

  const chosenAction = gameState.actions.filter(action => action.direction === chosenDirection)

  const setImagePath = () => {
    if (gameState.coordinates === "0,0") return "./assets/archway.svg"
    else if (gameState.coordinates === "1,0") return "./assets/bridge.svg"
    else if (gameState.coordinates === "1,1") return "./assets/path.svg"
    else if (gameState.coordinates === "0,1") return "./assets/gear.svg"
    else if (gameState.coordinates === "0,2") return "./assets/gears.svg"
    else if (gameState.coordinates === "0,3") return "./assets/scroll.svg"
    else return "./assets/sun.svg"
  }

  return (
    <div className="nes-container is-rounded is-dark">

      <p><img src={setImagePath()} className="icon" alt="icon" />{gameState.description}</p>

      {gameState.coordinates !== "1,3" && <p>What do you do?</p>}
      {gameState.coordinates === "1,3" && <RestartButton />}

      {gameState.actions.map(action =>
        <Action
          direction={action.direction}
          key={action.description}
          chosenDirection={chosenDirection}
          setChosenDirection={setChosenDirection} />)}

      {chosenAction[0] !== undefined && <p className="description">{chosenAction[0].description}</p>}

      {chosenDirection && <ActionButton chosenDirection={chosenDirection} />}
    </div >
  )
}
export default GameScreen