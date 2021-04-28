import React from 'react'
import {useSelector, useDispatch} from 'react-redux';

import games, { generateQuestion } from '../reducers/games'

const GameScreen = () => {
  const description = useSelector(store => store.games.description)
  const moves = useSelector(store => store.games.moves)
  const dispatch = useDispatch()

  const onChooseDirection = (event) => {
    dispatch(games.actions.setDirection(event.target.value))
    dispatch(generateQuestion())
  }

  return(
    <div>
      {description}
      <div>
      {moves? moves.map(move => (
        <div key={move.description}>
        <p>{move.description}</p>
        <button 
        value={move.direction}
        onClick={(event) => onChooseDirection(event)}>
          {move.direction}
        </button>
        </div>
      ))
      : <></>}
      </div>
    </div>
  )
}

export default GameScreen