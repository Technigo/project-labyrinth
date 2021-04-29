import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import labyrinth, {startLabyrinth} from '../reducers/labyrinth'



const StartScreen = () => {
  const [username, setUsername] = useState('')

  const dispatch = useDispatch()

  const onGameStart = () => {
    dispatch(labyrinth.actions.setUsername(username))
    dispatch(startLabyrinth(username))
  }

  return (
<div>
      <h1>Can you get through the labyrinth?</h1>
      <p>Enter your name here</p>
      <input 
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
      <button onClick={onGameStart}>Start game</button>
      </div>
  )
}

export default StartScreen