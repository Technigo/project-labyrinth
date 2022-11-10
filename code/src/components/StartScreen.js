import React from 'react'
import { useSelector } from 'react-redux'
import Game from './Game'
import GameStart from './GameStart'
import LoadingIndicator from './LoadingIndicator'

const StartScreen = () => {
  const startTheGame = useSelector((store) => store.gameState.username);
  const isLoading = useSelector((store) => store.gameState.isLoading)

  return (
    <div>
      {isLoading ? <LoadingIndicator /> : (<div>{startTheGame === '' ? <GameStart /> : <Game />} </div>)}
    </div>
  )
}

export default StartScreen;
