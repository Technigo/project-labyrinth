/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { continueGame } from 'reducers/labyrinth';
import { useDispatch, useSelector } from 'react-redux';

const GameScreen = () => {
  const dispatch = useDispatch();
  const labyrinth = useSelector((store) => store.labyrinth);
  const currentStep = useSelector((store) => store.labyrinth.currentStep);
  const currentStepActions = useSelector(
    (store) => store.labyrinth.currentStep.actions
  );
  console.log('labyrinth details', labyrinth);
  console.log('currentStep', currentStep)

  return (
    <div>
      <h1>{currentStep.description}</h1>
      <p>Choose wisely {labyrinth.username}</p>
      <div>
        {currentStepActions ? (
          <div>
            {currentStepActions.map((action) => (
              <>
                <button
                  type="button"
                  key={action.direction}
                  onClick={() => dispatch(continueGame(action.direction))}>
                  Go {action.direction}
                </button>
                <p>
                  To the {action.direction}: {action.description}
                </p>
              </>
            ))}
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default GameScreen;