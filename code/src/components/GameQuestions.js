import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import games, { GenerateQuestion } from '../reducers/games';

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
     return (
      <div>
        {history.length > 0 && (
          <button type="button" onClick={goToPreviousMove}>
        Go back
          </button>
        )}
      </div>
);
      <button type="button" onClick={onRestartButton}>Restart</button>
      <div>
        <h1>{description}</h1>
        {moves && moves.map((move) => (
          <div key={move.description}>
            <h2>{move.description}</h2>
            <button
              type="button"
              value={move.direction}
              onClick={(event) => onChooseDirection(event)}>
              Go {move.direction}
            </button>
          </div>
        ))}
        {coordinates === '1,3' ? <div>Your JSX element here</div> : null}
      </div>
    </div>
  );
};

export default GameQuestions;
