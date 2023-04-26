import React from 'react'
import { useSelector } from 'react-redux'
// import Loading from './Loading'

const Game = () => {
  // const game = useSelector((store) => store.games.actions)
  const game = useSelector((store) => store.game.gameStep)

  //   const loading = useSelector((store) => store.games.loading)
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
