import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTwo } from 'reducers/gameFetch'
import { StarterPage } from './StarterPage'

export const Game = () => {
  const gameData = useSelector((store) => store.gameFetch)
  const gameActions = useSelector((store) => store.gameFetch.actions)
  const coordinates = useSelector((store) => store.gameFetch.coordinates)
  console.log(coordinates);

  const dispatch = useDispatch();

  return (
    <div>
      {coordinates === '' && (<StarterPage />)}
      <p>{gameData.description}</p>
      {gameActions && gameActions.map((item) => {
        return (
          <div key={item.direction}>
            <p>{item.description}</p>
            <button
              direction={item.direction}
              type="button"
              onClick={() => dispatch(fetchTwo(item.direction))}>
              {item.direction}
            </button>
          </div>
        );
      })}
    </div>
  )
}

