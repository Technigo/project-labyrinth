import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchSteps } from '../reducers/steps'

export const Labyrinth = () => {
  const { description, actions } = useSelector(
    (store) => store.steps.setCurrentStep
  )
  const dispatch = useDispatch()

  const nextStep = (type, direction) => {
    dispatch(fetchSteps(type, direction))
  }

  const UserActions = ({ type, direction }) => (
    <button onClick={() => nextStep(type, direction)}>
      {type} {direction}
    </button>
  )

  return (
    <>
      <div>
        <h1>{description}</h1>
      </div>

      {actions.length === 0 && <h2>You made it</h2>}

      {actions.length > 0 &&
        actions.map((choice) => (
          <button key={choice.direction}>
            <div key={choice.description}>
              <div>{choice.direction}</div>
            </div>
            {choice.description}
            <UserActions key={choice.direction} {...choice} />
          </button>
        ))}
    </>
  )
}
