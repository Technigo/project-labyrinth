import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {generateNextMove} from '../reducers/mazegame'
// import mazegame from '../reducers/mazegame'

const GamePage = () => {
  const gameStatus = useSelector(store => store.mazegame.gameStatus)
  const actions = useSelector(store => store.mazegame.gameStatus.actions)
  const userName = useSelector(store => store.mazegame.userName)
  const dispatch = useDispatch()

  console.log('ACTION', actions)

  return(
    <>
      <p>{gameStatus.description}</p>
      {actions.map(direction => 
        <div key={direction.description}>
          <div>{direction.description}</div>
          <button
            onClick={() => dispatch(generateNextMove(userName, direction.direction))}
          >{direction.direction}
          </button>
        </div> 
      )}
    </>
    )
}

export default GamePage