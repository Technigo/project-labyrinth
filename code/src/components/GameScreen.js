import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { labyrinth, continueGame } from '../reducers/labyrinth';
import Loading from 'components/Loading';

const GameScreen = ({ username }) => {
  const dispatch = useDispatch();
  const currentStep = useSelector((store) => store.labyrinth.currentStep);
  const gameActions = useSelector(
    (store) => store.labyrinth.currentStep.actions
  );
  const history = useSelector((store) => store.labyrinth.history);
  const isLoading = useSelector((store) => store.ui.isLoading);

  return (
    isLoading === false && (
      <main>
        <div>
          <p>Hello {username}</p>
          <div>{currentStep.description}</div>
          {gameActions.map((action) => (
            <div key={action.description}>
              <p>{action.description}</p>
              <button onClick={() => dispatch(continueGame(action.direction))}>
                {action.direction}
              </button>
            </div>
          ))}
        </div>
      </main>
    )
  );
};

export default GameScreen;
