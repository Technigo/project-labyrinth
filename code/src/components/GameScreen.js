import React from 'react'
import { useSelector } from 'react-redux'

import Action from './Action'

const GameScreen = () => {
  const gameState = useSelector(store => store.game.gameState)
  console.log(gameState)
  return (
    <div>
      <p>{gameState.description}</p>
      {gameState.actions.map(action =>
        <Action
          direction={action.direction}
          description={action.description}
          type={action.type}
          key={action.description} />)}
    </div>
  )
}
export default GameScreen