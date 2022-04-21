import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import game, { generateGame } from 'reducers/game';
import GameImages from './GameImages';

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

  const directions = (action) => {
    const moveString = `Move ${action.direction}`
    
    if (action.direction === 'North') {
      return moveString + ' ⬆'
    } else if (action.direction === 'South') {
      return moveString + ' ⬇'
    } else if (action.direction === 'West') {
      return moveString + ' ⬅'
    } else {
      return moveString + ' ⮕'
    }
  }

  return (
    <section className='game-container'>
      {step.actions.length === 0 &&  <i className='nes-icon trophy is-large' />}
      <div className='step-container'>
        <button
          className='back-button nes-btn is-success'
          disabled={!history.length} 
          onClick={() => onPreviousStep()}>
            Go back
        </button> 
        <h3 className='nes-balloon from-left nes-pointer'>{step.description}</h3>
      </div>
      {step?.actions?.map(action => (
        <div key={action.description} className='action-container'>
          <div className='nes-container is-rounded description-container'>
            <GameImages action={action.description} />
            <div className='description-wrapper'>
              <p>{action.description}</p>
              <button className='action-button' onClick={() => onNextStep(action)}>
                {directions(action)}
              </button>
            </div>
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