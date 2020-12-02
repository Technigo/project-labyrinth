import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { game } from 'reducers/game'
import { Button } from 'lib/Button'
import { Start } from 'components/Start'

export const PlayerStart = () => {
  const User = useSelector((state) => state.game.username)
  const [username, setUsername] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(game.actions.setUser(username))
  }
  if (User) {
    return <Start />
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="enter a player name"
          required />
        <Button type="submit">
          Here&#39;s my name!
        </Button>
      </form>
    </div>
  )
}