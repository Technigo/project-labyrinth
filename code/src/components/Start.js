import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { game } from 'reducers/game'
import { fetchStart } from 'reducers/fetch'
import { Labyrinth } from 'components/Labyrinth'
import { Button } from 'lib/Button'
import { Input } from 'lib/Input'
import { ScreenContainer, FormStyle } from 'lib/Container'

export const Start = () => {
  const User = useSelector((state) => state.game.username)
  const [username, setUsername] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(game.actions.setUser(username))
    dispatch(fetchStart(username))
  }
  if (User) {
    return (
      <Labyrinth />
    )
  }
  return (
    <ScreenContainer>
      {!User && (
        <FormStyle onSubmit={handleSubmit}>
          <Input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="enter a player name"
            required />
          <Button type="submit">
            Start
          </Button>
        </FormStyle>
      )}
    </ScreenContainer>
  )
}