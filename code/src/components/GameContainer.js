import React from 'react';
import { useSelector } from 'react-redux';
import { game } from '../reducers/game';

import StartControls from './StartControls';

const GameContainer = () => {
  const gameState = useSelector((state) => state.game.game)
  return (
    <div>
      <p>{gameState.description}</p>
      
      
      {/* {state.actions.map(item => {
          return (
            <button>{item.direction}</button>
            )
          })
        }
   */}


      <StartControls />
    </div>
  )
}

export default GameContainer;