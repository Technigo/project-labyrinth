import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { game, startGame } from '../reducers/game'
import GameElements from './GameElements'

const StartGame = () => {
    const [userName, setUserName] = useState('')
    const gameElements = useSelector(store => store.game.gameElements)
    const dispatch = useDispatch()


    const handleStartGame = (event) => {
        event.preventDefault()
        dispatch(game.actions.setUserName(userName))
        dispatch(startGame(userName))
        setUserName('')  
    }
    console.log(userName)
    
  /*   if (gameElements) {
      return <GameElements />
  } */
    
    return (
        <form onSubmit={handleStartGame}>
          <p>Welcome to our amazing game!</p>
            <input 
              type="text"
              value={userName}
              placeholder="Enter your name"
              onChange={event => setUserName(event.target.value)}
              className= "username-field"
              required
            />
            <button type="onSubmit">Start Game</button>
        </form>
    )
}

export default StartGame
