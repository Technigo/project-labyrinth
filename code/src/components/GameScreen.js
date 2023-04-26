/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { continueGame } from 'reducers/labyrinth';
import { useDispatch, useSelector } from 'react-redux';
import { GameWrapper, GameP, Th1 } from 'styles/GameStyles';
import TypeIt from 'typeit-react';

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
    <GameWrapper>
      <TypeIt
        options={{
          speed: 30
        }}>
        <Th1>{currentStep.description}</Th1>
        <GameP>Choose wisely {labyrinth.username}</GameP>
      </TypeIt>
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
    </GameWrapper>
  );
}

export default GameScreen;