/* eslint-disable react/button-has-type */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { game, generateMoves } from 'reducers/game';

export const GameBoard = () => {
  const description = useSelector((store) => store.game.description);
  const actions = useSelector((store) => store.game.actions);
  const dispatch = useDispatch();

  const onRestartButton = () => {
    dispatch(game.actions.restartGame());
  };

  return (
    <div className="GameboardStyle">
      <h1>{description}</h1>
      <button restart type="button" onClick={onRestartButton}>
        Restart Game yas
      </button>

      <div className="CompasWrapper">
        {actions.length > 0 && actions.map((action) => (
          <>
            <p>{action.description}</p>
            <button
              className={action.direction}
              direction={action.direction}
              key={action.direction}
              onClick={() => dispatch(generateMoves(action.direction))}>
              {action.direction}
            </button>
          </>
        ))}

      </div>
    </div>
  );
};
