import React from 'react' 
import { useSelector } from 'react-redux' 

import StartScreen from './StartScreen'
import GameScreen from './GameScreen'

const Games = () => {
  const userName = useSelector(store => store.games.username)
  const error = useSelector(store => store.games.error)
  const loading = useSelector(store => store.games.loading)

  return (
    <div>
      {error && `Ups, something went wrong, reason : ${error}`}
      {loading && <h2>LOADING...</h2>}
      {userName 
          ? <GameScreen />
          : <StartScreen />
      }
    </div>
  )
}

export default Games