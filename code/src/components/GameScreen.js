import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gameProgress } from 'reducers/game';
import game from 'reducers/game';

const GameScreen = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => state.game.response);

  const onDirectionClick = (direction) => {
    dispatch(game.actions.setDirection(direction));
    dispatch(gameProgress('action'));
  };

  const onRestartClick = () => {
    dispatch(game.actions.restart());
  };

  return (
    <>
      <p>Description: {response.description}</p>
      {response.actions?.map((action) => {
        return (
          <div key={action.description}>
            <button
              type="button"
              onClick={() => onDirectionClick(action.direction)}
            >
              {action.direction}
            </button>
            <p>Action description: {action.description}</p>
          </div>
        );
      })}
      {response.coordinates === '1,3' && (
        <button type="button" onClick={() => onRestartClick()}>
          Restart Game
        </button>
      )}
    </>
  );
};

export default GameScreen;
