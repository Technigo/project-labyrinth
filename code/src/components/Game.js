import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { playGame } from 'reducers/game';
import TypeIt from 'typeit-react';
import { Loader } from './Loader';

const Game = () => {
  const currentLocation = useSelector((store) => store.game.currentLocation);
  const dispatch = useDispatch();
  const loadingState = useSelector((store) => store.game.isLoading)

  if (loadingState) {
    return (
      <Loader />
    )
  }

  const onFormSubmit = (event, type, direction) => {
    event.preventDefault();
    dispatch(playGame(type, direction));
  }

  return (
    <div>
      <h2>{currentLocation.description}</h2>
      {currentLocation.actions
        && currentLocation.actions.map((action) => (
          <div key={action.direction}>
            <TypeIt
              options={{
                strings: action.description,
                speed: 60
              }} />
            <form onSubmit={(event) => onFormSubmit(event, action.type, action.direction)}>
              <button
                type="button"
                onClick={(event) => onFormSubmit(event, action.type, action.direction)}>
                Go {action.direction}
              </button>
            </form>
          </div>
        ))}
    </div>
  );
};

export default Game;