import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { game } from '../reducers/game';
import { chooseDirection, StartGame } from '../reducers/fetch';

const GameControls = () => {
  const dispatch = useDispatch();
  const userName = useSelector((store) => store.game.name)
  const gameState = useSelector((state) => state.game.game)
  const gameArray = useSelector((state) => state.game.game.actions)

  const onChooseDirection = (direction) => {
    dispatch(chooseDirection(userName, direction))
  }


  return (
    <div>
      <p>{gameState.description}</p>
      
      {gameArray && (gameArray.map((item, index, array) => {
          return (
            <button onClick={() => onChooseDirection(item.direction)} key={index}>
              {item.direction}
            </button>
            )
          })
        )
      }
    </div>
  )
}

export default GameControls;