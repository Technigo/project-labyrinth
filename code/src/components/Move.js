import React from 'react';
import game, { gameProgress } from 'reducers/game';
import { useDispatch } from 'react-redux';
import { DirectionsContainer } from './styled/containers';

const Move = ({ response }) => {
  const dispatch = useDispatch();

  const onDirectionClick = (direction) => {
    dispatch(game.actions.setDirection(direction));
    dispatch(gameProgress('action'));
  };

  return (
    <>
      {response.actions?.reverse().map((action) => {
        return (
          <DirectionsContainer>
            <p>{action.description}</p>
            <label>
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
