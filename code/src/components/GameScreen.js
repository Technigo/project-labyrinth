import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import game, { generateGame } from 'reducers/game';

import ProgressBar from './ProgressBar';

const GameScreen = () => {
  const step = useSelector((store) => store.game.currentStep);
  const history = useSelector((store) => store.game.history);
  
  const dispatch = useDispatch();

  const onNextStep = (action) => {
    dispatch(generateGame(action));
  };

  const onPreviousStep = () => {
    dispatch(game.actions.setPreviousStep());
  };

  return (
    <div>
      <button disabled={!history.length} onClick={() => onPreviousStep()}>Go back</button> 
      <h3 className='nes-balloon from-left nes-pointer'>{step.description}</h3>
      {step.actions.map(action => (
        <div className='nes-container is-rounded' key={action.description}>
          <h4>{action.description}</h4>
          <button 
            onClick={() => onNextStep(action)}
            >
            {action.type}{action.direction}
          </button>
        </div>
      ))}
      <ProgressBar />
      {step.actions.length === 0 && <button onClick={() => dispatch(game.actions.restart())}>restart</button>}
    </div>
  );
};

export default GameScreen;