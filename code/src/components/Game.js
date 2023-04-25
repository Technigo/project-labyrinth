import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
// import Loading from './Loading'

const Game = () => {
  const game = useSelector((store) => store.games.actions)
//   const loading = useSelector((store) => store.games.loading)
    console.log('game', game)
    return <div>
    <p></p>
</div>
}



export default Game;
