import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import labyrinth, { continueGame } from 'reducers/labyrinth'

export const GameScreen = () => {
  const dispatch = useDispatch()

  const currentStep = useSelector(store => store.labyrinth.currentStep)
  const currentStepActions = useSelector(store => store.labyrinth.currentStep.actions)
  const history = useSelector(store => store.labyrinth.history)

  return (
    <div>
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
    </div>
    )
}

export default GameScreen
