/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchNext, game } from 'reducers/game'
import { Button } from 'lib/Button'

export const Labyrinth = () => {
  const getCurrentStep = useSelector((state) => state.game.currentStep)
  const actions = useSelector((state) => state.game.currentStep.actions)
  const User = useSelector((state) => state.game.currentStep.username)
  const dispatch = useDispatch()

  return (
    <div>
      <p>{getCurrentStep.description}</p>
      <p>Choose:</p>
      {actions.map((action) => (
        <div key={action.description}>
          <p>{action.description}</p>
          <Button
            type="button"
            onClick={() => dispatch(fetchNext(User, action.direction))}>
          Go {action.direction}
          </Button>
        </div>
      ))}
    </div>
  )
}