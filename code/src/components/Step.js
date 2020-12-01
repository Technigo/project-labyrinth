import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { HandleMove } from '../reducers/reusable'

export const Step = () => {
  const currentStep = useSelector((store) => {
    return store.gameReducer.currentStep
  })
  const playerName = useSelector((store) => {
    return store.gameReducer.playerName
  })
  console.log(playerName, 'playerName')
  const dispatch = useDispatch()
  return (
    <div>
      <section>
        <p>{currentStep.description}</p>
        <p>Your location: {currentStep.coordinates}</p>
        {currentStep.actions.map((action) => (
          <div key={action.direction}>
            <button
              type="button"
              onClick={() => dispatch(HandleMove(action.direction))}>
              Go {action.direction}
            </button>
            <p>{action.description}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
