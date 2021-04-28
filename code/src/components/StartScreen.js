import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import game, {generateGame} from '../reducers/game'

const StartScreen = () => {
  const [username, setUsername] = useState('')

  const dispatch = useDispatch()

  const onUsernameSet = () => {
    dispatch(game.actions.setUsername(username))
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