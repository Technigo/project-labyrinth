import React from 'react'
import { useSelector } from 'react-redux'
 
import StartScreen from './StartScreen'
import GameScreen from './GameScreen'

const Games = () => {
  const actions = useSelector(store => store.games.actions)
  const loading = useSelector(store => store.games.loading)

  return (
    <main className="main">
       {loading && <h1 className='loading'>LOADING...</h1>}
        {  actions
          ? <GameScreen />
          : <StartScreen />
        }
     </main>   
  )
}

export default Games