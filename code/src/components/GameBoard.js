import React from 'react'
import { useSelector } from 'react-redux'
// import styled from 'styled-components/macro'

import StartingPage from './StartingPage'
import { Labyrinth } from './Labyrinth'

// import { fetchSteps } from '../reducers/steps'

const GameBoard = () => {
  const { coordinates } = useSelector((state) => state.steps.setCurrentStep)
  return <>{coordinates ? <Labyrinth /> : <StartingPage />}</>
}

export default GameBoard
