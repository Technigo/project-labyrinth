import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { game, fetchStart } from 'reducers/game'
import { Labyrinth } from 'components/Labyrinth'
import { Button } from 'lib/Button'
import { Input } from 'lib/Input'
// import { Container } from 'lib/Container'

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
    <>
      {!User && (
        <form onSubmit={handleSubmit}>
          <Input
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
    </>
  )
}