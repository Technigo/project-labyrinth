import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import game, { generateGame } from 'reducers/game';

const GameScreen = () => {
  const step = useSelector(store => store.game.currentStep)

  const dispatch = useDispatch();

  const onNextStep = (action) => {
    dispatch(generateGame(action));
  }
  
  return (
    <div>
      <h3>{step.description}</h3>
      {step.actions.map(action => (
        <div key={action.description}>
          <h4 key={action.description}>{action.description}</h4>
          <button 
            onClick={() => onNextStep(action)}
            >
            {action.type}{action.direction}
          </button>
        </div>
      ))}
      {step.actions.length === 0 && <button onClick={() => dispatch(game.actions.restart())}>restart</button>}
    </div>
  )
};

export default GameScreen;