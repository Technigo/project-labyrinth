import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { continueGame } from 'reducers/start';
import { End } from './End';

export const Labyrinth = () => {
  const dispatch = useDispatch();

  const coordinates = useSelector(store => store.start.coordinates);
  const gameDescription = useSelector(store => store.start.description);
  const gameActions = useSelector(store => store.start.actions);
  const username = useSelector(store => store.start.username);

  const onMove = direction => {
    dispatch(continueGame(username, direction));
  };

  console.log(gameDescription);
  return (
    <>
      {coordinates === '1,3' && <End gameDescription={gameDescription} />}
      {username && (
        <container>
          <div>
            <div>
              <h3>{gameDescription}</h3>
              <div>
                {gameActions.map((choice, index) => (
                  <div key={index}>
                    <h4>{choice.description}</h4>
                    <button onClick={() => onMove(choice.direction)}>
                      Go {choice.direction}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </container>
      )}
    </>
  );
};
