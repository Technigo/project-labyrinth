import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import direction, {generateGame}from '../reducers/direction'

const StartScreen = () => {
  const [username, setUsername] = useState('')

  const dispatch = useDispatch()

  const onUsernameSet = () => {
    dispatch(direction.actions.setUsername(username))
    dispatch(generateGame());
  }

  return (
    <div>
      <p>WELCOME!</p>
      <input
        type="text"
        value={username}
        onChange={event => setUsername(event.target.value)}
      />
      <button onClick={onUsernameSet}>Start!</button>
    </div>
  )
}

export default StartScreen