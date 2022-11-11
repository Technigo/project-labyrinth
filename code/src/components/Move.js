import React from 'react';
import game, { gameProgress } from 'reducers/game';
import { useDispatch } from 'react-redux';
import { sortArrayByDirection } from '../lib/utils';
import { DirectionsContainer } from './styled/containers';

const Move = ({ response }) => {
  const dispatch = useDispatch();

  const onDirectionClick = (direction) => {
    dispatch(game.actions.setDirection(direction));
    dispatch(gameProgress('action'));
  };

  if (!Array.isArray(response.actions)) {
    return null;
  }

  return (
    <>
      {[...response.actions].sort(sortArrayByDirection).map((action) => {
        return (
          <DirectionsContainer key={action.direction}>
            <p>{action.description}</p>
            <label htmlFor="answer">
              <button
                type="button"
                className="nes-btn is-primary"
                name="answer"
                onClick={() => onDirectionClick(action.direction)}
              >
                Go {action.direction}
              </button>
            </label>
          </DirectionsContainer>
        );
      })}
    </>
  );
};

export default Move;
