import React from 'react'
import { useSelector } from 'react-redux'

import { StartForm } from './StartForm'
import { Step } from './Step'

export const GameWrapper = () => {
  const currentStep = useSelector((store) => {
    return store.gameReducer.currentStep
  })
  return (
    <div>
      {currentStep ? <Step /> : <StartForm />}
    </div>
  )
}