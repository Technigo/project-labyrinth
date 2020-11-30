import React from 'react';
import { useSelector } from 'react-redux';
import { game } from '../reducers/game';

import StartControls from './StartControls';

const GameContainer = () => {
  const gameState = useSelector((state) => state.game.game)
  const gamePlayer = useSelector((state) => state.game.name)

  // Plocka ut arrayen
  const gameArray = useSelector((state) => state.game.game.actions)

  return (
    <div>
      <p>{gameState.description}</p>
      
       {gameArray && (gameArray.map(item => {
      
          return (
            <button>
              {item.direction}
            </button>
            )
          })
        )
}

      <StartControls />
    </div>
  )
}

export default GameContainer;