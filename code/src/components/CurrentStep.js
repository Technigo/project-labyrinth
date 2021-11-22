import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { game } from 'reducers/game'
import styled from 'styled-components'

export const CurrentStep = () => {
  const dispatch = useDispatch()
  const currentStep = useSelector(store => store.game.currentStep)

  return (
    <div>
      <p>Coordinates: {currentStep?.coordinates}</p>
      <p>{currentStep?.description}</p>
      {currentStep?.actions?.map(action => {
        return (
          <div>
            {action.description}
            <button>
              {action.type} {action.direction}
            </button>
          </div>
        )
      })}
    </div>
  )
}
