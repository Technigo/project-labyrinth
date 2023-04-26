import React from 'react'
import { useSelector } from 'react-redux'
// import { loading } from 'reducers/loading'

const Game = () => {
  const game = useSelector((store) => store.game.gameStep)

  // export const loading = useSelector((store) => store.game.loading)
  console.log('game', game)

  return (
    <div>
      <p>{game.description}</p>
      <p>{game.coordinates}</p>
      <p>{game.type}</p>

    </div>
  )
}

export default Game;
