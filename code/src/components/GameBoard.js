import React from 'react'
import { useSelector } from 'react-redux'

import StartScreen from 'components/StartScreen'
import GameScreen from 'components/GameScreen'
import Loading from 'components/Loading'

const GameBoard = () => {
  const username = useSelector(store => store.games.username)
  const error = useSelector(store => store.games.error)
  const loading = useSelector(store => store.games.loading)
  
  return (
    <>
      {loading && (
        <Loading />
      )}
      {!loading && (
        <div>
          {error && `Something went wrong: ${error}`}
          {username 
            ? <GameScreen /> 
            : <StartScreen /> 
          }
        </div>
        )}
    </>
  )
}

export default GameBoard