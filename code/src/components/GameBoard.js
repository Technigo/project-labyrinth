import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { loading } from '../reducers/loading'
import { getGameStep } from 'reducers/game'

const GameBoard = () => {
  const game = useSelector((store) => store.game.gameStep)
  const username = useSelector((store) => store.game.username);
  const actions = useSelector((store) => store.game.gameStep.actions);
  // const isLoading = useSelector((store) => store.loading.isLoading);
  const dispatch = useDispatch()

  // const loading = useSelector((store) => store.game.loading)
  console.log('game', game)

  return (
    <div>
      {actions.map((action) => (
        <div key={actions.direction}>
          <p>{game.description}</p>
          <p>{game.coordinates}</p>
          <p>{game.type}</p>
          <p>Pick a direction, {username}</p>
          <button
            type="submit"
            onClick={() => dispatch(getGameStep(actions.type, actions.direction))}>
            Go {action.direction}
          </button>
        </div>
      ))}
    </div>
  );
}

export default GameBoard
