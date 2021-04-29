import React from 'react' 
import { useSelector } from 'react-redux' 

import Header from './Header'
import StartScreen from './StartScreen'
import GameScreen from './GameScreen'
import Loader2 from './Loader2'

const Games = () => {
  const userName = useSelector(store => store.games.username)
  const error = useSelector(store => store.games.error)
  const loading = useSelector(store => store.games.loading)

  return (
    <>

      {error && `Ups, something went wrong, reason : ${error}`}
      {loading && <Loader2 />}
      {userName &&  <Header />}
      {userName
          ? <GameScreen />
          : <StartScreen /> 
      }
    </>
  )
}

export default Games