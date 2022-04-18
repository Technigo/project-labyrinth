import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { generateStep } from 'reducers/game';

const Gamescreen = () => {
  const step = useSelector(store => store.game.currentStep)

  const dispatch = useDispatch();

  const onNextStep = (action) => {
    dispatch(generateStep(action));
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
    </div>
  )
};

export default Gamescreen;