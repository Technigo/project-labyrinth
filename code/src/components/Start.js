import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { useDispatch, useSelector } from 'react-redux'

import { game } from 'reducers/game'
import { fetchStart } from 'reducers/fetch'
import { Labyrinth } from 'components/Labyrinth'
import { ScreenContainer } from 'lib/Container'
import { Button } from 'lib/Button'
import { Input } from 'lib/Input'

const FormStyle = styled.form`
  display: flex;
  flex-flow: column nowrap;
`
const Title = styled.h1`
  font-size: 55px;
  color: #fff;
`

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
    <>
      <ScreenContainer>
        {!User && (
          <FormStyle onSubmit={handleSubmit}>
            <Title>Labyrinth</Title>
            <Input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="enter a player name"
              required />
            <Button type="submit" background="#5c5cd6">
              Start
            </Button>
          </FormStyle>
        )}
      </ScreenContainer>
    </>
  )
}