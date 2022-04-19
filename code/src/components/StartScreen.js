import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import labyrinth, { startGame } from 'reducers/labyrinth'

export const StartScreen = () => {
  const dispatch = useDispatch()

  const [inputUsername, setInputUsername] = useState('')

  const onSetUsername = (e) => {
    e.preventDefault()
    dispatch(labyrinth.actions.setUsername(inputUsername))
    dispatch(startGame())
  }

  return (
    <div>
      <form onSubmit={onSetUsername}>
        Hello
        <input 
          type="text" 
          value={inputUsername} 
          onChange={e => setInputUsername(e.target.value)} />
        <button type="submit">Start</button>
        </form>
    </div>
    )
}

export default StartScreen
