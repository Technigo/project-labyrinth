/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { gameProgress } from 'reducers/labyrinth';

const Game = () => {
  const labyrinth = useSelector((store) => store.labyrinth)
  console.log('labyrinth details', labyrinth)
  const dispatch = useDispatch();

  return (
    <div>
      <p>{labyrinth.response.description}</p>
      {labyrinth.response.actions && labyrinth.response.actions.map((userAction) =>
        <div key={userAction.type && userAction.direction}>
          <p>{userAction.type}:{userAction.direction}</p>
          <p>{userAction.description}</p>
          <button
            type="button"
            onClick={
              () => dispatch(gameProgress(userAction.direction))
            }>
            Go {userAction.direction}
          </button>
        </div>)}

    </div>)
}
export default Game;
