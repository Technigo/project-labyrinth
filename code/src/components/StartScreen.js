import React from 'react'
import { useSelector } from 'react-redux'
import Games from './Game'
import StartPage from './StartPage'
import Spinner from './Spinner'

const StartScreen = () => {
  const startTheGame = useSelector((store) => store.game.username);
  const isLoading = useSelector((store) => store.game.isLoading)

  return (
    <div>
      {isLoading ? <Spinner /> : (<div>{startTheGame === '' ? <StartPage /> : <Games />} </div>)}
    </div>
  )
}

export default StartScreen;
