import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'

import labyrinth, { continueGame } from 'reducers/labyrinth'

export const GameScreen = () => {
  const dispatch = useDispatch()

  const currentStep = useSelector(store => store.labyrinth.currentStep)
  const currentStepActions = useSelector(store => store.labyrinth.currentStep.actions)
  const history = useSelector(store => store.labyrinth.history)

  return (
    <StepDiv>
      <h3>{currentStep.description}</h3>
        {currentStepActions.map(action => (
          <div key={action.direction}>
            <p>To the {action.direction}: {action.description}</p>
            <button onClick={() => dispatch(continueGame(action.direction))}>Go {action.direction}</button>
          </div>
        ))}
      {history.length ? 
      <div>Your moves: {history.map((move, index) => (
        <span key={index}> ⇒ {move}</span>
      ))}</div>
      :
      ''}
      {!currentStepActions.length &&
      <button onClick={() => dispatch(labyrinth.actions.restartGame())}>Restart</button>}
    </StepDiv>
  )
}

export default GameScreen

const StepDiv = styled.div`
height: 500px;
width: 300px;
background-color: rgb(230, 230, 230, 0.5);
border: 2px solid red;
`
