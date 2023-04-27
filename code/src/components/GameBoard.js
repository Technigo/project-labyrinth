import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getGameStep } from 'reducers/game'

const GameBoard = () => {
  const game = useSelector((store) => store.game.gameStep)
  const actions = useSelector((store) => store.game.gameStep.actions);
  const username = useSelector((store) => store.game.username);
  const dispatch = useDispatch()

  return (
    <div>
      <p>{game.description}</p>
      <p>{game.coordinates}</p>
      <p>Which way will you travel, {username}?</p>
      {actions && actions.map((action) => (
        <div key={actions.direction}>
          <p>{game.type}</p>
          <p>{action.description}</p>
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
