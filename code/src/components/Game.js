/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAction } from 'reducers/game';
/* import LastPage from './LastPage'; */
import { GameCard } from './StyledComponents'

const Game = () => {
  const currentPosition = useSelector((store) => {
    console.log(`currentPosition: ${JSON.stringify(store)}`)
    return store.game.currentPosition;
  });
  const dispatch = useDispatch();

  const onAction = (action) => {
    dispatch(fetchAction(action))
  };

  return (
    <GameCard title="hello" secondaryTitle="Adventurer">
      <div>
        <div>Description: {currentPosition.description}</div>
        {currentPosition.actions.map((action) => (
          <div key={action.description}>
            <p>{action.description}</p>
            <button
              onClick={() => onAction(action)}>
              {action.type}
              {action.direction.toLowerCase()}
            </button>
          </div>
        ))}
      </div>
    </GameCard>
  )
};

export default Game;