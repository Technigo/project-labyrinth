import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gameProgress } from 'reducers/game';
import game from 'reducers/game';
import { GameWrapper } from './styled/GameWrapper.styled';
import LoadingIndicator from './LoadingIndicator';

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
    <GameWrapper>
      <div className="nes-container">
      <LoadingIndicator />
      <p>{response.description}</p>
      {response.actions?.map((action) => {
        return (
          <>
            <p key={ action.description }>{ action.description }</p>
            <label>
            <button
              type="button"
              className="nes-btn"
              name="answer"
              onClick={ () => onDirectionClick(action.direction) }>
              { action.direction }
            </button>
            </label>
          </>
        );
      })}
      {response.coordinates === '1,3' && (
        <button type="button" onClick={() => onRestartClick()}>
          Restart Game
        </button>
      )}
      {/*<progress className="nes-progress is-succress" value={response.coordinates} max="20" />*/}
      </div>
    </GameWrapper>
  );
};

export default GameScreen;
