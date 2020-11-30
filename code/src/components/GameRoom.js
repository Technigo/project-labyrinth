//Here we fetch the data from the 'action' URL
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {game} from '../reducers/game'

export const GameRoom = () => {

  const dispatch = useDispatch()
  
  const gameData = useSelector((store) => store.game.game)
  const addUsername = useSelector((store) => store.game.name)
  const array = useSelector((store) => store.game.game.actions)
  
  console.log(gameData)
  
  return (
    <div>
    <p>{gameData.description}</p>
  	<button>test</button>
    </div>
  )
}