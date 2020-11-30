//Here we fetch the data from the 'action' URL
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {game} from '../reducers/game'

export const GameRoom = () => {

  const dispatch = useDispatch()
  
  const gameData = useSelector((store) => store.game.game)
  const addUsername = useSelector((store) => store.game.name)
  const arrayGame = useSelector((store) => store.game.game.actions)
  
  console.log(gameData)
  
  return (
    <div>
    <p>{gameData.description}</p>
    {arrayGame && (arrayGame.map((item, index, array) => {
      return (
        	<button onClick={item.direction}>{item.direction}</button>
      )
    }))}
  
    </div>
  )
}