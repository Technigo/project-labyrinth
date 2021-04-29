import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { continueGame } from '../reducers/games'


const GameScreen = () => {
  const actions = useSelector(store => store.games.actions)
  // const description = useSelector(store => store.games.games.description)
  const dispatch = useDispatch()

  const onButtonclick = (item) => {
    dispatch(continueGame(item))
    console.log(item)
  }

  console.log(actions)
  return (
    <div> 
      <h3>This is a description: {actions.description}</h3> 
      {actions.actions.map(item => (
        <button onClick={() => onButtonclick(item)}>{item.direction}</button>
      ))}
    
      
    </div>

  )
}

export default GameScreen