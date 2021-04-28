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
  //   dispatch(games.actions.setDirection(event.target.value))
  // }console.log(onChoseDirecton)
  // console.log(eachDirection)
  return(
    <div>
      {description}
      <div>
      {moves? moves.map(move => (
        <button 
        key={move.description}
        value={move.direction}
        onClick={(event) => onChooseDirection(event)}>
          {move.direction}
        </button>
      ))
      : <></>}
      </div>
    </div>
  )
}

export default GameScreen