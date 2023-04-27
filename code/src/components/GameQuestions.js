import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import games, { GenerateQuestion } from '../reducers/games';
import { DirectionButton, GoBackButton, ResetButton } from './GlobalStyling';

const GameQuestions = () => {
  const description = useSelector((store) => store.games.description);
  const moves = useSelector((store) => store.games.moves);
  const history = useSelector((store) => store.games.history);
  const coordinates = useSelector((store) => store.games.coordinates);

  const dispatch = useDispatch();

  const onChooseDirection = (event) => {
    dispatch(games.actions.setDirection(event.target.value));
    dispatch(GenerateQuestion());
  };

  const onRestartButton = () => {
    dispatch(games.actions.setUserName(''));
    window.location.reload();
  };

  const goToPreviousMove = () => {
    dispatch(games.actions.setPreviousMove());
  };

  return (
    <div>
      <div>
        {history.length > 0 && (
          <GoBackButton type="button" onClick={goToPreviousMove}>
        Go back
          </GoBackButton>
        )}
      </div>
      <div>
        <h1>{description}</h1>
        {moves && moves.map((move) => (
          <div key={move.description}>
            <h2>{move.description}</h2>
            <DirectionButton
              type="button"
              value={move.direction}
              onClick={(event) => onChooseDirection(event)}>
              Go {move.direction}
            </DirectionButton>
          </div>
        ))}
        {coordinates === '1,3' ? <div>Your JSX element here</div> : null}
      </div>
      <ResetButton type="button" onClick={onRestartButton}>Reset</ResetButton>
    </div>
  );
};

export default GameQuestions;
