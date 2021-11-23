import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { game, gamePlay } from '../reducers/game'

export const GameStartPage = () => {
  const dispatch = useDispatch()
  const gameStatus = useSelector((store) => store.game.gameStatus)
  const username = useSelector((store) => store.game.username)
  const actions = useSelector(
    (store) => store.game.gameStatus.gameStatus.actions
  )

  return (
    <>
      {actions.length === 1 && <h1>Hello {username.username}!</h1>}
      <h3>{gameStatus.gameStatus.description}</h3>
      {actions.map((item) => (
        <div key={item.description}>
          <h3>{item.description}</h3>
          <button
            onClick={() =>
              dispatch(gamePlay(username.username, item.direction))
            }>
            {item.direction}
          </button>
        </div>
      ))}
      {actions.length === 0 && (
        <button onClick={() => dispatch(game.actions.restart())}>
          Restart game?
        </button>
      )}
    </>
  )
}
export default GameStartPage
