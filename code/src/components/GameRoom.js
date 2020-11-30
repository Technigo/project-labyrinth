//Here we fetch the data from the 'action' URL
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {game} from '../reducers/game'

export const GameRoom = () => {
	//const dispatch = useDispatch()
  const gameData = useSelector((store) => store.game.game)
  
  console.log(gameData)
  
  return (
    <div>
      {/* <p>{gameData.description}</p>
	  {gameData.actions.map((item) => (
      return( <p></p>)
    })} */}
  	<button></button>
    </div>
  )
}