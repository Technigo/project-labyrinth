import React from 'react' 
import { useSelector } from 'react-redux' 

import Header from './Header'
import StartScreen from './StartScreen'
import GameScreen from './GameScreen'

const Games = () => {
  const userName = useSelector(store => store.games.username)
  const error = useSelector(store => store.games.error)
  const loading = useSelector(store => store.games.loading)

  return (
    <>

      {error && `Ups, something went wrong, reason : ${error}`}
      {loading && <h2>LOADING...</h2>}
      {userName &&  <Header />}
      {userName
          ? <GameScreen />
          : <StartScreen /> 
      }
    </>
  )
}

export default Games