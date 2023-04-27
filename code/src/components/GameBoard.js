import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getGameStep } from 'reducers/game'
// import { LoadingPage } from './LoadingPage'

const GameBoard = () => {
  const game = useSelector((store) => store.game.gameStep)
  const username = useSelector((store) => store.game.username);
  const actions = useSelector((store) => store.game.gameStep.actions);

  const dispatch = useDispatch()

  // const loading = useSelector((store) => store.game.loading)

  return (
    <div>
      <p>{game.description}</p>
      <p>{game.coordinates}</p>
      {actions && actions.map((action) => (
        <div key={actions.direction}>
          <p>{game.type}</p>
          <p>{action.description}</p>
          <p>Pick a direction, {username}</p>
          <button
            type="submit"
            onClick={() => dispatch(getGameStep(
              action.type,
              action.direction
            ))}>
            Go {action.direction}
          </button>
        </div>
      ))}
    </div>
  );
}

export default GameBoard
