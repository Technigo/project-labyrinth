/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchStart } from 'reducers/game'
import { Button } from 'lib/Button'
import { Labyrinth } from 'components/Labyrinth'

export const Start = () => {
  const User = useSelector((state) => state.game.username)
  const Coordinates = useSelector((state) => state.game.currentStep.coordinates)
  const dispatch = useDispatch()

  if (Coordinates) {
    return <Labyrinth />
  }

  return (
    <div>
      <h1>{`We've got you as ${User}`}</h1>
      <Button
        type="button"
        onClick={() => dispatch(fetchStart(User))}>
        Start Game
      </Button>
    </div>
  )
}