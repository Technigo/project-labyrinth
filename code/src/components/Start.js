import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { game, fetchStart } from 'reducers/game'
import { Button } from 'lib/Button'

export const Start = () => {
  const [username, setUsername] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(game.action.startGame({ username }))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="enter your name and start the game"
          required />
        <Button type="submit" onClick={() => dispatch(fetchStart())}>
          Start Game
        </Button>
      </form>
    </div>
  )
}