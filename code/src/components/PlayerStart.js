import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { game, fetchStart } from 'reducers/game'
import { Button } from 'lib/Button'
import { Labyrinth } from 'components/Labyrinth'

export const PlayerStart = () => {
  const User = useSelector((state) => state.game.username)
  const [username, setUsername] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(game.actions.setUser(username))
    dispatch(fetchStart(username))
  }
  if (User) {
    return <Labyrinth />
  }
  return (
    <div>
      {!User && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="enter a player name"
            required />
          <Button type="submit">
            Start ALREADY!
          </Button>
        </form>
      )}
    </div>
  )
}