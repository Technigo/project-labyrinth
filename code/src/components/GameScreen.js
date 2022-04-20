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
    <section className='game-container'>
              {step.actions.length === 0 &&  <i class="nes-icon trophy is-large" />}
      <div className='step-container'>
        <button
          className='back-button'
          disabled={!history.length} 
          onClick={() => onPreviousStep()}>
            Go back
        </button> 
        <h3 class='nes-balloon from-left nes-pointer'>{step.description}</h3>
      </div>
      {step.actions.map(action => (
        <div className='action-container'>
          <div class='nes-container is-rounded' key={action.description}>
            <p>{action.description}</p>
            <button 
              className='action-button'
              onClick={() => onNextStep(action)}
              >
              {action.type}&nbsp;{action.direction}
            </button>
          </div>
        </div>
      ))}
      {step.actions.length === 0 && 
        <button
          className='restart-button'
          onClick={() => dispatch(game.actions.restart())}
          >restart
          </button>}
      <ProgressBar />
    </section>
  );
};

export default GameScreen;