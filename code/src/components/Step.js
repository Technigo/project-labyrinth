import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { handleClick } from '../reducers/reusable'

export const Step = () => {
  const currentStep = useSelector((store) => {
    return store.gameReducer.currentStep
  })
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
              onClick={() => dispatch(handleClick(action.direction))}>
              Go {action.direction}
            </button>
            <p>{action.description}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
